import type { Lang } from "@/lib/i18n";

export const about: Record<Lang, { heading: string; lead: string; leadRest: string; body: string[] }> = {
  es: {
    heading: "Sobre la fundación",
    lead: "Bruma es una fundación de apoyo a artistas para quienes Argentina se ha convertido en un nuevo hogar y un espacio de transformación",
    leadRest: ", creada por un colectivo de siete artistas eslavos.",
    body: [
      "**Exploramos el estado de estar entre:** entre el pasado y el presente, la memoria y la experiencia nueva, lo conocido y lo desconocido. Lo que quedó atrás no desaparece: sigue existiendo en las imágenes, los gestos, el lenguaje, las huellas digitales y la memoria personal, entrando en diálogo con el nuevo territorio. Bruma nace de este estado de incertidumbre como un espacio donde la identidad no es algo fijo, sino un proceso que se forma, cambia y se reconstruye constantemente.",
      "**Nuestra misión es** crear un espacio para el arte contemporáneo donde los artistas puedan explorar estos procesos, compartir experiencias y generar nuevos vínculos entre personas, culturas, prácticas artísticas y contextos.",
      "**Estamos abiertos a colaborar** con artistas, curadores, instituciones culturales, investigadores y otras iniciativas que compartan nuestros valores.",
    ],
  },
  en: {
    heading: "About the foundation",
    lead: "Bruma is a foundation supporting artists for whom Argentina has become a new home and a space of transformation",
    leadRest: ", created by a collective of seven Slavic artists.",
    body: [
      "**We explore the experience of being in-between** — between past and present, memory and new experience, the familiar and the unknown. What has been left behind does not disappear: it continues to exist through images, gestures, language, digital traces, and personal memory, entering into dialogue with a new territory. Bruma emerges from this state of uncertainty as a space where identity is not fixed, but constantly formed, transformed, and reconstructed.",
      "**Our mission is** to create a space for contemporary art where artists can explore these processes, exchange experiences, and build new connections between people, cultures, artistic practices, and contexts.",
      "**We are open to collaborations** with artists, curators, cultural institutions, researchers, and other initiatives that share our values.",
    ],
  },
  ru: {
    heading: "О фонде",
    lead: "Bruma — фонд поддержки художников, для которых Аргентина стала новым домом и пространством трансформации",
    leadRest: ", созданный объединением из семи художников из Восточной Европы.",
    body: [
      "**Мы исследуем состояние между** — между прошлым и настоящим, памятью и новым опытом, знакомым и неизвестным. То, что осталось позади, не исчезает: оно продолжает существовать в образах, жестах, языке, цифровых следах и личной памяти, вступая в диалог с новым местом. Bruma возникает из этого состояния неопределённости — как пространство, где идентичность не является чем-то фиксированным, а постоянно формируется, меняется и пересобирается.",
      "**Наша миссия —** создавать пространство для современного искусства, в котором художники могут исследовать эти процессы, обмениваться опытом и создавать новые связи — между людьми, культурами, художественными практиками и контекстами.",
      "**Мы открыты к сотрудничеству** с художниками, кураторами, культурными институциями, исследователями и другими инициативами, которым близки наши ценности.",
    ],
  },
};

export const activities = [
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
] as const;

export function renderRichText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/);
}
