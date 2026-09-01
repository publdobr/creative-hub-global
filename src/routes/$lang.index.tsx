import { Link, createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { IMAGES, artists, projects } from "@/content";
import { dict, t, type Lang } from "@/lib/i18n";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const lang = (params.lang as Lang) ?? "es";
    const m = (dict[lang] ?? dict.es).meta.home;
    return localizedHead({ lang, path: "/", title: m.title, description: m.description });
  },
  component: HomePage,
});

const mission = {
  es: "Foundation Bruma reúne artistas de Europa del Este para quienes Argentina se volvió un espacio de transformación y un nuevo hogar. Trabajamos con lo que ocurre en el umbral: la lengua que todavía no se domina, el archivo que llegó incompleto, la forma que aparece antes del nombre.",
  en: "Foundation Bruma brings together artists from Eastern Europe for whom Argentina became a space of transformation and a new home. We work with what happens at the threshold: the language not yet mastered, the archive that arrived incomplete, the form that appears before its name.",
  ru: "Foundation Bruma объединяет художников из Восточной Европы, для которых Аргентина стала пространством трансформации и новым домом. Мы работаем с тем, что происходит на пороге: язык, которым ещё не владеешь, архив, дошедший не полностью, форма, возникающая раньше названия.",
};

const activities = [
  {
    key: "exhibitions",
    title: { es: "Exhibiciones", en: "Exhibitions", ru: "Выставки" },
    body: {
      es: "Muestras colectivas e individuales en sedes propias y en instituciones asociadas de Argentina y el exterior.",
      en: "Group and solo shows in our own venues and with partner institutions in Argentina and abroad.",
      ru: "Групповые и персональные выставки на своих площадках и в институциях-партнёрах в Аргентине и за рубежом.",
    },
  },
  {
    key: "research",
    title: { es: "Investigación", en: "Research", ru: "Исследования" },
    body: {
      es: "Programas de largo aliento sobre migración, lengua, memoria material y prácticas de archivo.",
      en: "Long-form programmes on migration, language, material memory and archival practice.",
      ru: "Долгие программы о миграции, языке, материальной памяти и архивных практиках.",
    },
  },
  {
    key: "publications",
    title: { es: "Publicaciones", en: "Publications", ru: "Публикации" },
    body: {
      es: "Cuadernos, ensayos y textos de artista editados por la fundación, en tres idiomas.",
      en: "Notebooks, essays and artist texts published by the foundation in three languages.",
      ru: "Тетради, эссе и тексты художников, издаваемые фондом на трёх языках.",
    },
  },
  {
    key: "collaborations",
    title: { es: "Colaboraciones", en: "Collaborations", ru: "Коллаборации" },
    body: {
      es: "Trabajo conjunto con espacios autogestionados, curadores independientes y editoriales.",
      en: "Joint work with self-organised spaces, independent curators and publishers.",
      ru: "Совместная работа с самоорганизованными площадками, независимыми кураторами и издательствами.",
    },
  },
  {
    key: "public",
    title: { es: "Programas públicos", en: "Public programmes", ru: "Публичные программы" },
    body: {
      es: "Lecturas, escuchas, visitas de taller y conversaciones abiertas al público.",
      en: "Readings, listening sessions, studio visits and conversations open to the public.",
      ru: "Чтения, слушания, визиты в мастерские и открытые разговоры.",
    },
  },
];

function HomePage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const d = dict[l] ?? dict.es;
  const featured = artists.slice(0, 6);
  const recent = projects.slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-[1600px] px-5 pt-16 pb-10 md:px-10 md:pt-24">
        <h1 className="display text-[19vw] leading-[0.82] md:text-[15vw]">BRUMA</h1>
        <p className="label mt-6 max-w-lg text-muted-foreground">
          Migration · Memory · Identity · Transformation · Liminality · Archive
        </p>
      </section>

      <figure className="mx-auto max-w-[1600px] px-5 md:px-10">
        <img
          src={IMAGES.work1}
          alt="Vista de sala con pinturas de niebla en una galería blanca"
          width={1600}
          height={1100}
          className="w-full object-cover"
        />
        <figcaption className="label mt-3 text-muted-foreground">
          BRUMA CERO, 2026 — Villa Crespo, Buenos Aires
        </figcaption>
      </figure>

      <Reveal as="section" className="mx-auto max-w-[1600px] px-5 py-24 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="label md:col-span-3">{d.nav.about}</h2>
          <p className="text-2xl leading-snug tracking-tight md:col-span-9 md:text-4xl">{t(mission, l)}</p>
        </div>
      </Reveal>

      <section className="mx-auto max-w-[1600px] px-5 md:px-10">
        <ul className="grid gap-px border-t border-border">
          {activities.map((a) => (
            <Reveal as="li" key={a.key} className="grid gap-4 border-b border-border py-8 md:grid-cols-12">
              <h3 className="label md:col-span-3">{t(a.title, l)}</h3>
              <p className="max-w-2xl text-base text-muted-foreground md:col-span-9">{t(a.body, l)}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <Reveal as="section" className="mx-auto max-w-[1600px] px-5 py-24 md:px-10">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="display text-5xl md:text-7xl">{d.nav.artists}</h2>
          <Link to="/$lang/artists" params={{ lang: l }} className="label hover-underline">
            {d.common.viewAllArtists} →
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 lg:grid-cols-6">
          {featured.map((a) => (
            <li key={a.id}>
              <Link to="/$lang/artists/$artistId" params={{ lang: l, artistId: a.id }} className="group block">
                <p className="label mb-2">{a.name}</p>
                <div className="overflow-hidden">
                  <img
                    src={a.portrait}
                    alt={`Retrato de ${a.name}`}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1600px] px-5 pb-24 md:px-10">
        <div className="flex items-baseline justify-between gap-6 border-t border-border pt-10">
          <h2 className="display text-5xl md:text-7xl">{d.nav.projects}</h2>
          <Link to="/$lang/projects" params={{ lang: l }} className="label hover-underline">
            {d.common.all} →
          </Link>
        </div>
        <ul className="mt-12 grid gap-12 md:grid-cols-3">
          {recent.map((p) => (
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
                <p className="mt-1 text-sm text-muted-foreground">{t(p.location, l)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10">
          <Link to="/$lang/contact" params={{ lang: l }} className="display block text-6xl hover-underline md:text-8xl">
            {d.common.getInTouch} →
          </Link>
        </div>
      </Reveal>
    </>
  );
}
