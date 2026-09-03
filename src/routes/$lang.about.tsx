import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { about, activities } from "@/content/about";
import { CONTACT_INFO, dict, t, type Lang } from "@/lib/i18n";
import { localizedHead } from "@/lib/seo";

function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
      )}
    </>
  );
}

export const Route = createFileRoute("/$lang/about")({
  head: ({ params }) => {
    const lang = (params.lang as Lang) ?? "es";
    const m = (dict[lang] ?? dict.es).meta.about;
    return localizedHead({ lang, path: "/about", title: m.title, description: m.description });
  },
  component: AboutPage,
});

function AboutPage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const d = dict[l] ?? dict.es;
  const a = about[l] ?? about.es;

  return (
    <>
      <section className="mx-auto max-w-[1600px] px-5 pt-16 pb-10 md:px-10 md:pt-24">
        <h1 className="display text-6xl leading-[0.9] md:text-8xl">{a.heading}</h1>
      </section>

      <Reveal as="section" className="mx-auto max-w-[1600px] px-5 pb-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-9 md:col-start-4">
            <p className="text-2xl leading-snug tracking-tight md:text-4xl">
              {a.lead}
              {a.leadRest}
            </p>
            {a.body.map((para, i) => (
              <p key={i} className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {renderText(para)}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      <section className="mx-auto max-w-[1600px] px-5 md:px-10">
        <ul className="grid gap-px border-t border-border">
          {activities.map((item) => (
            <Reveal as="li" key={item.key} className="grid gap-4 border-b border-border py-8 md:grid-cols-12">
              <h2 className="label md:col-span-3">{item.title[l]}</h2>
              <p className="max-w-2xl text-base text-muted-foreground md:col-span-9">{item.body[l]}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <Reveal as="section" className="mx-auto max-w-[1600px] px-5 py-24 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="label md:col-span-3">{d.nav.contact}</h2>
          <ul className="space-y-3 md:col-span-9">
            <li>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-2xl tracking-tight hover-underline md:text-3xl">
                {CONTACT_INFO.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-2xl tracking-tight hover-underline md:text-3xl"
              >
                Instagram {CONTACT_INFO.instagram}
              </a>
            </li>
            <li className="text-2xl tracking-tight text-muted-foreground md:text-3xl">
              {t(CONTACT_INFO.location, l)}
            </li>
          </ul>
        </div>
      </Reveal>
    </>
  );
}
