# Foundation Bruma — многоязычный сайт-архив

Editorial-архив художественного объединения: ES (основной), EN, RU. Первая версия — вся структура по ТЗ с выдуманным контентом и изображениями-плейсхолдерами, без бэкенда. Реальные тексты и фото подставим позже.

## Визуальное направление

С референсов (Departamento 112, БУДУЩЕЕ/FUTURO): белый фон, чёрный текст, нейтральный гротеск (Helvetica-подобный), верхний регистр и разрядка в навигации и подписях, очень крупные заголовки страниц, много воздуха, тонкие линии-разделители вместо карточек с тенями. Изображения — единственный источник цвета. Асимметричная «архивная» сетка: снимки разной высоты, смещённые по вертикали, подпись строго над изображением мелким caps. Анимация только смысловая: fade-in по scroll, лёгкое затемнение/зум изображения при hover, уважение к prefers-reduced-motion.

## Структура сайта

Все страницы живут под языковым префиксом: `/es/…`, `/en/…`, `/ru/…`; корень `/` перенаправляет на `/es`.

- HOME = ABOUT — hero с крупным «BRUMA», манифест фонда, блоки exhibitions / research / publications / collaborations / public programmes, превью художников с «VIEW ALL ARTISTS», блок «GET IN TOUCH»
- ARTISTS — архивная сетка портретов с именами, ~14 вымышленных художников
- ARTIST PAGE — имя, метаданные (город, год рождения, практика, media, сайт, Instagram), Bio, Statement, Selected Works с полями Artist / Title / Year / Technique / Dimensions, ссылки, связанные проекты
- PROJECTS — фильтры ALL / EXHIBITION / FERIA / EVENT / RESEARCH / COLLABORATION и по годам; карточки title, year, type, location, image с hover-раскрытием
- PROJECT PAGE — заголовок, метаданные (даты, место, тип, участники, куратор), описание, визуальный архив с fullscreen-просмотром и подписями, участники, пресса, download catalog, related projects, навигация previous/next
- PUBLICATIONS + PUBLICATION PAGE — тексты и исследования фонда
- PRESS — внешние публикации: издание, дата, связанный проект, превью, внешняя ссылка
- CONTACT — email, Instagram, локация, текст о коллаборациях, форма Name / Email / Subject / Message с валидацией, honeypot-защитой, loading-состоянием и сообщением «Gracias por su mensaje.»
- Footer на всех страницах: BRUMA, навигация, ES / RU / EN, Email, Instagram, copyright

## Мультиязычность

Словари ES / EN / RU в файлах, вымышленный контент переведён на все три языка. Переключатель в шапке и подвале сохраняет текущую страницу. Fallback на ES при отсутствующем переводе. Локализованные title/description, hreflang-ссылки на все три версии и canonical на каждой странице.

## Технические детали

- TanStack Start, файловые роуты `src/routes/$lang.*`; данные — типизированные фикстуры в `src/content/` (artists, projects, publications, press), связи artist ↔ project ↔ publication ↔ press по id; замена фикстур на CMS позже не затронет компоненты
- Дизайн-токены и типографика в `src/styles.css` (oklch, монохромная шкала); шрифты подключаются `<link>` в `__root.tsx`
- Изображения — сгенерированные плейсхолдеры в `src/assets` через Lovable Assets, `loading="lazy"`, `width`/`height`, alt-тексты
- Доступность: семантические заголовки, видимый focus, keyboard-навигация по меню/фильтрам/галерее, labels у полей, `prefers-reduced-motion`
- SEO: `head()` на каждом роуте, sitemap.xml и robots.txt с тремя языковыми ветками

## Что откладываем

CMS и Lovable Cloud (форма контактов пока валидирует и показывает успех без отправки), Google Analytics 4 и Search Console, реальные тексты и фотографии.
