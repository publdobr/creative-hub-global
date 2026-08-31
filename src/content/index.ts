import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";
import portrait4 from "@/assets/portrait-4.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

import type { Artist, PressItem, Project, Publication, Work } from "./types";

export const IMAGES = { portrait1, portrait2, portrait3, portrait4, work1, work2, work3, work4 };

const portraits = [portrait1, portrait2, portrait3, portrait4];
const works = [work1, work2, work3, work4];

type Seed = {
  id: string;
  name: string;
  birthYear: number;
  city: [string, string, string]; // es / en / ru
  practice: [string, string, string];
  media: [string, string, string];
};

const seeds: Seed[] = [
  {
    id: "irina-molotova",
    name: "Irina Molotova",
    birthYear: 1988,
    city: ["Buenos Aires / Kyiv", "Buenos Aires / Kyiv", "Буэнос-Айрес / Киев"],
    practice: ["Pintura y archivo", "Painting and archive", "Живопись и архив"],
    media: ["Óleo, papel, video", "Oil, paper, video", "Масло, бумага, видео"],
  },
  {
    id: "pavel-arsen",
    name: "Pavel Arsen",
    birthYear: 1979,
    city: ["Buenos Aires / Minsk", "Buenos Aires / Minsk", "Буэнос-Айрес / Минск"],
    practice: ["Escultura", "Sculpture", "Скульптура"],
    media: ["Cerámica, vidrio, yeso", "Ceramics, glass, plaster", "Керамика, стекло, гипс"],
  },
  {
    id: "nadia-verjova",
    name: "Nadia Verjova",
    birthYear: 1993,
    city: ["Córdoba / Tbilisi", "Córdoba / Tbilisi", "Кордова / Тбилиси"],
    practice: ["Fotografía documental", "Documentary photography", "Документальная фотография"],
    media: ["Película 35mm, impresión gelatina", "35mm film, gelatin silver print", "Плёнка 35 мм, желатиносеребряная печать"],
  },
  {
    id: "milena-sorokin",
    name: "Milena Sorokin",
    birthYear: 1985,
    city: ["Buenos Aires / Riga", "Buenos Aires / Riga", "Буэнос-Айрес / Рига"],
    practice: ["Instalación y texto", "Installation and text", "Инсталляция и текст"],
    media: ["Tela, sonido, texto", "Textile, sound, text", "Ткань, звук, текст"],
  },
  {
    id: "artem-lys",
    name: "Artem Lys",
    birthYear: 1991,
    city: ["Rosario / Kharkiv", "Rosario / Kharkiv", "Росарио / Харьков"],
    practice: ["Dibujo", "Drawing", "Рисунок"],
    media: ["Carbonilla, tinta", "Charcoal, ink", "Уголь, тушь"],
  },
  {
    id: "vera-kandel",
    name: "Vera Kandel",
    birthYear: 1974,
    city: ["Buenos Aires / Chisinau", "Buenos Aires / Chisinau", "Буэнос-Айрес / Кишинёв"],
    practice: ["Video y performance", "Video and performance", "Видео и перформанс"],
    media: ["Video HD, voz", "HD video, voice", "HD-видео, голос"],
  },
  {
    id: "grisha-ostrov",
    name: "Grisha Ostrov",
    birthYear: 1996,
    city: ["Buenos Aires / Sofía", "Buenos Aires / Sofia", "Буэнос-Айрес / София"],
    practice: ["Pintura expandida", "Expanded painting", "Расширенная живопись"],
    media: ["Acrílico, malla, madera", "Acrylic, mesh, wood", "Акрил, сетка, дерево"],
  },
  {
    id: "lena-brik",
    name: "Lena Brik",
    birthYear: 1990,
    city: ["Mendoza / Vilnius", "Mendoza / Vilnius", "Мендоса / Вильнюс"],
    practice: ["Cerámica", "Ceramics", "Керамика"],
    media: ["Gres, engobe, esmalte", "Stoneware, engobe, glaze", "Керамогранит, ангоб, глазурь"],
  },
  {
    id: "sasha-gart",
    name: "Sasha Gart",
    birthYear: 1983,
    city: ["Buenos Aires / Odesa", "Buenos Aires / Odesa", "Буэнос-Айрес / Одесса"],
    practice: ["Collage e impresión", "Collage and print", "Коллаж и печать"],
    media: ["Papel de archivo, serigrafía", "Archival paper, screenprint", "Архивная бумага, шелкография"],
  },
  {
    id: "danil-orlov",
    name: "Danil Orlov",
    birthYear: 1987,
    city: ["La Plata / Moscú", "La Plata / Moscow", "Ла-Плата / Москва"],
    practice: ["Sonido e instalación", "Sound and installation", "Звук и инсталляция"],
    media: ["Campo sonoro, objetos", "Field recording, objects", "Полевые записи, объекты"],
  },
  {
    id: "polina-ruk",
    name: "Polina Ruk",
    birthYear: 1994,
    city: ["Buenos Aires / Varsovia", "Buenos Aires / Warsaw", "Буэнос-Айрес / Варшава"],
    practice: ["Grabado", "Printmaking", "Печатная графика"],
    media: ["Aguafuerte, monotipo", "Etching, monotype", "Офорт, монотипия"],
  },
  {
    id: "iván-shelo",
    name: "Iván Shelo",
    birthYear: 1992,
    city: ["Buenos Aires / Ereván", "Buenos Aires / Yerevan", "Буэнос-Айрес / Ереван"],
    practice: ["Arte sonoro", "Sound art", "Саунд-арт"],
    media: ["Sintetizadores modulares", "Modular synthesis", "Модульные синтезаторы"],
  },
  {
    id: "eugenia-tut",
    name: "Eugenia Tut",
    birthYear: 1989,
    city: ["Buenos Aires / Praga", "Buenos Aires / Prague", "Буэнос-Айрес / Прага"],
    practice: ["Dibujo y libro de artista", "Drawing and artist books", "Рисунок и книга художника"],
    media: ["Grafito, encuadernación", "Graphite, bookbinding", "Графит, переплёт"],
  },
  {
    id: "semion-galin",
    name: "Semión Galin",
    birthYear: 1981,
    city: ["Buenos Aires / Bakú", "Buenos Aires / Baku", "Буэнос-Айрес / Баку"],
    practice: ["Pintura", "Painting", "Живопись"],
    media: ["Óleo sobre lino", "Oil on linen", "Масло, лён"],
  },
];

