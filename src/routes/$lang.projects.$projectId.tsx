import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { getArtist, getProject, press, projects, publicationsByProject, worksByIds } from "@/content";
import { dict, t, type Lang } from "@/lib/i18n";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/projects/$projectId")({
  loader: ({ params }) => {
    const project = getProject(params.projectId);
    if (!project) throw notFound();
    return { projectId: project.id };
  },
  head: ({ params }) => {
    const lang = (params.lang as Lang) ?? "es";
    const project = getProject(params.projectId);
    if (!project) {
      return { meta: [{ title: "Foundation Bruma" }, { name: "robots", content: "noindex" }] };
    }
    return localizedHead({
      lang,
      path: `/projects/${project.id}`,
      title: `${project.title} — Foundation Bruma`,
      description: t(project.intro, lang),
      type: "article",
    });
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { lang, projectId } = Route.useParams();
  const l = lang as Lang;
  const d = dict[l] ?? dict.es;
  const project = getProject(projectId)!;
  const works = worksByIds(project.workIds);
  const participants = project.artistIds.map((id) => getArtist(id)).filter(Boolean);
  const related = projects.filter((p) => p.id !== project.id && p.type === project.type).slice(0, 3);
  const pressItems = press.filter((p) => p.projectId === project.id);
  const pubs = publicationsByProject(project.id);

  const ordered = [...projects].sort((a, b) => b.year - a.year);
  const idx = ordered.findIndex((p) => p.id === project.id);
  const prev = idx > 0 ? ordered[idx - 1] : undefined;
  const next = idx < ordered.length - 1 ? ordered[idx + 1] : undefined;

  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % works.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + works.length) % works.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, works.length]);

  const meta: Array<[string, string]> = [
    [d.common.dates, t(project.dates, l)],
    [d.common.location, t(project.location, l)],
    [d.common.type, d.projectTypes[project.type]],
    ...(project.curator ? ([[d.common.curator, project.curator]] as Array<[string, string]>) : []),
  ];

  return (
    <article className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
      <Link to="/$lang/projects" params={{ lang: l }} className="label hover-underline text-muted-foreground">
        ← {d.nav.projects}
      </Link>

      <h1 className="display mt-8 text-5xl md:text-8xl">{project.title}</h1>
      <p className="mt-6 max-w-3xl text-xl leading-snug tracking-tight md:text-3xl">{t(project.intro, l)}</p>

      <div className="mt-16 grid gap-12 md:grid-cols-12">
        <dl className="md:col-span-4 border-t border-border">
          {meta.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-6 border-b border-border py-3">
              <dt className="label text-muted-foreground">{k}</dt>
              <dd className="text-right text-sm">{v}</dd>
            </div>
          ))}
          {project.catalog && (
            <a href="#" className="label hover-underline mt-6 inline-block">
              {d.common.downloadCatalog}
            </a>
          )}
        </dl>
        <div className="md:col-span-7 md:col-start-6">
          <p className="whitespace-pre-line text-lg leading-relaxed">{t(project.description, l)}</p>
        </div>
      </div>

      {works.length > 0 && (
        <Reveal as="section" className="mt-24">
          <h2 className="label text-muted-foreground">{d.common.visualArchive}</h2>
          <ul className="mt-8 grid gap-10 md:grid-cols-3">
            {works.map((w, i) => (
              <li key={w.id}>
                <button type="button" onClick={() => setLightbox(i)} className="group block w-full text-left">
                  <p className="label mb-2">
                    {w.title}, {w.year}
                  </p>
                  <div className="overflow-hidden">
                    <img
                      src={w.image}
                      alt={`${w.title}, ${w.year}`}
                      width={1400}
                      height={1600}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t(w.technique, l)}</p>
                  <p className="text-sm text-muted-foreground">{w.dimensions}</p>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      {lightbox !== null && works[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/98 p-6"
          onClick={() => setLightbox(null)}
        >
          <button type="button" className="label absolute right-6 top-6" onClick={() => setLightbox(null)}>
            {d.common.close}
          </button>
          <img
            src={works[lightbox].image}
            alt={works[lightbox].title}
            className="max-h-[80vh] w-auto max-w-full object-contain"
          />
          <p className="label mt-4 text-muted-foreground">
            {works[lightbox].title}, {works[lightbox].year} — {t(works[lightbox].technique, l)}
          </p>
        </div>
      )}

      {participants.length > 0 && (
        <section className="mt-24 border-t border-border pt-10">
          <h2 className="label text-muted-foreground">{d.common.participants}</h2>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {participants.map((a) => (
              <li key={a!.id}>
                <Link to="/$lang/artists/$artistId" params={{ lang: l, artistId: a!.id }} className="text-lg hover-underline">
                  {a!.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {(pressItems.length > 0 || pubs.length > 0) && (
        <section className="mt-24 border-t border-border pt-10">
          <h2 className="label text-muted-foreground">{d.common.pressAndPublications}</h2>
          <ul className="mt-6 space-y-3">
            {pubs.map((p) => (
              <li key={p.id}>
                <Link to="/$lang/publications/$publicationId" params={{ lang: l, publicationId: p.id }} className="text-lg hover-underline">
                  {t(p.title, l)}
                </Link>
              </li>
            ))}
            {pressItems.map((p) => (
              <li key={p.id}>
                <a href={p.url} target="_blank" rel="noreferrer noopener" className="text-lg hover-underline">
                  {p.outlet} — {t(p.title, l)}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-24 border-t border-border pt-10">
          <h2 className="label text-muted-foreground">{d.common.relatedProjects}</h2>
          <ul className="mt-6 grid gap-8 md:grid-cols-3">
            {related.map((p) => (
              <li key={p.id}>
                <Link to="/$lang/projects/$projectId" params={{ lang: l, projectId: p.id }} className="group block">
                  <p className="label mb-2">
                    {p.year} — {d.projectTypes[p.type]}
                  </p>
                  <div className="overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.title}
                      width={1600}
                      height={1100}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-3 text-xl tracking-tight">{p.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav className="mt-24 flex justify-between border-t border-border pt-6" aria-label="Pagination">
        {prev ? (
          <Link to="/$lang/projects/$projectId" params={{ lang: l, projectId: prev.id }} className="label hover-underline">
            ← {d.common.previous}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to="/$lang/projects/$projectId" params={{ lang: l, projectId: next.id }} className="label hover-underline">
            {d.common.next} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
