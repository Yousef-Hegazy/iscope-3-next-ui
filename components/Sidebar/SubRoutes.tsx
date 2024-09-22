"use client";

import { NavObject } from "@/lib/navConfig";
import useRoutesStore from "@/stores/routesStore";
import { Divider } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import AppTooltip from "../ui/AppTooltip";
import Icon from "../ui/Icon";
import { useMemo } from "react";
import Link from "next/link";

const SubRoute = ({ item }: { item: NavObject }) => {
  const { setDynamicNavType } = useRoutesStore();
  const cat = useMemo(() => item.key?.split(".")[0], [item.key]);
  const t = useTranslations(`subNav.${cat}`);
  const locale = useLocale();

  return (
    <AppTooltip content={t(item.title)} placement="right" closeDelay={0}>
      {item.asSubLink ? (
        <Link
          href={`/${locale}/${item.route}` || ""}
          className="w-full flex flex-row items-center justify-start gap-2 cursor-pointer px-2 py-1 backdrop-blur-xl rounded-small hover:bg-neutral-200/50 dark:hover:bg-neutral-500/50 hover:shadow"
          // onClick={() => setDynamicNavType(item.key)}
        >
          <Icon icon={item.icon || ""} className="w-4 h-4" />
          <p className="text-sm max-w-full overflow-hidden text-nowrap text-ellipsis font-medium">{t(item.title)}</p>
        </Link>
      ) : (
        <div
          className="w-full flex flex-row items-center justify-start gap-2 cursor-pointer px-2 py-1 backdrop-blur-xl rounded-small hover:bg-neutral-200/50 dark:hover:bg-neutral-500/50 hover:shadow"
          onClick={() => setDynamicNavType(item.key)}
        >
          <Icon icon={item.icon || ""} className="w-4 h-4" />
          <p className="text-sm max-w-full overflow-hidden text-nowrap text-ellipsis font-medium">{t(item.title)}</p>
        </div>
      )}
    </AppTooltip>
  );
};

const SubRoutes = ({ subRoutes, mainRoute }: { subRoutes: NavObject[]; mainRoute: NavObject }) => {
  const t = useTranslations("mainNav");

  return subRoutes.length ? (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm text-center">{t(mainRoute.title ? mainRoute.title : "subRoutes")}</h2>
      <Divider />

      {subRoutes.map((item) => (
        <SubRoute key={item.key || item.route} item={item} />
      ))}
    </div>
  ) : null;
};

export default SubRoutes;
