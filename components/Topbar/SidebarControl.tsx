"use client";
import useClientConfigStore from "@/stores/configStore";
import { Button } from "@nextui-org/react";
import Icon from "../ui/Icon";

const SidebarControl = () => {
  const isSidebarOpen = useClientConfigStore((store) => store.isSidebarOpen);

  const setIsSidebarOpen = useClientConfigStore((store) => store.setIsSidebarOpen);

  return (
    <Button
      isIconOnly
      size="sm"
      variant={isSidebarOpen ? "shadow" : "light"}
      color={isSidebarOpen ? "primary" : "default"}
      className="xl:hidden"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <Icon icon="bars-3" />
    </Button>
  );
};

export default SidebarControl;
