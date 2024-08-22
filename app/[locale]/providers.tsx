"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import { ReactNode, useEffect } from "react";

const themes = [
  "light-green",
  "light-orange",
  "light-slate",
  "light-zinc",
  "light-stone",
  "light-gray",
  "light-neutral",
  "light-red",
  "light-rose",
  "light-blue",
  "light-yellow",
  "light-violet",
  "dark-orange",
  "dark-slate",
  "dark-zinc",
  "dark-stone",
  "dark-gray",
  "dark-neutral",
  "dark-red",
  "dark-rose",
  "dark-green",
  "dark-blue",
  "dark-yellow",
  "dark-violet",
];

const Providers = ({ children }: { children: ReactNode }) => {
  const locale = useLocale();

  return (
    <NextUIProvider className="h-full overflow-hidden flex flex-col" locale={locale === "ar" ? "ar-SA" : "en-US"}>
      <NextThemeProvider attribute="class" defaultTheme={themes[0]} themes={themes}>
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
};

export default Providers;
