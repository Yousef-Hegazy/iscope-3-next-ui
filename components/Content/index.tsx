"use client";

import navConfig, { NavObject } from "@/lib/navConfig";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MainNavLink from "./MainNavLink";
import SubRoutes from "./SubRoutes";

const Content = () => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [mainRoute, setMainRoute] = useState<NavObject>();

  useEffect(() => {
    let matches = undefined;

    for (const object of navConfig) {
      // const matching = `/${locale}/${object.route}`;
      matches = pathname.split("/").find((x) => x === object.route);

      if (matches) {
        setMainRoute(object);
        break;
      } else {
        continue;
      }
    }

    if (!matches) setMainRoute(undefined);
  }, [pathname]);

  return (
    <>
      <div className="max-w-32 w-full h-full shadow-md overflow-y-auto overflow-x-hidden border-e-1 border-e-transparent flex flex-col items-center gap-3 p-3 dark:border-e-neutral-600">
        {navConfig.map((item) => (
          <MainNavLink key={item.route} mainRoute={item} t={t} locale={locale} pathname={pathname} />
        ))}
      </div>

      {mainRoute?.children && <SubRoutes mainRoute={mainRoute} subRoutes={mainRoute.children} />}
    </>
  );
};

Content.displayName = "Content";

export default Content;
