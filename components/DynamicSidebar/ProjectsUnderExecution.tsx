"use client";

import { Project } from "@/models/project";
import { Button, Chip } from "@nextui-org/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import AppTooltip from "../ui/AppTooltip";
import Icon from "../ui/Icon";
import InfiniteScrollSidebar from "./InfiniteScrollSidebar";

const ProjectsUnderExecution = () => {
  const locale = useLocale();

  const t = useTranslations();

  const pathname = usePathname();

  const isSelected = useCallback((id: string) => pathname.includes(id), [pathname]);

  const query = useInfiniteQuery<{
    maxPages: number;
    projects: Project[];
  }>({
    queryKey: ["projects/under-execution"],
    queryFn: async ({ pageParam }) => {
      const { data } = await axios.get(`/api/projects/under-execution?page=${pageParam}`, {
        headers: { "Accept-Language": locale },
      });

      return data;
    },
    refetchOnWindowFocus: true,
    initialData: undefined,
    staleTime: Infinity,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < (lastPage.maxPages ?? 1)) {
        return pages.length + 1; // Load next page
      } else {
        return undefined; // No more pages to load
      }
    },
  });

  return (
    <InfiniteScrollSidebar query={query}>
      {query.data?.pages ? (
        query.data.pages.map((p) =>
          p.projects.map((item) => (
            <AppTooltip
              showArrow
              key={item.id}
              className="max-w-xs w-full text-justify"
              placement="right"
              content={item.name}
            >
              <Link prefetch={true} scroll={false} href={`/${locale}/dashboard/projects/${item.id}`}>
                <div
                  className={`flex flex-col rounded-small p-2 backdrop-blur-xl gap-2 cursor-pointer hover:bg-neutral-200/50 hover:shadow dark:hover:bg-neutral-500/50 transition-all ${
                    isSelected(item.id) ? "bg-primary/10 shadow hover:bg-primary/20 dark:hover:bg-primary/20" : ""
                  }`}
                >
                  <p className="line-clamp-1 text-small text-start">{item.name}</p>
                  <div className="flex flex-row items-center justify-between">
                    <Chip
                      size="sm"
                      color={
                        item.status === "stumbling"
                          ? "danger"
                          : item.status === "late"
                          ? "warning"
                          : item.status === "early"
                          ? "success"
                          : "default"
                      }
                      classNames={{
                        base: item.status === "onSchedule" ? "bg-emerald-600 text-white" : "",
                      }}
                      startContent={<p className="text-xs p-1">{item.percentage}%</p>}
                    >
                      <p className="text-xs">{t(`projects.status.${item.status}`)}</p>
                    </Chip>

                    <Button
                      // data-disable-nprogress={true}
                      data-prevent-nprogress={true}
                      isIconOnly
                      title="project actions"
                      size="sm"
                      variant="light"
                      onClick={(e) => {
                        e.nativeEvent.stopImmediatePropagation();
                        e.nativeEvent.preventDefault();
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                    >
                      <Icon icon="more-vertical" />
                    </Button>
                  </div>
                </div>
              </Link>
            </AppTooltip>
          ))
        )
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p>{t("projects.none")}</p>
        </div>
      )}
    </InfiniteScrollSidebar>
  );
};

export default ProjectsUnderExecution;
