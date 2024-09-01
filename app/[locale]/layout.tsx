import ClientInitializers from "@/components/ClientInitializers";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import SVGs from "@/components/ui/SVGs";
import { locales } from "@/lib/i18n";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import Providers from "./providers";

const inter = localFont({
  src: "../../assets/fonts/Bahij_TheSansArabic-Plain.ttf",
  variable: "--font-sans",
});

const interEnglish = Inter({
  weight: ["100", "200", "400", "600", "800", "900"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("title"),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LangLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={locale === "ar" ? inter.className : interEnglish.className}>
        {/* <NextTopLoader height={10} showSpinner={false} color="hsl(var(--nextui-primary))" /> */}

        <NextIntlClientProvider messages={messages}>
          <Providers>
            <SVGs />
            <ClientInitializers />
            <LayoutWrapper locale={locale}>{children}</LayoutWrapper>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
