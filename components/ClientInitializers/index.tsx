"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

const ClientInitializers = () => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme) {
      if (resolvedTheme.includes("dark")) document.documentElement.setAttribute("data-mode", "dark");
      else document.documentElement.setAttribute("data-mode", "");
    }
  }, [resolvedTheme]);

  return <div className="hidden"></div>;
};

export default ClientInitializers;
