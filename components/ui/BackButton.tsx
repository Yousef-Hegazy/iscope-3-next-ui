"use client";
import Icon from "@/components/ui/Icon";
import navConfig from "@/lib/navConfig";
import useRoutesStore from "@/stores/routesStore";
import { Button } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const BackButton = () => {
  const t = useTranslations();
  const locale = useLocale();
  const { setMainRoute } = useRoutesStore();

  return (
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
  );
};

export default BackButton;
