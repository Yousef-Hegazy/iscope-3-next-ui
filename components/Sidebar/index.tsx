"use client";

import navConfig, { NavObject } from "@/lib/navConfig";
import useRoutesStore from "@/stores/routesStore";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ArchivedProjects from "../DynamicSidebar/ArchivedProjects";
import ProjectsUnderExecution from "../DynamicSidebar/ProjectsUnderExecution";
import MainNavLink from "./MainNavLink";
import SubRoutes from "./SubRoutes";
import useClientConfigStore from "@/stores/configStore";

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  // exit: {
  //   opacity: 0,
  //   transition: {
  //     duration: 0.5,
  //   },
  // },
};

const Sidebar = () => {
  const pathname = usePathname();
  const [mainRoute, setMainRoute] = useState<NavObject>();
  const { dynamicNavType } = useRoutesStore();
  const { isSidebarOpen } = useClientConfigStore();

  useEffect(() => {
    let matches = undefined;

    if (pathname) {
      for (const object of navConfig) {
        // const matching = `/${locale}/${object.route}`;
        matches = pathname.split("/").find((x) => x === object.route);

        if (matches) {
          setMainRoute(object);
          break;
        }
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
    <div
      className={`absolute start-0 top-0 flex flex-row z-[55] xl:translate-x-0 xl:relative xl:flex xl:flex-row max-w-full h-full bg-background transition-all duration-300 ${
        isSidebarOpen ? "translate-x-0 " : "translate-x-full"
      } `}
    >
      <div className="w-32 h-full max-w-full shadow overflow-x-hidden border-e-1 border-e-transparent flex flex-col items-stretch gap-3 p-3 dark:border-e-neutral-600 overflow-y-auto flex-shrink-0">
        {navConfig.map((item) => (
          <MainNavLink key={item.route} mainRoute={item} pathname={pathname} />
        ))}
      </div>

      <AnimatePresence initial={true} mode="wait">
        {mainRoute?.children ? (
          <div className="w-72 max-w-full flex-1 h-full shadow border-e-1 border-transparent dark:border-neutral-600 overflow-hidden flex-shrink-0">
            <motion.div
              key={dynamicNavType ? "dynamic-sidebar" : "static-sidebar"}
              variants={variants}
              initial="initial"
              animate="animate"
              // exit="exit"
              className="h-full w-full p-2"
            >
              {dynamicNavType ? renderDynamic() : <SubRoutes mainRoute={mainRoute} subRoutes={mainRoute.children} />}
            </motion.div>
          </div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
