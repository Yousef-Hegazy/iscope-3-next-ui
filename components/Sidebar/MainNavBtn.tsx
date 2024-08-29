import { DynamicNavType } from "@/lib/navConfig";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Icon from "../Icon";

interface Props {
  path: string;
  selected: boolean;
  icon?: string;
  title: string;
  setDynamicNavType: (route?: DynamicNavType) => void;
}

const MainNavBtn = ({ path, selected, title, icon, setDynamicNavType }: Props) => {
  return (
    <Button
      as={Link}
      href={path}
      prefetch={true}
      variant={selected ? "shadow" : "light"}
      className="h-fit px-2 py-3 w-full flex-shrink-0 flex flex-col gap-2 items-center"
      radius="sm"
      color={selected ? "primary" : "default"}
      onClick={() => setDynamicNavType()}
    >
      <Icon icon={icon || ""} />

      <p className={`max-w-full text-sm overflow-hidden text-nowrap text-ellipsis ${selected ? "font-semibold" : ""}`}>
        {title}
      </p>
    </Button>
  );
};

export default MainNavBtn;
