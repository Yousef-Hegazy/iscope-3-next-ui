import Icon from "@/components/ui/Icon";
import { Button } from "@nextui-org/react";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";

const ProjectsPage = async () => {
  const t = await getTranslations("projects");
  const locale = await getLocale();

  return (
    <main className="h-full w-full">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-lg mb-4">{t("title")}</h1>
        <Button
          as={Link}
          href={`/${locale}/dashboard/projects/add`}
          color="primary"
          startContent={<Icon icon="add-home" />}
        >
          {t("add")}
        </Button>
      </div>
    </main>
  );
};

export default ProjectsPage;
