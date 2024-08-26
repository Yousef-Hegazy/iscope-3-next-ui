"use client";

import navConfig, { NavObject } from "@/lib/navConfig";
import useRoutesStore from "@/stores/routesStore";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ArchivedProjects from "../DynamicSidebar/ArchivedProjects";
import ProjectsUnderExecution from "../DynamicSidebar/ProjectsUnderExecution";
import MainNavLink from "./MainNavLink";
import SubRoutes from "./SubRoutes";

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  aniamte: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Sidebar = () => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [mainRoute, setMainRoute] = useState<NavObject>();
  const { dynamicNavType, setDynamicNavType } = useRoutesStore();

  useEffect(() => {
    let matches = undefined;

    for (const object of navConfig) {
      // const matching = `/${locale}/${object.route}`;
      matches = pathname.split("/").find((x) => x === object.route);

      if (matches) {
        setMainRoute(object);
        break;
      }
    }

    if (!matches) setMainRoute(undefined);
  }, [pathname]);

  const renderDynamic = useCallback(() => {
    switch (dynamicNavType) {
      case "projects.underExecution":
        return <ProjectsUnderExecution />;
      case "projects.archived":
        return <ArchivedProjects />;
      default:
        return null;
    }
  }, [dynamicNavType]);

  return (
    <>
      <div className="max-w-32 w-full h-full shadow-md overflow-x-hidden border-e-1 border-e-transparent flex flex-col items-center gap-3 p-3 dark:border-e-neutral-600 overflow-y-auto">
        {navConfig.map((item) => (
          <MainNavLink key={item.route} mainRoute={item} t={t} locale={locale} pathname={pathname} />
        ))}
      </div>

      <AnimatePresence initial={false} mode="wait">
        {mainRoute?.children ? (
          <motion.div className="max-w-xs w-full shadow-md border-e-1 border-transparent dark:border-neutral-600">
            {dynamicNavType ? (
              <motion.div
                key="dynamic-sidebar"
                variants={variants}
                animate="animate"
                exit="exit"
                className="h-full w-full p-2"
              >
                {renderDynamic()}
              </motion.div>
            ) : (
              <motion.div
                key="static-sidebar"
                variants={variants}
                animate="animate"
                exit="exit"
                className="flex flex-col h-full w-full gap-3 p-2"
              >
                <SubRoutes mainRoute={mainRoute} subRoutes={mainRoute.children} />
              </motion.div>
            )}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
