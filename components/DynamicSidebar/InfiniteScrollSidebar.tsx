"use client";

import useRoutesStore from "@/stores/routesStore";
import { Button, Divider, ScrollShadow, Spinner } from "@nextui-org/react";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { useLocale, useTranslations } from "next-intl";
import { ReactNode, useCallback, useEffect, useRef } from "react";
import Icon from "../Icon";

const InfiniteScrollSidebar = ({
  children,
  query: { fetchNextPage, hasNextPage, isFetchingNextPage, isFetching, refetch, error, isPending, isLoading },
}: {
  children: ReactNode;
  query: UseInfiniteQueryResult<any>;
}) => {
  const t = useTranslations();
  const locale = useLocale();
  const { dynamicNavType, setDynamicNavType } = useRoutesStore();
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (loadMoreRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = loadMoreRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10 && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    const ref = loadMoreRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
      return () => {
        ref.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <div className="flex flex-col h-full w-full gap-3 overflow-hidden">
      <div className="flex flex-row gap-2 items-center justify-between">
        <div className="flex flex-row items-center gap-1.5">
          <Button isIconOnly variant="light" size="sm" color="default" onClick={() => setDynamicNavType()}>
            <Icon icon={locale === "ar" ? "menu-arrow-right" : "menu-arrow-left"} />
          </Button>
          <h1 className="font-semibold text-base">{t(dynamicNavType)}</h1>
        </div>

        <Button isIconOnly size="sm" variant="ghost" color="primary" onClick={() => refetch()} isLoading={isFetching}>
          <Icon icon="refresh" />
        </Button>
      </div>

      <Divider />

      <ScrollShadow hideScrollBar className="flex-1 flex flex-col gap-3 h-full pt-3 pb-6" ref={loadMoreRef}>
        {isPending ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Spinner color="primary" />
          </div>
        ) : error ? (
          <div className="flex flex-col w-full h-full items-center justify-center gap-2">
            <p className="text-lg">{t("error.unknown")}</p>
            <Button color="primary" variant="solid" onClick={() => refetch()} isLoading={isFetching}>
              {t("retry")}
            </Button>
          </div>
        ) : (
          <>
            {children}

            {isFetchingNextPage && <Spinner color="primary" />}
          </>
        )}

        {hasNextPage ? (
          <>
            <Divider />
            <Button onClick={() => fetchNextPage()} isLoading={isFetching || isLoading || isPending} size="sm">
              {t("more")}
            </Button>
          </>
        ) : (
          ""
        )}
      </ScrollShadow>
    </div>
  );
};

export default InfiniteScrollSidebar;
