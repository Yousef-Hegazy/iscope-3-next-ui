"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const themes = [
  "light-yellow",
  "light-blue",
  "light-green",
  "light-orange",
  "light-zinc",
  // "light-slate",
  // "light-stone",
  // "light-gray",
  // "light-neutral",
  "light-red",
  "light-rose",
  "light-violet",
  "dark-orange",
  "dark-zinc",
  // "dark-slate",
  // "dark-stone",
  // "dark-gray",
  // "dark-neutral",
  "dark-red",
  "dark-rose",
  "dark-green",
  "dark-blue",
  "dark-yellow",
  "dark-violet",
];

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchInterval: false,
      refetchOnMount: false,
      retry: false,
    },
  },
});

// const umAlqura = new IslamicUmalquraCalendar();
// const greg = new GregorianCalendar();

const Providers = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  // const locale = useLocale();

  // const localeOpts = useMemo(
  //   () =>
  //     locale === "ar"
  //       ? {
  //           lang: "ar-SA",
  //           localeString: new Intl.Locale("ar", {
  //             calendar: "islamic",
  //             hourCycle: "h12",
  //             language: "ar",
  //             region: "SA",
  //           }).toString(),
  //           dir: "rtl",
  //         }
  //       : {
  //           lang: "en-US",
  //           localeString: new Intl.Locale("en", {
  //             calendar: "gregory",
  //             hourCycle: "h12",
  //             language: "en",
  //             region: "SA",
  //           }).toString(),
  //           dir: "ltr",
  //         },
  //   [locale]
  // );

  return (
    <NextUIProvider
      className="h-full overflow-hidden flex flex-col"
      navigate={router.push}
      // locale={localeOpts.localeString}
    >
      <NextThemeProvider attribute="class" defaultTheme={themes[0]} themes={themes}>
        <QueryClientProvider client={client}>
          <ProgressBar
            color="hsl(var(--nextui-primary))"
            height="10px"
            shallowRouting
            options={{
              showSpinner: false,
            }}
          />
          {children}
        </QueryClientProvider>
      </NextThemeProvider>
    </NextUIProvider>
  );
};

export default Providers;
