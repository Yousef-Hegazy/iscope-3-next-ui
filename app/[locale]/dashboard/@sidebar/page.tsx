"use client";

import ArchivedProjects from "@/components/DynamicSidebar/ArchivedProjects";
import ProjectsUnderExecution from "@/components/DynamicSidebar/ProjectsUnderExecution";
import MainNavLink from "@/components/Sidebar/MainNavLink";
import SubRoutes from "@/components/Sidebar/SubRoutes";
import navConfig, { NavObject } from "@/lib/navConfig";
import { cn } from "@/lib/utils";
import useClientConfigStore from "@/stores/configStore";
import useRoutesStore from "@/stores/routesStore";
import { ScrollShadow } from "@nextui-org/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";

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
};

const Sidebar = () => {
  const pathname = usePathname();
  const { mainRoute, setMainRoute } = useRoutesStore();
  const { dynamicNavType } = useRoutesStore();
  const { isSidebarOpen } = useClientConfigStore();
  const sidebarClasses = useMemo(
    () =>
      cn(
        "absolute start-0 top-0 flex flex-row z-50 xl:translate-x-0 xl:relative xl:flex xl:flex-row max-w-full h-full bg-background transition-all duration-300",
        {
          "translate-x-0 ": isSidebarOpen,
          "translate-x-full": !isSidebarOpen,
        }
      ),
    [isSidebarOpen]
  );

  useEffect(() => {
    if (mainRoute) return;

    let matches = undefined;

    if (pathname) {
      for (const object of navConfig.slice(1)) {
        matches = pathname.includes(object.route || "");

        if (matches) {
          setMainRoute(object);
          break;
        }
      }
    }

    if (!matches) setMainRoute(navConfig[0]);
  }, [mainRoute, pathname, setMainRoute]);

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
    <div className={sidebarClasses}>
      <ScrollShadow
        size={10}
        hideScrollBar
        className="w-32 h-full max-w-full shadow overflow-x-hidden border-e-1 border-e-transparent flex flex-col items-stretch gap-3 p-3 dark:border-e-neutral-600 flex-shrink-0"
      >
        {navConfig.map((item) => (
          <MainNavLink key={item.route} item={item} />
        ))}
      </ScrollShadow>

      <AnimatePresence initial={false} mode="wait">
        {mainRoute?.children ? (
          <div className="w-72 max-w-full flex-1 h-full shadow border-e-1 border-transparent dark:border-neutral-600 overflow-hidden flex-shrink-0">
            <motion.div
              key={dynamicNavType ? "dynamic-sidebar" : "static-sidebar"}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="initial"
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
