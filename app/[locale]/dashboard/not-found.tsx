import BackButton from "@/components/ui/BackButton";
import { useTranslations } from "next-intl";
import Image from "next/image";

const NotFound = () => {
  const t = useTranslations("common");

  return (
    <main className="relative p-4 flex flex-col items-center justify-start pt-20 w-full h-full gap-3">
      <Image src="/svgs/not-found-2.svg" alt="Not found" fill className="h-auto max-w-full rounded-md shadow z-5" />

      <div className="relative z-10 bg-default-800/5 text-slate-700 flex flex-col items-center justify-center gap-y-4 rounded-small p-6 max-w-full backdrop-blur-xl">
        <h1 className="font-semibold text-lg">{t("notFound")}</h1>

        <BackButton />
      </div>
    </main>
  );
};

export default NotFound;
