"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

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

const Providers = ({ children }: { children: ReactNode }) => {
  const locale = useLocale();
  const router = useRouter();

  return (
    <NextUIProvider
      className="h-full overflow-hidden flex flex-col"
      locale={locale === "ar" ? "ar-SA" : "en-US"}
      navigate={router.push}
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
