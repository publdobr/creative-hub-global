import { Link, createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { IMAGES, artists, projects } from "@/content";
import { dict, type Lang, CONTACT_INFO, t } from "@/lib/i18n";
import { localizedHead } from "@/lib/seo";

// Функция для парсинга **bold** текста
function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i}>{part.slice(2, -2)}</strong>
          );
        }
        return part;
      })}
    </>
  );
}

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const lang = (params.lang as Lang) ?? "es";
    const m = (dict[lang] ?? dict.es).meta.home;
    return localizedHead({ lang, path: "/", title: m.title, description: m.description });
  },
  component: HomePage,
});

const about = {
  es: {
    heading: "Sobre Bruma",
    lead: "Bruma es una fundación de apoyo a artistas para quienes Argentina se ha convertido en un nuevo hogar y un espacio de transformación, creada por un colectivo de siete artistas eslavos.",
    body: [
      "**Exploramos el estado de estar entre:** entre el pasado y el presente, la memoria y la experiencia nueva, lo conocido y lo desconocido. Lo que quedó atrás no desaparece: sigue existiendo en las imágenes, los gestos, el lenguaje, las huellas digitales y la memoria personal, entrando en diálogo con el nuevo territorio. Bruma nace de este estado de incertidumbre como un espacio donde la identidad no es algo fijo, sino un proceso que se forma, cambia y se reconstruye constantemente.",
      "**Nuestra misión es** crear un espacio para el arte contemporáneo donde los artistas puedan explorar estos procesos, compartir experiencias y generar nuevos vínculos entre personas, culturas, prácticas artísticas y contextos.",
      "**Estamos abiertos a colaborar** con artistas, curadores, instituciones culturales, investigadores y otras iniciativas que compartan nuestros valores.",
    ],
  },
  en: {
    heading: "About Bruma",
    lead: "Bruma is a foundation supporting artists for whom Argentina has become a new home and a space of transformation, created by a collective of seven Slavic artists.",
    body: [
      "**We explore the experience of being in-between** — between past and present, memory and new experience, the familiar and the unknown. What has been left behind does not disappear: it continues to exist through images, gestures, language, digital traces, and personal memory, entering into dialogue with a new territory. Bruma emerges from this state of uncertainty as a space where identity is not fixed, but constantly formed, transformed, and reconstructed.",
      "**Our mission is** to create a space for contemporary art where artists can explore these processes, exchange experiences, and build new connections between people, cultures, artistic practices, and contexts.",
      "**We are open to collaborations** with artists, curators, cultural institutions, researchers, and other initiatives that share our values.",
    ],
  },
  ru: {
    heading: "О Bruma",
    lead: "Bruma — фонд поддержки художников, для которых Аргентина стала новым домом и пространством трансформации, созданный объединением из семи художников из Восточной Европы.",
    body: [
      "**Мы исследуем состояние между** — между прошлым и настоящим, памятью и новым опытом, знакомым и неизвестным. То, что осталось позади, не исчезает: оно продолжает существовать в образах, жестах, языке, цифровых следах и личной памяти, вступая в диалог с новым местом. Bruma возникает из этого состояния неопределённости — как пространство, где идентичность не является чем-то фиксированным, а постоянно формируется, меняется и пересобирается.",
      "**Наша миссия —** создавать пространство для современного искусства, в котором художники могут исследовать эти процессы, обмениваться опытом и создавать новые связи — между людьми, культурами, художественными практиками и контекстами.",
      "**Мы открыты к сотрудничеству** с художниками, кураторами, культурными институциями, исследователями и другими инициативами, которым близки наши ценности.",
    ],
  },
};

