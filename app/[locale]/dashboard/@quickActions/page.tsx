import AppScrollShadow from "@/components/ui/AppScrollShadow";
import Icon from "@/components/ui/Icon";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const QuickActions = ({ params: { locale } }: { params: { locale: string } }) => {
  // unstable_setRequestLocale(locale);

  const t = useTranslations("quickActions");

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
          as={Link}
          href={`/${locale}/dashboard/projects/add`}
          startContent={<Icon icon="add-home" className="text-inherit w-5 h-5" />}
        >
          <p>{t("addProject")}</p>
        </Button>
      </section>
    </AppScrollShadow>
  );
};

export default QuickActions;
