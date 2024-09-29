"use client";

import { cn } from "@/lib/utils";
import { Button, Divider, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment, memo, useState } from "react";
import AppTooltip from "../ui/AppTooltip";
import Icon from "../ui/Icon";

const lightColors: { [key: string]: string } = {
  orange: `hsl(24.6, 95%, 53.1%)`,
  // slate: `hsl(222.2, 47.4%, 11.2%)`,
  zinc: `hsl(240, 5.9%, 10%)`,
  // stone: `hsl(24, 9.8%, 10%)`,
  // gray: `hsl(220.9, 39.3%, 11%)`,
  // neutral: `hsl(0, 0%, 9%)`,
  red: `hsl(0, 72.2%, 50.6%)`,
  rose: `hsl(346.8, 77.2%, 49.8%)`,
  green: `hsl(142.1, 76.2%, 36.3%)`,
  blue: `hsl(221.2, 83.2%, 53.3%)`,
  yellow: `hsl(47.9, 95.8%, 53.1%)`,
  violet: `hsl(262.1, 83.3%, 57.8%)`,
};

const darkColors: { [key: string]: string } = {
  orange: `hsl(20.5, 90.2%, 48.2%)`,
  zinc: `hsl(0, 0%, 98%)`,
  // slate: `hsl(210, 40%, 98%)`,
  // stone: `hsl(60, 9.1%, 97.8%)`,
  // gray: `hsl(210, 20%, 98%)`,
  // neutral: `hsl(0, 0%, 98%)`,
  red: `hsl(0, 72.2%, 50.6%)`,
  rose: `hsl(346.8, 77.2%, 49.8%)`,
  green: `hsl(142.1, 70.6%, 45.3%)`,
  blue: `hsl(217.2, 91.2%, 59.8%)`,
  yellow: `hsl(47.9, 95.8%, 53.1%)`,
  violet: `hsl(263.4, 70%, 50.4%)`,
};

const ThemeSettings = memo(({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("settings");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const changeLocale = (newLocale: string) => {
    const newUrl = `/${newLocale}${pathname.substring(3)}${searchParams ? `?${searchParams.toString()}` : ""}`;
    // const newUrl = `/${newLocale}${pathname}`;
    router.push(newUrl);
  };

  return (
    <Fragment>
      <Button
        variant="light"
        type="button"
        title="Theme settings"
        size="sm"
        isIconOnly
        onClick={() => setIsOpen(true)}
        className={className}
      >
        <Icon icon="settings" />
      </Button>

      <Modal size="xs" hideCloseButton isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent className="absolute start-0 h-full m-0 sm:m-0 overflow-y-auto">
          {(onClose) => (
            <Fragment>
              <ModalHeader>
                <div className="flex flex-row gap-2 items-center justify-between w-full">
                  <p>{t("title")}</p>

                  <Button onClick={onClose} size="sm" isIconOnly variant="light">
                    <Icon icon="close" />
                  </Button>
                </div>
              </ModalHeader>

              <Divider />

              <ModalBody className="px-3 py-4">
                <div className="flex flex-col gap-3.5">
                  <div className="flex flex-row gap-2 items-center bg-primary/10 p-2 rounded-lg">
                    <Icon icon="paint" />
                    <p className="text-base font-semibold">{t("color")}</p>
                  </div>

                  {resolvedTheme && (
                    <div className="flex flex-row items-center flex-wrap gap-2">
                      {resolvedTheme.includes("dark")
                        ? Object.keys(darkColors).map((color) => (
                            <AppTooltip key={color} content={t(`colors.${color}`)}>
                              <Button
                                variant="bordered"
                                size="sm"
                                radius="md"
                                isIconOnly
                                onClick={() => {
                                  setTheme(`dark-${color}`);
                                }}
                                className="border-default-200"
                              >
                                <div
                                  className={cn("w-3 h-3 rounded-full transition-all scale-100", {
                                    "scale-150": resolvedTheme.includes(color),
                                  })}
                                  style={{ backgroundColor: darkColors[color] }}
                                ></div>
                              </Button>
                            </AppTooltip>
                          ))
                        : Object.keys(lightColors).map((color) => (
                            <AppTooltip key={color} content={t(`colors.${color}`)}>
                              <Button
                                variant="bordered"
                                size="sm"
                                radius="md"
                                isIconOnly
                                title={color}
                                onClick={() => {
                                  setTheme(`light-${color}`);
                                }}
                                className="border-default-200"
                              >
                                <div
                                  className={`w-3 h-3 rounded-full transition-all ${
                                    resolvedTheme?.includes(color) ? "scale-150" : "scale-100"
                                  }`}
                                  style={{ backgroundColor: lightColors[color] }}
                                ></div>
                              </Button>
                            </AppTooltip>
                          ))}
                    </div>
                  )}

                  <Divider />

                  <div className="flex flex-row gap-2 items-center bg-primary/10 p-2  rounded-lg">
                    <Icon icon="theme-mode" />
                    <p className="text-base font-semibold">{t("themeMode")}</p>
                  </div>

                  {resolvedTheme && (
                    <div className="flex flex-row gap-3 items-center justify-center">
                      <Button
                        isIconOnly
                        className={
                          resolvedTheme.includes("light") ? "bg-primary/10 hover:bg-primary/10" : "bg-transparent"
                        }
                        onClick={
                          resolvedTheme.includes("light")
                            ? undefined
                            : () => setTheme(resolvedTheme.replace("dark", "light"))
                        }
                      >
                        <Icon icon="light-theme" />
                      </Button>

                      <Button
                        isIconOnly
                        className={
                          resolvedTheme?.includes("dark") ? "bg-primary/10 hover:bg-primary/10" : "bg-transparent"
                        }
                        onClick={
                          resolvedTheme.includes("dark")
                            ? undefined
                            : () => setTheme(resolvedTheme.replace("light", "dark"))
                        }
                      >
                        <Icon icon="dark-theme" />
                      </Button>
                    </div>
                  )}

                  <Divider />

                  <div className="flex flex-row gap-2 items-center bg-primary/10 p-2  rounded-lg">
                    <Icon icon="language" />
                    <p className="text-base font-semibold">{t("language")}</p>
                  </div>

                  <div className="flex flex-row gap-4 justify-center items-center">
                    <Button
                      color="primary"
                      variant={locale === "en" ? "shadow" : "bordered"}
                      onClick={() => changeLocale("en")}
                    >
                      English
                    </Button>

                    <Button
                      color="primary"
                      variant={locale === "ar" ? "shadow" : "bordered"}
                      onClick={() => changeLocale("ar")}
                    >
                      العربية
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </Fragment>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
});

ThemeSettings.displayName = "ThemeSettings";

export default ThemeSettings;