const bioTemplates = {
  es: (s: Seed) =>
    `Nació en ${s.city[0].split(" / ")[1]} en ${s.birthYear}. Desde 2019 vive y trabaja en Argentina. Su práctica parte de materiales de archivo familiar, documentos de tránsito y fragmentos de idioma que se pierden en la mudanza. Formó parte de programas de residencia en Buenos Aires y Rosario, y sus obras integran colecciones privadas en Europa y América del Sur.`,
  en: (s: Seed) =>
    `Born in ${s.city[1].split(" / ")[1]} in ${s.birthYear}. Living and working in Argentina since 2019. The practice starts from family archives, transit documents and fragments of language lost in relocation. Participated in residency programmes in Buenos Aires and Rosario; works are held in private collections across Europe and South America.`,
  ru: (s: Seed) =>
    `Родился(ась) в городе ${s.city[2].split(" / ")[1]} в ${s.birthYear} году. С 2019 года живёт и работает в Аргентине. Практика вырастает из семейного архива, транзитных документов и фрагментов языка, теряющихся при переезде. Участник(ца) резиденций в Буэнос-Айресе и Росарио; работы находятся в частных собраниях Европы и Южной Америки.`,
};

const statementTemplates = {
  es: "Trabajo con lo que queda entre dos lugares: una niebla que no es ni salida ni llegada. Me interesa el momento en que una imagen todavía no decidió qué va a recordar.",
  en: "I work with what remains between two places: a fog that is neither departure nor arrival. I am interested in the moment when an image has not yet decided what it will remember.",
  ru: "Я работаю с тем, что остаётся между двумя местами: с туманом, который не является ни отъездом, ни прибытием. Меня интересует момент, когда изображение ещё не решило, что именно оно запомнит.",
};

