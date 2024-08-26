"use client";

import { NavObject } from "@/lib/navConfig";
import useRoutesStore from "@/stores/routesStore";
import { Divider, Tooltip } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Icon from "../Icon";

const SubRoute = ({ t, item }: { t: any; item: NavObject }) => {
  const { setDynamicNavType } = useRoutesStore();

  return (
    <Tooltip content={t(item.title)} placement="right" closeDelay={0}>
      <div
        className="w-full flex flex-row items-center justify-start gap-2 cursor-pointer px-2 py-1 backdrop-blur-xl rounded-small hover:bg-neutral-200/50 dark:hover:bg-neutral-500/50 hover:shadow"
        onClick={() => setDynamicNavType(item.key)}
      >
        <Icon icon={item.icon || ""} className="w-4 h-4" />
        <p className="text-sm max-w-full overflow-hidden text-nowrap text-ellipsis font-medium">{t(item.title)}</p>
      </div>
    </Tooltip>
  );
};

const SubRoutes = ({ subRoutes, mainRoute }: { subRoutes: NavObject[]; mainRoute: NavObject }) => {
  const t = useTranslations();

  return subRoutes.length ? (
    <>
      <h2 className="text-sm text-center">{t(mainRoute?.title || "subRoutes")}</h2>
      <Divider />

      {subRoutes.map((item) => (
        <SubRoute key={item.route} item={item} t={t} />
      ))}
    </>
  ) : null;
};

export default SubRoutes;
