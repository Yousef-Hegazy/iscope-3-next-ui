import AppScrollShadow from "@/components/ui/AppScrollShadow";
import Icon from "@/components/ui/Icon";
import { Button } from "@nextui-org/react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

const QuickActions = async ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <AppScrollShadow
      size={10}
      hideScrollBar
      orientation="horizontal"
      className="w-full py-2.5 px-4 flex flex-row gap-2 items-center justify-center shadow-md border-b border-transparent dark:border-b-neutral-600 bg-background/80 backdrop-opacity-25 z-30"
    >
      <Button
        className="flex-shrink-0"
        variant="bordered"
        size="sm"
        color="primary"
        startContent={<Icon icon="open-book" className="text-inherit w-5 h-5" />}
      >
        <p>{t("approveStudy")}</p>
      </Button>

      <Button
        className="flex-shrink-0"
        variant="bordered"
        size="sm"
        color="primary"
        startContent={<Icon icon="language" className="text-inherit" />}
      >
        <p>{t("announceCompetition")}</p>
      </Button>

      <Button
        className="flex-shrink-0"
        variant="bordered"
        size="sm"
        color="primary"
        startContent={<Icon icon="add-home" className="text-inherit" />}
      >
        <p>{t("addProject")}</p>
      </Button>

      <Button
        className="flex-shrink-0"
        variant="bordered"
        size="sm"
        color="primary"
        startContent={<Icon icon="contractor" className="text-inherit" />}
      >
        <p>{t("addContractor")}</p>
      </Button>

      <Button
        className="flex-shrink-0"
        variant="bordered"
        size="sm"
        color="primary"
        startContent={<Icon icon="medal" className="text-inherit w-5 h-5" />}
      >
        <p>{t("addBiTask")}</p>
      </Button>
    </AppScrollShadow>
  );
};

export default QuickActions;
