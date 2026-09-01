import { Outlet, createFileRoute, notFound } from "@tanstack/react-router";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { isLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
  },
  component: LangLayout,
});

function LangLayout() {
  const { lang } = Route.useParams();
  const l = (isLang(lang) ? lang : "es") as Lang;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang={l} />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter lang={l} />
    </div>
  );
}
