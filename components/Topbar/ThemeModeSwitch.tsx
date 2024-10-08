"use client";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Icon from "../ui/Icon";
import { memo, useCallback, useEffect, useState } from "react";

const ThemeModeSwitch = memo(
  ({
    variant = "light",
    radius = "full",
    className = "",
  }: {
    variant?: "bordered" | "solid" | "light" | "flat" | "faded" | "shadow" | "ghost" | undefined;
    radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
    className?: string;
  }) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      if (theme) {
        setMounted(true);
      }
    }, [theme]);

    const onClick = useCallback(() => {
      if (theme?.includes("light")) {
        setTheme(theme.replace("light", "dark"));
      } else if (theme?.includes("dark")) {
        setTheme(theme.replace("dark", "light"));
      }
    }, [theme, setTheme]);

    return mounted ? (
      <div className="flex flex-row gap-3 items-center justify-center">
        <Button isIconOnly onClick={onClick} variant={variant} radius={radius} size="sm" className={className}>
          <Icon icon={theme?.includes("light") ? "dark-theme" : "light-theme"} />
        </Button>
      </div>
    ) : null;
  }
);

ThemeModeSwitch.displayName = "ThemeModeSwitch";

export default ThemeModeSwitch;
