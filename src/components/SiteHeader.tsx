import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { LANGS, dict, type Lang } from "@/lib/i18n";

const navItems = (lang: Lang) => {
  const d = dict[lang].nav;
  return [
    { to: "/$lang/about", label: d.about },
    { to: "/$lang/artists", label: d.artists },
    { to: "/$lang/projects", label: d.projects },
    { to: "/$lang/press", label: d.press },
    { to: "/$lang/contact", label: d.contact },
  ] as const;
};

export function LanguageSwitcher({ lang, className = "" }: { lang: Lang; className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const rest = pathname.replace(/^\/(es|en|ru)/, "");

  return (
    <div className={`label flex items-center gap-3 ${className}`} aria-label={dict[lang].common.language}>
      {LANGS.map((l) => (
        <a
          key={l}
          href={`/${l}${rest}`}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          className={l === lang ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );
}

export function SiteHeader({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const items = navItems(lang);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 py-4 md:px-10">
        <Link to="/$lang" params={{ lang }} className="label text-foreground" aria-label="Foundation Bruma">
          Foundation Bruma
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              params={{ lang }}
              activeOptions={{ exact: "exact" in item }}
              className="label text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "label text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <LanguageSwitcher lang={lang} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="label lg:hidden"
          >
            {open ? dict[lang].common.close : dict[lang].common.menu}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-border lg:hidden" aria-label="Mobile">
          <ul className="mx-auto max-w-[1600px] px-5 py-4 md:px-10">
            {items.map((item) => (
              <li key={item.to} className="border-b border-border last:border-0">
                <Link
                  to={item.to}
                  params={{ lang }}
                  className="block py-4 text-2xl tracking-tight"
                  activeProps={{ className: "block py-4 text-2xl tracking-tight underline underline-offset-8" }}
                  activeOptions={{ exact: "exact" in item }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
