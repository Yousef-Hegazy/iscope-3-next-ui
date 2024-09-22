"use client";

import ThemeSettings from "@/components/Topbar/ThemeSettings";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";

const Navigation = () => {
  const locale = useLocale();
  const t = useTranslations("landingPage");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero");

  useEffect(() => {
    if (currentSection) {
      const element = document.getElementById(currentSection);
      if (element) {
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [currentSection]);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      position="static"
      className="bg-zahid-blue-bg w-full"
    >
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="md:hidden text-white" />

        <NavbarBrand>
          <Button as={Link} href={`/${locale}`} variant="solid" className="bg-white">
            <Image src="/svgs/logoiScope.svg" alt="Logo" width={10} height={10} className="w-20 h-20" />
          </Button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex md:gap-0 lg:gap-2.5" justify="center">
        <NavbarItem>
          <Button onClick={() => setCurrentSection("hero")} variant="light" className="text-white/80 font-semibold">
            {t("nav.home")}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            onClick={() => setCurrentSection("advantages")}
            variant="light"
            className="text-white/80 font-semibold"
          >
            {t("nav.advantages")}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button onClick={() => setCurrentSection("qa")} variant="light" className="text-white/80 font-semibold">
            {t("nav.qa")}
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button onClick={() => setCurrentSection("images")} variant="light" className="text-white/80 font-semibold">
            {t("nav.images")}
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button onClick={() => setCurrentSection("footer")} variant="light" className="text-white/80 font-semibold">
            {t("nav.contact")}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSettings className="bg-white/20 text-white rounded-full" />
        </NavbarItem>

        <NavbarItem>
          <LoginModal />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Button
            as={Link}
            onClick={() => {
              setIsMenuOpen(false);
              setCurrentSection("hero");
            }}
            variant="light"
            color="primary"
            className="font-semibold"
          >
            {t("nav.home")}
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem isActive>
          <Button
            as={Link}
            onClick={() => {
              setIsMenuOpen(false);
              setCurrentSection("advantages");
            }}
            variant="light"
            color="primary"
            className="font-semibold"
          >
            {t("nav.advantages")}
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            as={Link}
            onClick={() => {
              setIsMenuOpen(false);
              setCurrentSection("qa");
            }}
            variant="light"
            color="primary"
            className="font-semibold"
          >
            {t("nav.qa")}
          </Button>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Button
            as={Link}
            onClick={() => {
              setIsMenuOpen(false);
              setCurrentSection("images");
            }}
            variant="light"
            color="primary"
            className="font-semibold"
          >
            {t("nav.images")}
          </Button>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Button
            as={Link}
            onClick={() => {
              setIsMenuOpen(false);
              setCurrentSection("footer");
            }}
            variant="light"
            color="primary"
            className="font-semibold"
          >
            {t("nav.contact")}
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
