import AppScrollShadow from "@/components/ui/AppScrollShadow";
import Icon from "@/components/ui/Icon";
import { Button } from "@nextui-org/react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

const QuickActions = async ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);

  const t = await getTranslations("quickActions");

  return (
    <AppScrollShadow
      size={10}
      hideScrollBar
      orientation="horizontal"
      className="w-full max-w-full flex-shrink-0 shadow-md border-b border-transparent dark:border-b-neutral-600 bg-background/80 backdrop-opacity-25 z-30"
    >
      <section className="py-2.5 px-4 min-w-fit w-full inline-flex flex-row gap-x-2 items-center justify-center">
        <Button
          className="flex-shrink-0 min-w-fit"
          variant="bordered"
          size="sm"
          color="primary"
          startContent={<Icon icon="ai" className="text-inherit w-5 h-5" />}
        >
          <p>{t("ai")}</p>
        </Button>

        <Button
          className="flex-shrink-0 min-w-fit"
          variant="bordered"
          size="sm"
          color="primary"
          startContent={<Icon icon="iot" className="text-inherit" />}
        >
          <p>{t("iot")}</p>
        </Button>

        <Button
          className="flex-shrink-0 min-w-fit"
          variant="bordered"
          size="sm"
          color="primary"
          startContent={<Icon icon="timeline" className="text-inherit" />}
        >
          <p>{t("schedules")}</p>
        </Button>

        <Button
          className="flex-shrink-0 min-w-fit"
          variant="bordered"
          size="sm"
          color="primary"
          startContent={<Icon icon="bi" className="text-inherit" />}
        >
          <p>{t("powerBI")}</p>
        </Button>

        <Button
          className="flex-shrink-0 min-w-fit"
          variant="bordered"
          size="sm"
          color="primary"
          startContent={<Icon icon="integration" className="text-inherit w-5 h-5" />}
        >
          <p>{t("integration")}</p>
        </Button>

        <Button
          className="flex-shrink-0 min-w-fit"
          variant="bordered"
          size="sm"
          color="primary"
          startContent={<Icon icon="gis" className="text-inherit w-5 h-5" />}
        >
          <p>{t("GIS")}</p>
        </Button>
      </section>
    </AppScrollShadow>
  );
};

export default QuickActions;
