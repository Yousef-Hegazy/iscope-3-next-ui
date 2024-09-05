"use client";

import { getRoute, NavObject } from "@/lib/navConfig";
import useRoutesStore from "@/stores/routesStore";
import { Button } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo } from "react";
import AppTooltip from "../ui/AppTooltip";
import Icon from "../ui/Icon";

const MainNavLink = ({ item }: { item: NavObject }) => {
  const { mainRoute, setMainRoute } = useRoutesStore();
  const locale = useLocale();
  const path = useMemo(() => getRoute(locale, item?.route || ""), [locale, item?.route]);
  const { setDynamicNavType } = useRoutesStore();
  const t = useTranslations();

  const selected = useMemo(() => {
    // const split = pathname.split("/");
    // return path === `${pathname}/` || !!split.find((x) => x === mainRoute.route);
    return mainRoute?.route === item.route;
  }, [item.route, mainRoute?.route]);

  return (
    <AppTooltip content={t(item?.title)} placement="right" closeDelay={0}>
      <Button
        as={Link}
        href={path}
        variant={selected ? "shadow" : "light"}
        className="h-max w-full px-2 py-3 flex-shrink-0 flex flex-col gap-2 items-center"
        radius="sm"
        color={selected ? "primary" : "default"}
        onClick={(e) => {
          setMainRoute(item);
          setDynamicNavType();
        }}
      >
        <Icon icon={item?.icon || ""} />

        <p
          className={`max-w-full text-sm overflow-hidden text-nowrap text-ellipsis ${selected ? "font-semibold" : ""}`}
        >
          {t(item?.title)}
        </p>
      </Button>
    </AppTooltip>
  );
};

export default MainNavLink;
