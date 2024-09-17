import SectionDescription from "@/components/LandingPage/Common/SectionDescription";
import SectionH1 from "@/components/LandingPage/Common/SectionH1";
import { Chip } from "@nextui-org/react";
import { getTranslations } from "next-intl/server";

export default async function DashboardPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });

  return (
    <main className="p-4 text-foreground">
      <div className="mx-auto w-full max-w-lg mt-8 flex flex-col items-center px-4 lg:px-0">
        <Chip color="primary" size="lg" radius="md" className="text-sm mb-6">
          {t("landingPage.trusted")}
        </Chip>

        <SectionH1 className="text-foreground">{t("landingPage.subtitle")}</SectionH1>

        <SectionDescription className="text-foreground mt-2 mb-6 text-base text-wrap">
          {t("landingPage.platformDesc")}
        </SectionDescription>

        <div className="bg-background rounded-medium shadow-large p-3 flex-1 flex flex-col gap-y-2">
          <div className="flex flex-col gap-y-2 text-center items-center">
            <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-success-50 flex-shrink-0">
              <svg className="text-success-600 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991zM14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"
                />
              </svg>
            </div>

            <div>
              <p className="text-xl font-semibold mb-1.5">{t("landingPage.credibility")}</p>
              <p className="text-lg text-default-500">{t("landingPage.credibilityDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
