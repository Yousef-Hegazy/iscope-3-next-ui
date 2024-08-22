"use client";

import { getRoute, NavObject } from "@/lib/navConfig";
import { Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { useMemo } from "react";
import Icon from "../Icon";

const MainNavLink = ({
  t,
  mainRoute,
  locale,
  pathname,
}: {
  t: any;
  mainRoute: NavObject;
  locale: string;
  pathname: string;
}) => {
  const path = useMemo(() => getRoute(locale, mainRoute.route || ""), [locale, mainRoute.route]);

  const selected = useMemo(
    () => pathname.split("/").findLast((x) => x) === path?.split("/").findLast((x) => x),
    [path, pathname]
  );

  return (
    <Tooltip content={t(mainRoute.title)}>
      <Button
        as={Link}
        href={path}
        variant={selected ? "shadow" : "light"}
        className={`h-fit px-2 py-3 w-full flex flex-col gap-2 items-center`}
        radius="sm"
        color={selected ? "primary" : "default"}
      >
        <Icon icon={mainRoute.icon || ""} />

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
