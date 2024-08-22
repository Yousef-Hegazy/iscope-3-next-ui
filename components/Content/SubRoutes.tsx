"use client";

import { getRoute, NavObject } from "@/lib/navConfig";
import { Button, Divider, Tooltip } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

const SubRoute = ({
  t,
  item,
  locale,
  pathname,
  setCurrent,
}: {
  t: any;
  item: NavObject;
  locale: string;
  pathname: string;
  setCurrent: (i: NavObject) => void;
}) => {
  const selected = useMemo(() => {
    return (
      pathname
        .split("/")
        .filter((x) => x !== locale)
        .findLast((x) => x) === item.route
    );
  }, [item.route, locale, pathname]);

  return (
    <Tooltip key={item.route} content={t(item.title)}>
      <Button
        as={Link}
        href={getRoute(locale, item.route || "")}
        hrefLang={locale}
        color="primary"
        variant={selected ? "solid" : "light"}
        className="w-full"
        size="sm"
        radius="sm"
      >
        <p
          className={`text-sm max-w-full overflow-hidden text-nowrap text-ellipsis ${
            selected ? "font-semibold" : "font-medium"
          }`}
        >
          {t(item.title)}
        </p>
      </Button>
    </Tooltip>
  );
};

const SubRoutes = ({ subRoutes, mainRoute }: { subRoutes: NavObject[]; mainRoute: NavObject }) => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [current, setCurrent] = useState<NavObject>();

  return subRoutes.length ? (
    <div className="flex flex-col h-full max-w-56 w-full gap-3 p-2 shadow-md border-e-1 border-transparent dark:border-neutral-600">
      <h2 className="text-sm text-center">{t(mainRoute?.title || "subRoutes")}</h2>
      <Divider />

      {current?.children ? (
        <div className="flex flex-col items-center justify-start gap-2">
          {current.children.map((item) => (
            <SubRoute setCurrent={setCurrent} key={item.route} item={item} locale={locale} pathname={pathname} t={t} />
          ))}
        </div>
      ) : (
        subRoutes.map((item) => (
          <SubRoute key={item.route} setCurrent={setCurrent} item={item} locale={locale} pathname={pathname} t={t} />
        ))
      )}
    </div>
  ) : null;
};

export default SubRoutes;