const shortTemplates = {
  es: "Práctica situada entre archivo, migración y memoria material.",
  en: "A practice situated between archive, migration and material memory.",
  ru: "Практика между архивом, миграцией и материальной памятью.",
};

export const artists: Artist[] = seeds.map((s, i) => ({
  id: s.id,
  name: s.name,
  birthYear: s.birthYear,
  city: { es: s.city[0], en: s.city[1], ru: s.city[2] },
  practice: { es: s.practice[0], en: s.practice[1], ru: s.practice[2] },
  media: { es: s.media[0], en: s.media[1], ru: s.media[2] },
  website: `https://example.org/${s.id}`,
  instagram: `@${s.id.replace(/-/g, ".")}`,
  portrait: portraits[i % portraits.length]!,
  short: shortTemplates,
  bio: { es: bioTemplates.es(s), en: bioTemplates.en(s), ru: bioTemplates.ru(s) },
  statement: statementTemplates,
}));

const workTitles = [
  "Niebla I",
  "Tránsito",
  "Documento перевод",
  "Umbral",
  "Vaso de frontera",
  "Cartas sin destino",
  "Segunda lengua",
  "Retorno imposible",
];

export const worksList: Work[] = artists.flatMap((a, ai) =>
  [0, 1, 2].map((k) => {
    const idx = (ai + k) % works.length;
    return {
      id: `${a.id}-w${k + 1}`,
      artistId: a.id,
      title: workTitles[(ai * 3 + k) % workTitles.length]!,
      year: 2026 - ((ai + k) % 3),
      technique: {
        es: a.media.es,
        en: a.media.en,
        ru: a.media.ru,
      },
      dimensions: [`120 × 90 cm`, `200 × 150 cm`, `48 × 32 cm`, `70 × 50 cm`][(ai + k) % 4]!,
      image: works[idx]!,
      caption: {
        es: "Vista de la obra en el archivo de la fundación.",
        en: "View of the work in the foundation archive.",
        ru: "Вид работы в архиве фонда.",
      },
    } satisfies Work;
  }),
);

