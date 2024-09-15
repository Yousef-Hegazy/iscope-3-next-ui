import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

const NavLinks = () => {
  const t = useTranslations("landingPage");

  return (
    <ul className="hidden lg:flex flex-row items-center gap-x-2.5 justify-center flex-[2]">
      <li className="inline">
        <Button variant="light" className="text-white/80 font-semibold">
          {t("nav.home")}
        </Button>
      </li>
      <li className="inline">
        <Button variant="light" className="text-white/80 font-semibold">
          {t("nav.advantages")}
        </Button>
      </li>
      <li className="inline">
        <Button variant="light" className="text-white/80 font-semibold">
          {t("nav.qa")}
        </Button>
      </li>
      <li className="inline">
        <Button variant="light" className="text-white/80 font-semibold">
          {t("nav.images")}
        </Button>
      </li>
      <li className="inline">
        <Button variant="light" className="text-white/80 font-semibold">
          {t("nav.contact")}
        </Button>
      </li>
    </ul>
  );
};

export default NavLinks;
