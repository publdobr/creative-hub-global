import { LANGS, LOCALE_TAG, type Lang } from "./i18n";

/**
 * Builds meta + link tags for a localized page.
 * `path` is the route path without the language prefix, e.g. "/artists".
 */
export function localizedHead({
  lang,
  path,
  title,
  description,
  image,
  type = "website",
}: {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: string;
}) {
  const self = `/${lang}${path === "/" ? "" : path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: self },
      { property: "og:locale", content: LOCALE_TAG[lang] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(image ? [{ property: "og:image", content: image }, { name: "twitter:image", content: image }] : []),
    ],
    links: [
      { rel: "canonical", href: self },
      ...LANGS.map((l) => ({
        rel: "alternate",
        hrefLang: l,
        href: `/${l}${path === "/" ? "" : path}`,
      })),
      { rel: "alternate", hrefLang: "x-default", href: `/es${path === "/" ? "" : path}` },
    ],
  };
}
