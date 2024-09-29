import Icon from "@/components/ui/Icon";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const NotFound = ({ params: { locale } }: { params: { locale: string } }) => {
  const t = useTranslations("common");

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
