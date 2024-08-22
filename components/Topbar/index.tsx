import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Icon from "../Icon";
import AccountDropdown from "./AccountDropdown";
import ThemeModeSwitch from "./ThemeModeSwitch";
import ThemeSettings from "./ThemeSettings";

const Topbar = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div className="flex flex-row items-center justify-between sticky top-0 w-full px-4 py-2 shadow border-b-1 border-b-transparent dark:border-b-neutral-600 bg-background/30 backdrop-blur-2xl">
      <div className="flex flex-row items-center gap-3">
        <AccountDropdown />

        <ThemeSettings />

        <ThemeModeSwitch />
      </div>

      <Button color="danger" startContent={<Icon icon="logout" />}>
        {t("account.logout")}
      </Button>
    </div>
  );
};

export default Topbar;
