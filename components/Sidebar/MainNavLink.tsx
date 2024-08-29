"use client";

import { getRoute, NavObject } from "@/lib/navConfig";
import useRoutesStore from "@/stores/routesStore";
import { Button, Tooltip } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo } from "react";
import Icon from "../Icon";

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
    <Tooltip content={t(mainRoute.title)} placement="right" closeDelay={0}>
      <Button
        as={Link}
        href={path}
        prefetch={false}
        variant={selected ? "shadow" : "light"}
        className="h-fit px-2 py-3 w-full flex-shrink-0 flex flex-col gap-2 items-center"
        radius="sm"
        color={selected ? "primary" : "default"}
        onClick={() => setDynamicNavType()}
      >
        <Icon icon={mainRoute.icon || ""} className="" />

        <p
          className={`max-w-full text-sm overflow-hidden text-nowrap text-ellipsis ${selected ? "font-semibold" : ""}`}
        >
          {t(mainRoute.title)}
        </p>
      </Button>
    </Tooltip>
  );
};

export default MainNavLink;