export const projects: Project[] = [
  {
    id: "bruma-cero",
    title: "BRUMA CERO",
    year: 2026,
    type: "exhibition",
    location: { es: "Villa Crespo, Buenos Aires", en: "Villa Crespo, Buenos Aires", ru: "Вилья-Креспо, Буэнос-Айрес" },
    dates: { es: "12.03 — 28.05.2026", en: "12.03 — 28.05.2026", ru: "12.03 — 28.05.2026" },
    curator: "Marina Delgado",
    cover: work1,
    intro: {
      es: "Primera exhibición colectiva del fondo: doce artistas frente al umbral.",
      en: "The foundation's first group exhibition: twelve artists facing the threshold.",
      ru: "Первая групповая выставка фонда: двенадцать художников перед порогом.",
    },
    description: {
      es: "BRUMA CERO reúne pinturas, esculturas y documentos producidos durante los primeros dieciocho meses del fondo. La muestra se organiza como un archivo abierto: las obras no se ordenan por autor sino por grado de opacidad, desde el documento legible hasta la imagen completamente disuelta.",
      en: "BRUMA CERO brings together paintings, sculptures and documents produced during the foundation's first eighteen months. The show is organised as an open archive: works are ordered not by author but by degree of opacity, from the legible document to the fully dissolved image.",
      ru: "BRUMA CERO объединяет живопись, скульптуру и документы, созданные за первые восемнадцать месяцев работы фонда. Экспозиция построена как открытый архив: работы выстроены не по авторам, а по степени непрозрачности — от читаемого документа до полностью растворённого изображения.",
    },
    artistIds: ["irina-molotova", "pavel-arsen", "nadia-verjova", "milena-sorokin", "artem-lys"],
    workIds: ["irina-molotova-w1", "pavel-arsen-w2", "nadia-verjova-w1", "milena-sorokin-w3"],
    catalog: true,
  },
  {
    id: "arteba-2025",
    title: "arteBA — Sección Utopía",
    year: 2025,
    type: "feria",
    location: { es: "La Rural, Buenos Aires", en: "La Rural, Buenos Aires", ru: "La Rural, Буэнос-Айрес" },
    dates: { es: "04.09 — 07.09.2025", en: "04.09 — 07.09.2025", ru: "04.09 — 07.09.2025" },
    cover: work3,
    intro: {
      es: "Primer stand de la fundación en una feria internacional.",
      en: "The foundation's first booth at an international fair.",
      ru: "Первый стенд фонда на международной ярмарке.",
    },
    description: {
      es: "Un stand construido como sala de espera: bancos, documentos plastificados y cinco esculturas de frontera. La presentación fue acompañada por un programa de conversaciones sobre residencia y estatus migratorio en el arte contemporáneo.",
      en: "A booth built as a waiting room: benches, laminated documents and five border sculptures. The presentation was accompanied by a programme of conversations on residency and migratory status in contemporary art.",
      ru: "Стенд, построенный как зал ожидания: скамьи, заламинированные документы и пять «пограничных» скульптур. Презентацию сопровождала программа разговоров о резиденциях и миграционном статусе в современном искусстве.",
    },
    artistIds: ["pavel-arsen", "lena-brik", "sasha-gart"],
    workIds: ["pavel-arsen-w1", "lena-brik-w2", "sasha-gart-w3"],
  },
  {
    id: "segunda-lengua",
    title: "Segunda Lengua",
    year: 2025,
    type: "research",
    location: { es: "Programa en línea y Buenos Aires", en: "Online programme and Buenos Aires", ru: "Онлайн-программа и Буэнос-Айрес" },
    dates: { es: "03.2025 — 12.2025", en: "03.2025 — 12.2025", ru: "03.2025 — 12.2025" },
    cover: work4,
    intro: {
      es: "Investigación de un año sobre pérdida y reconstrucción del idioma.",
      en: "A year-long research project on language loss and reconstruction.",
      ru: "Годовое исследование об утрате и восстановлении языка.",
    },
    description: {
      es: "Seis artistas y dos investigadoras registraron durante un año sus errores de traducción. El material derivó en un archivo sonoro, una serie de impresiones y un cuaderno publicado por la fundación.",
      en: "Six artists and two researchers recorded their translation errors over the course of a year. The material became a sound archive, a print series and a notebook published by the foundation.",
      ru: "Шесть художников и две исследовательницы в течение года фиксировали свои ошибки перевода. Материал стал звуковым архивом, серией отпечатков и тетрадью, изданной фондом.",
    },
    artistIds: ["milena-sorokin", "danil-orlov", "eugenia-tut", "polina-ruk"],
    workIds: ["milena-sorokin-w1", "danil-orlov-w2", "eugenia-tut-w1"],
    catalog: true,
  },
  {
    id: "umbral-nocturno",
    title: "Umbral Nocturno",
    year: 2024,
    type: "event",
    location: { es: "Centro Cultural Recoleta, Buenos Aires", en: "Centro Cultural Recoleta, Buenos Aires", ru: "Centro Cultural Recoleta, Буэнос-Айрес" },
    dates: { es: "19.10.2024", en: "19.10.2024", ru: "19.10.2024" },
    cover: work2,
    intro: {
      es: "Una noche de performance, sonido y lectura.",
      en: "One night of performance, sound and reading.",
      ru: "Одна ночь перформанса, звука и чтения.",
    },
    description: {
      es: "Programa público de cinco horas en el que las obras se activaron una sola vez. No se documentó en video por decisión colectiva: sólo quedan notas, una grabación de sala y la memoria de quienes estuvieron.",
      en: "A five-hour public programme in which the works were activated only once. By collective decision it was not filmed: only notes, a room recording and the memory of those present remain.",
      ru: "Пятичасовая публичная программа, в которой работы были активированы лишь однажды. По общему решению видеосъёмки не было: остались только заметки, запись зала и память присутствовавших.",
    },
    artistIds: ["vera-kandel", "iván-shelo", "danil-orlov"],
    workIds: ["vera-kandel-w1", "iván-shelo-w2"],
  },
  {
    id: "casa-comun",
    title: "Casa Común",
    year: 2024,
    type: "collaboration",
    location: { es: "Rosario, Santa Fe", en: "Rosario, Santa Fe", ru: "Росарио, Санта-Фе" },
    dates: { es: "05.2024 — 08.2024", en: "05.2024 — 08.2024", ru: "05.2024 — 08.2024" },
    curator: "Tomás Ferreyra",
    cover: work1,
    intro: {
      es: "Colaboración con un espacio autogestionado del centro de Rosario.",
      en: "A collaboration with a self-organised space in central Rosario.",
      ru: "Коллаборация с самоорганизованной площадкой в центре Росарио.",
    },
    description: {
      es: "Tres meses de trabajo compartido entre artistas locales y artistas del fondo, sin exhibición final obligatoria. El resultado fue un taller abierto, una biblioteca de préstamo y dos publicaciones en riso.",
      en: "Three months of shared work between local artists and foundation artists, with no obligatory final exhibition. The outcome was an open workshop, a lending library and two riso publications.",
      ru: "Три месяца совместной работы местных художников и художников фонда без обязательной итоговой выставки. Результат — открытая мастерская, библиотека выдачи и две ризо-публикации.",
    },
    artistIds: ["artem-lys", "grisha-ostrov", "semion-galin"],
    workIds: ["artem-lys-w1", "grisha-ostrov-w2", "semion-galin-w3"],
  },
  {
    id: "archivo-provisorio",
    title: "Archivo Provisorio",
    year: 2026,
    type: "research",
    location: { es: "Sede del fondo, Buenos Aires", en: "Foundation premises, Buenos Aires", ru: "Помещение фонда, Буэнос-Айрес" },
    dates: { es: "01.2026 — en curso", en: "01.2026 — ongoing", ru: "01.2026 — продолжается" },
    cover: work4,
    intro: {
      es: "Un archivo que se corrige a sí mismo cada seis meses.",
      en: "An archive that corrects itself every six months.",
      ru: "Архив, который переписывает себя каждые полгода.",
    },
    description: {
      es: "Catalogación abierta de todo el material del fondo: fotografías, cartas, permisos, listas de embalaje. Cada entrada admite versiones contradictorias; ninguna se elimina.",
      en: "An open cataloguing of all foundation material: photographs, letters, permits, packing lists. Each entry allows contradictory versions; nothing is deleted.",
      ru: "Открытая каталогизация всех материалов фонда: фотографии, письма, разрешения, упаковочные листы. Каждая запись допускает противоречивые версии; ничего не удаляется.",
    },
    artistIds: ["sasha-gart", "nadia-verjova", "eugenia-tut"],
    workIds: ["sasha-gart-w1", "nadia-verjova-w2"],
  },
];

