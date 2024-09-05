"use client";
import Icon from "@/components/ui/Icon";
import navConfig from "@/lib/navConfig";
import useRoutesStore from "@/stores/routesStore";
import { Button } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const NotFound = () => {
  const t = useTranslations();
  const locale = useLocale();
  const { setMainRoute } = useRoutesStore();

  return (
    <main className="p-4 flex flex-col items-center justify-center w-full h-full gap-3">
      <h1 className="font-semibold text-lg">{t("notFound")}</h1>

      <Button
        as={Link}
        href={`/${locale}/dashboard`}
        startContent={<Icon icon="home" />}
        variant="shadow"
        color="primary"
        onClick={() => setMainRoute(navConfig[0])}
      >
        {t("backToHome")}
      </Button>
    </main>
  );
};

export default NotFound;
