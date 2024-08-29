import Icon from "@/components/Icon";
import { Button } from "@nextui-org/react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";

const NotFound = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations();

  return (
    <div className="p-4 flex flex-col items-center justify-center w-full h-full gap-3">
      <h1 className="font-semibold text-lg">{t("notFound")}</h1>

      <Button as={Link} href={`/${locale}`} startContent={<Icon icon="home" />} variant="shadow" color="primary">
        {t("backToHome")}
      </Button>
    </div>
  );
};

export default NotFound;
