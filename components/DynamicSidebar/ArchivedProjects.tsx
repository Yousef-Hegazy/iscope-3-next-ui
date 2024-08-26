"use client";

import { Tooltip } from "@nextui-org/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import InfiniteScrollSidebar from "./InfiniteScrollSidebar";

const ArchivedProjects = () => {
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
    queryKey: ["projects/archived"],
    queryFn: async ({ pageParam }) => {
      const { data } = await axios.get(`/api/projects/archived?page=${pageParam}`, {
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
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      error={error}
      refetch={refetch}
      isFetching={isFetching}
      isLoading={isLoading}
    >
      {res?.pages ? (
        res?.pages
          .map((p) => p.projects)
          .flat()
          .map((item) => (
            <Tooltip
              showArrow
              content={item.name}
              closeDelay={0}
              className="max-w-xs w-full"
              placement="right"
              key={item.id}
            >
              <div className="rounded-small py-1 px-2 backdrop-blur-xl cursor-pointer hover:bg-neutral-200/50 hover:shadow">
                <p className="line-clamp-1 text-small">{item.name}</p>
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

export default ArchivedProjects;
