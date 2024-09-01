"use client";

import { getRoute, NavObject } from "@/lib/navConfig";
import useRoutesStore from "@/stores/routesStore";
import { Button } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo } from "react";
import AppTooltip from "../ui/AppTooltip";
import Icon from "../ui/Icon";

const MainNavLink = ({ mainRoute, pathname }: { mainRoute: NavObject; pathname: string }) => {
  const locale = useLocale();
  const path = useMemo(() => getRoute(locale, mainRoute.route || ""), [locale, mainRoute.route]);
  const { setDynamicNavType } = useRoutesStore();
  const t = useTranslations();

  const selected = useMemo(() => {
    const split = pathname.split("/");
    return path === `${pathname}/` || !!split.find((x) => x === mainRoute.route);
  }, [mainRoute.route, path, pathname]);

  return (
    <AppTooltip content={t(mainRoute.title)} placement="right" closeDelay={0}>
      <Button
        as={Link}
        href={path}
        variant={selected ? "shadow" : "light"}
        className="h-max w-full px-2 py-3 flex-shrink-0 flex flex-col gap-2 items-center"
        radius="sm"
        color={selected ? "primary" : "default"}
        onClick={(e) => {
          setDynamicNavType();
        }}
      >
        <Icon icon={mainRoute.icon || ""} />

        <p
          className={`max-w-full text-sm overflow-hidden text-nowrap text-ellipsis ${selected ? "font-semibold" : ""}`}
        >
          {t(mainRoute.title)}
        </p>
      </Button>
    </AppTooltip>
  );
};

export default MainNavLink;
