import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const RequestsPage = ({ params: { locale } }: { params: { locale: string } }) => {
  const t = useTranslations("requests");

  return (
    <main className="flex-1 relative flex flex-col items-center justify-center w-full h-full gap-3">
      <h1 className="font-semibold text-lg">{t("notFound")}</h1>

      <Button color="primary" as={Link} href={`/${locale}/dashboard/transactions/requests/add-IR`}>
        {t("addIR")}
      </Button>
    </main>
  );
};

export default RequestsPage;
