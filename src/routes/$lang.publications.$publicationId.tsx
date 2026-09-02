import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { getProject, getPublication } from "@/content";
import { dict, t, type Lang } from "@/lib/i18n";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/publications/$publicationId")({
  loader: ({ params }) => {
    const publication = getPublication(params.publicationId);
    if (!publication) throw notFound();
    return { publicationId: publication.id };
  },
  head: ({ params }) => {
    const lang = (params.lang as Lang) ?? "es";
    const publication = getPublication(params.publicationId);
    if (!publication) {
      return { meta: [{ title: "Foundation Bruma" }, { name: "robots", content: "noindex" }] };
    }
    return localizedHead({
      lang,
      path: `/publications/${publication.id}`,
      title: `${t(publication.title, lang)} — Foundation Bruma`,
      description: t(publication.excerpt, lang),
      type: "article",
    });
  },
  component: PublicationPage,
});

function PublicationPage() {
  const { lang, publicationId } = Route.useParams();
  const l = lang as Lang;
  const d = dict[l] ?? dict.es;
  const p = getPublication(publicationId)!;
  const project = p.projectId ? getProject(p.projectId) : undefined;

  return (
    <article className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
      <Link to="/$lang/publications" params={{ lang: l }} className="label hover-underline text-muted-foreground">
        ← {d.nav.publications}
      </Link>

      <p className="label mt-8 text-muted-foreground">
        {p.year} — {t(p.kind, l)} — {p.author}
      </p>
      <h1 className="display mt-4 max-w-5xl text-5xl md:text-7xl">{t(p.title, l)}</h1>

      <img
        src={p.cover}
        alt={t(p.title, l)}
        width={1400}
        height={1000}
        className="mt-12 aspect-[7/5] w-full object-cover md:aspect-[21/9]"
      />

      <div className="mt-16 grid gap-12 md:grid-cols-12">
        <p className="md:col-span-4 text-xl leading-snug tracking-tight">{t(p.excerpt, l)}</p>
        <div className="md:col-span-7 md:col-start-6">
          <p className="whitespace-pre-line text-lg leading-relaxed">{t(p.body, l)}</p>
        </div>
      </div>

      {project && (
        <section className="mt-24 border-t border-border pt-10">
          <h2 className="label text-muted-foreground">{d.common.relatedProjects}</h2>
          <Link
            to="/$lang/projects/$projectId"
            params={{ lang: l, projectId: project.id }}
            className="mt-4 inline-block text-2xl tracking-tight hover-underline"
          >
            {project.title}
          </Link>
        </section>
      )}
    </article>
  );
}
