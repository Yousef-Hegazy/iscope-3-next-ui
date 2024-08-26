"use client";

import { Button, Tooltip } from "@nextui-org/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import InfiniteScrollSidebar from "./InfiniteScrollSidebar";
import Icon from "../Icon";

const ProjectsUnderExecution = () => {
  const locale = useLocale();
  const t = useTranslations();

  const {
    data: res,
    refetch,
    isFetching,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<{
    maxPages: number;
    projects: { id: string; name: string; status: string; percentage: number }[];
  }>({
    queryKey: ["projects/under-execution"],
    queryFn: async ({ pageParam }) => {
      const { data } = await axios.get(`/api/projects/under-execution?page=${pageParam}`, {
        headers: { "Accept-Language": locale },
      });

      return data;
    },
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
    <InfiniteScrollSidebar
      error={error}
      refetch={refetch}
      isLoading={isLoading}
      isFetching={isFetching}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
    >
      {res?.pages ? (
        res?.pages
          .map((p) => p.projects)
          .flat()
          .map((item) => (
            <Tooltip
              showArrow
              key={item.id}
              closeDelay={0}
              className="max-w-xs w-full"
              placement="right"
              content={item.name}
            >
              <div className="flex flex-col rounded-small p-2 backdrop-blur-xl gap-2 cursor-pointer hover:bg-neutral-200/50 hover:shadow dark:hover:bg-neutral-500/50">
                <p className="line-clamp-1 text-small">{item.name}</p>
                <div className="flex flex-row items-center justify-between">
                  <div
                    className={`flex flex-row items-center gap-1.5 rounded-small text-background px-2 py-1 ${
                      item.status === "stumbling"
                        ? "bg-danger-600"
                        : item.status === "late"
                        ? "bg-warning-600"
                        : item.status === "early"
                        ? "bg-green-600"
                        : item.status === "onSchedule"
                        ? "bg-teal-600"
                        : ""
                    }`}
                  >
                    <p>{item.percentage}%</p>
                    <p className="text-sm">{t(`projects.status.${item.status}`)}</p>
                  </div>

                  <Button isIconOnly size="sm" variant="light">
                    <Icon icon="more-vertical" />
                  </Button>
                </div>
              </div>
            </Tooltip>
          ))
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p>{t("projects.none")}</p>
        </div>
      )}
    </InfiniteScrollSidebar>
  );
};

export default ProjectsUnderExecution;
