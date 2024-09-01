"use client";

import useClientConfigStore from "@/stores/configStore";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const ClientInitializers = () => {
  const { resolvedTheme } = useTheme();
  const { setIsMobile } = useClientConfigStore();

  useEffect(() => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }
  }, [setIsMobile]);

  useEffect(() => {
    if (resolvedTheme) {
      if (resolvedTheme.includes("dark")) document.documentElement.dataset.mode = "dark";
      else document.documentElement.dataset.mode = "";
    }
  }, [resolvedTheme]);

  return null;
};

export default ClientInitializers;
