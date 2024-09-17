"use client";

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@nextui-org/react";
import Image from "next/image";
import { memo } from "react";
import Icon from "../ui/Icon";
import { useTranslations } from "next-intl";

const AccountDropdown = memo(() => {
  const t = useTranslations("account");

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="bordered" radius="full" className="p-1 w-fit h-fit" color="primary">
          <Image
            width={35}
            height={35}
            className="rounded-full transition-transform"
            src="https://res.cloudinary.com/dzscibmnv/image/upload/v1724052699/file-D32HeJVvqrUAmOBB6SqMEkYQ_xr6mlt.webp"
            alt="Avatar"
          />
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Profile Actions" variant="solid" title="Account">
        <DropdownSection title={t("title")}>
          <DropdownItem startContent={<Icon icon="profile" className="w-5 h-5" />} key="Profile">
            {t("profile")}
          </DropdownItem>
          <DropdownItem
            startContent={<Icon icon="edit-account" className="w-5 h-5" />}
            key="AccountSettings"
            showDivider
          >
            {t("settings")}
          </DropdownItem>

          <DropdownItem key="Logout" color="danger" startContent={<Icon icon="logout" className="w-5 h-5" />}>
            {t("logout")}
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
});

AccountDropdown.displayName = "AccountDropdown";

export default AccountDropdown;
