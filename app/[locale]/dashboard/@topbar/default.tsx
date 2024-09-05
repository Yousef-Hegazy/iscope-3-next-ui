import AccountDropdown from "@/components/Topbar/AccountDropdown";
import SidebarControl from "@/components/Topbar/SidebarControl";
import ThemeModeSwitch from "@/components/Topbar/ThemeModeSwitch";
import ThemeSettings from "@/components/Topbar/ThemeSettings";

const Topbar = () => {
  // const t = await getTranslations();

  return (
    <header className="flex flex-row items-center justify-between top-0 w-full px-4 py-2 border-b-1 dark:border-b-neutral-600 bg-background/30 backdrop-blur-2xl">
      <div className="flex flex-row items-center gap-3">
        <AccountDropdown />

        <ThemeSettings />

        <SidebarControl />

        <ThemeModeSwitch />
      </div>

      {/* <Button color="danger" startContent={<Icon icon="logout" />} size="sm">
        {t("account.logout")}
      </Button> */}
    </header>
  );
};

export default Topbar;