const activities = [
  {
    key: "exhibitions",
    title: { es: "Exhibiciones", en: "Exhibitions", ru: "Выставки" },
    body: {
      es: "Organizamos exposiciones colectivas e individuales en nuestros propios espacios y en instituciones asociadas, en Argentina y en otros países.",
      en: "We organize group and solo exhibitions in our own spaces and in partner institutions in Argentina and abroad.",
      ru: "Организуем групповые и персональные выставки на своих площадках и в институтах-партнёрах в Аргентине и за рубежом.",
    },
  },
  {
    key: "research",
    title: { es: "Investigación", en: "Research", ru: "Исследования" },
    body: {
      es: "Apoyamos investigaciones sobre migración, lenguaje, memoria, tradiciones, búsqueda de pertenencia, diálogo con el territorio y prácticas de archivo.",
      en: "We support research into migration, language, memory, traditions, belonging, dialogue with territory, and archival practices.",
      ru: "Поддерживаем исследования миграции, языка, памяти, традиций, поиска своего места, диалога с территорией, архивных практик.",
    },
  },
  {
    key: "funding",
    title: { es: "Apoyo y financiamiento", en: "Funding support", ru: "Грантовая поддержка" },
    body: {
      es: "Buscamos oportunidades de financiamiento y convocatorias para hacer posibles proyectos artísticos independientes, con especial atención a iniciativas de artistas migrantes y refugiados.",
      en: "We seek funding opportunities and grants to help realize independent artistic projects, with a particular focus on initiatives by migrant and refugee artists.",
      ru: "Ищем возможности финансирования для реализации независимых творческих проектов художников-беженцев и мигрантов.",
    },
  },
  {
    key: "collaborations",
    title: { es: "Colaboraciones", en: "Collaborations", ru: "Коллаборации" },
    body: {
      es: "Trabajamos junto a espacios autogestionados, curadores independientes, editoriales y otras iniciativas culturales.",
      en: "We work with self-organized spaces, independent curators, publishers, and other cultural initiatives.",
      ru: "Работаем совместно с самоорганизованными площадками, независимыми кураторами и издательствами.",
    },
  },
  {
    key: "public",
    title: { es: "Programas públicos", en: "Public programmes", ru: "Публичные программы" },
    body: {
      es: "Organizamos lecturas, escuchas, visitas a talleres y conversaciones abiertas.",
      en: "We organize readings, listening sessions, studio visits, and open conversations.",
      ru: "Организуем чтения, слушания, визиты в мастерские и открытые разговоры.",
    },
  },
];

function HomePage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const d = dict[l] ?? dict.es;
  const a = about[l] ?? about.es;
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
          <h2 className="label md:col-span-3">{a.heading}</h2>
          <div className="md:col-span-9">
            <p className="text-2xl leading-snug tracking-tight md:text-4xl">{a.lead}</p>
            {a.body.map((para, i) => (
              <p key={i} className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {renderText(para)}
              </p>
            ))}

            {/* Contacts block on About page */}
            <div className="mt-10">
              <h2 className="display mt-8 text-4xl md:text-6xl">{d.nav.contact}</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{d.contact.collaboration}</p>

              <ul className="mt-6 border-t border-border max-w-3xl">
                <li className="border-b border-border py-3">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover-underline text-lg">
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li className="border-b border-border py-3">
                  <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noreferrer noopener" className="hover-underline text-lg">
                    Instagram {CONTACT_INFO.instagram}
                  </a>
                </li>
                <li className="border-b border-border py-3 text-lg text-muted-foreground">{t(CONTACT_INFO.location, l)}</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      <section className="mx-auto max-w-[1600px] px-5 md:px-10">
        <ul className="grid gap-px border-t border-border">
          {activities.map((a) => (
            <Reveal as="li" key={a.key} className="grid gap-4 border-b border-border py-8 md:grid-cols-12">
              <h3 className="label md:col-span-3">{a.title[l]}</h3>
              <p className="max-w-2xl text-base text-muted-foreground md:col-span-9">{a.body[l]}</p>
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
                <p className="mt-1 text-sm text-muted-foreground">{p.location[l]}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10">
          <Link to="/$lang/contact" params={{ lang: l }} className="display block text-8xl hover-underline md:text-10xl">
            {d.common.getInTouch} →
          </Link>
        </div>
      </Reveal>
    </>
  );
}