export const publications: Publication[] = [
  {
    id: "cuaderno-bruma-01",
    title: {
      es: "Cuaderno Bruma 01: Umbral",
      en: "Bruma Notebook 01: Threshold",
      ru: "Тетрадь Bruma 01: Порог",
    },
    year: 2026,
    author: "Marina Delgado",
    kind: { es: "Ensayo", en: "Essay", ru: "Эссе" },
    cover: work2,
    excerpt: {
      es: "Sobre la niebla como método de trabajo y no como metáfora.",
      en: "On fog as a working method rather than a metaphor.",
      ru: "О тумане как методе работы, а не как метафоре.",
    },
    body: {
      es: "El umbral no es un lugar de paso sino una condición de trabajo prolongada. Este cuaderno reúne notas de taller, transcripciones y documentos de tránsito recopilados durante la preparación de BRUMA CERO. Ninguno de los textos pretende cerrar una definición: la niebla es aquí un procedimiento, una manera de sostener la indeterminación el tiempo suficiente como para que aparezca una forma.",
      en: "The threshold is not a place of passage but a prolonged working condition. This notebook gathers studio notes, transcriptions and transit documents collected while preparing BRUMA CERO. None of the texts attempts to close a definition: fog is here a procedure, a way of holding indeterminacy long enough for a form to appear.",
      ru: "Порог — не место перехода, а длящееся рабочее состояние. Эта тетрадь собирает заметки из мастерских, расшифровки и транзитные документы, накопленные при подготовке BRUMA CERO. Ни один из текстов не стремится закрыть определение: туман здесь — процедура, способ удерживать неопределённость достаточно долго, чтобы возникла форма.",
    },
    projectId: "bruma-cero",
  },
  {
    id: "errores-de-traduccion",
    title: {
      es: "Errores de traducción",
      en: "Translation Errors",
      ru: "Ошибки перевода",
    },
    year: 2025,
    author: "Milena Sorokin",
    kind: { es: "Investigación", en: "Research", ru: "Исследование" },
    cover: work4,
    excerpt: {
      es: "Doce meses de malentendidos registrados como material de obra.",
      en: "Twelve months of misunderstandings recorded as working material.",
      ru: "Двенадцать месяцев недопониманий, зафиксированных как материал работы.",
    },
    body: {
      es: "Cada error de traducción deja una huella doble: la palabra que no llegó y la palabra que apareció en su lugar. Durante un año registramos esas huellas en cuadernos, mensajes de voz y formularios oficiales. El texto propone leer el error no como falla sino como una forma temprana de un idioma propio.",
      en: "Every translation error leaves a double trace: the word that did not arrive and the word that appeared in its place. For a year we recorded those traces in notebooks, voice messages and official forms. The text proposes reading error not as failure but as an early form of a language of one's own.",
      ru: "Каждая ошибка перевода оставляет двойной след: слово, которое не дошло, и слово, возникшее на его месте. В течение года мы фиксировали эти следы в тетрадях, голосовых сообщениях и официальных бланках. Текст предлагает читать ошибку не как сбой, а как раннюю форму собственного языка.",
    },
    projectId: "segunda-lengua",
  },
  {
    id: "materiales-de-frontera",
    title: {
      es: "Materiales de frontera",
      en: "Border Materials",
      ru: "Пограничные материалы",
    },
    year: 2024,
    author: "Pavel Arsen",
    kind: { es: "Texto de artista", en: "Artist text", ru: "Текст художника" },
    cover: work3,
    excerpt: {
      es: "Notas sobre cerámica, peso y el equipaje permitido.",
      en: "Notes on ceramics, weight and permitted luggage.",
      ru: "Заметки о керамике, весе и разрешённом багаже.",
    },
    body: {
      es: "Trabajo con cerámica porque es el material que peor viaja. Cada pieza está pensada desde su posible rotura: el embalaje forma parte de la obra, y la lista de embalaje forma parte del archivo. Este texto recorre cinco piezas producidas entre Minsk y Buenos Aires.",
      en: "I work with ceramics because it is the material that travels worst. Every piece is conceived from its possible breakage: the packing is part of the work, and the packing list is part of the archive. This text follows five pieces produced between Minsk and Buenos Aires.",
      ru: "Я работаю с керамикой, потому что это материал, который хуже всего переносит дорогу. Каждая вещь придумана исходя из возможной поломки: упаковка — часть работы, а упаковочный лист — часть архива. Текст прослеживает пять вещей, сделанных между Минском и Буэнос-Айресом.",
    },
    projectId: "arteba-2025",
  },
  {
    id: "archivo-que-no-cierra",
    title: {
      es: "Un archivo que no cierra",
      en: "An Archive That Does Not Close",
      ru: "Архив, который не закрывается",
    },
    year: 2026,
    author: "Nadia Verjova",
    kind: { es: "Ensayo", en: "Essay", ru: "Эссе" },
    cover: work1,
    excerpt: {
      es: "Contra la versión única de los hechos.",
      en: "Against a single version of events.",
      ru: "Против единственной версии событий.",
    },
    body: {
      es: "Un archivo institucional supone que existe una versión correcta. Archivo Provisorio parte de la hipótesis contraria: cada documento admite dos o tres relatos incompatibles y todos permanecen. El ensayo describe el sistema de catalogación desarrollado por el fondo y sus consecuencias prácticas.",
      en: "An institutional archive assumes a correct version exists. Archivo Provisorio starts from the opposite hypothesis: each document admits two or three incompatible accounts and all of them remain. The essay describes the cataloguing system developed by the foundation and its practical consequences.",
      ru: "Институциональный архив предполагает, что существует верная версия. Archivo Provisorio исходит из обратной гипотезы: каждый документ допускает две-три несовместимые версии, и все они сохраняются. Эссе описывает систему каталогизации фонда и её практические следствия.",
    },
    projectId: "archivo-provisorio",
  },
];

