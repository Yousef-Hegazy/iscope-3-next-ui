import AccountDropdown from "@/components/Topbar/AccountDropdown";
import FutureFeatures from "@/components/Topbar/FutureFeatures";
import SidebarControl from "@/components/Topbar/SidebarControl";
import ThemeModeSwitch from "@/components/Topbar/ThemeModeSwitch";
import ThemeSettings from "@/components/Topbar/ThemeSettings";
import Icon from "@/components/ui/Icon";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Topbar = ({ params: { locale } }: { params: { locale: string } }) => {
  // unstable_setRequestLocale(locale);
  const t = useTranslations("account");

  return (
    <header className="flex flex-row items-center justify-between top-0 w-full px-4 py-2 border-b-1 dark:border-b-neutral-600 bg-background/30 backdrop-blur-2xl">
      <div className="flex flex-row items-center gap-3">
        <AccountDropdown />

        <ThemeSettings className="rounded-full" />

        <SidebarControl />

        <ThemeModeSwitch />

        <FutureFeatures />
      </div>

      <Button as={Link} href={`/${locale}`} color="danger" startContent={<Icon icon="logout" />} size="sm" radius="md">
        {t("logout")}
      </Button>
    </header>
  );
};

export default Topbar;
