import { Button } from "@nextui-org/react";
import { getTranslations } from "next-intl/server";
import Icon from "../Icon";
import AccountDropdown from "./AccountDropdown";
import ThemeModeSwitch from "./ThemeModeSwitch";
import ThemeSettings from "./ThemeSettings";

const Topbar = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations();

  return (
    <div className="flex flex-row items-center justify-between sticky top-0 w-full px-4 py-2 border-b-1 dark:border-b-neutral-600 bg-background/30 backdrop-blur-2xl">
      <div className="flex flex-row items-center gap-3">
        <AccountDropdown />

        <ThemeSettings />

        <ThemeModeSwitch />
      </div>

      <Button color="danger" startContent={<Icon icon="logout" />} size="sm">
        {t("account.logout")}
      </Button>
    </div>
  );
};

export default Topbar;