export const press: PressItem[] = [
  {
    id: "clarin-bruma-cero",
    title: {
      es: "Una fundación que hace del desconcierto un método",
      en: "A foundation that turns bewilderment into a method",
      ru: "Фонд, превративший растерянность в метод",
    },
    outlet: "Clarín Cultura",
    date: "2026-03-20",
    url: "https://example.org/press/clarin",
    image: work1,
    projectId: "bruma-cero",
  },
  {
    id: "artishock-arteba",
    title: {
      es: "Bruma en arteBA: la sala de espera como obra",
      en: "Bruma at arteBA: the waiting room as artwork",
      ru: "Bruma на arteBA: зал ожидания как произведение",
    },
    outlet: "Artishock",
    date: "2025-09-09",
    url: "https://example.org/press/artishock",
    image: work3,
    projectId: "arteba-2025",
  },
  {
    id: "eflux-segunda-lengua",
    title: {
      es: "Segunda Lengua: investigar desde el error",
      en: "Segunda Lengua: researching through error",
      ru: "Segunda Lengua: исследование через ошибку",
    },
    outlet: "e-flux Announcements",
    date: "2025-05-14",
    url: "https://example.org/press/eflux",
    image: work4,
    projectId: "segunda-lengua",
  },
  {
    id: "lanacion-umbral",
    title: {
      es: "Cinco horas sin cámaras en Recoleta",
      en: "Five hours without cameras at Recoleta",
      ru: "Пять часов без камер в Реколете",
    },
    outlet: "La Nación",
    date: "2024-10-22",
    url: "https://example.org/press/lanacion",
    image: work2,
    projectId: "umbral-nocturno",
  },
  {
    id: "colta-casa-comun",
    title: {
      es: "Rosario: trabajar sin exhibición final",
      en: "Rosario: working without a final exhibition",
      ru: "Росарио: работа без финальной выставки",
    },
    outlet: "Colta",
    date: "2024-08-30",
    url: "https://example.org/press/colta",
    image: work1,
    projectId: "casa-comun",
  },
];

export const getArtist = (id: string) => artists.find((a) => a.id === id);
export const getProject = (id: string) => projects.find((p) => p.id === id);
export const getPublication = (id: string) => publications.find((p) => p.id === id);
export const worksByArtist = (artistId: string) => worksList.filter((w) => w.artistId === artistId);
export const worksByIds = (ids: string[]) => ids.map((id) => worksList.find((w) => w.id === id)).filter(Boolean) as Work[];
export const projectsByArtist = (artistId: string) => projects.filter((p) => p.artistIds.includes(artistId));
export const pressByProject = (projectId: string) => press.filter((p) => p.projectId === projectId);
export const publicationsByProject = (projectId: string) => publications.filter((p) => p.projectId === projectId);
