"use client";

import { Button } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import SectionDescription from "../Common/SectionDescription";
import Icon from "@/components/ui/Icon";

const icon: Variants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const FooterLinks = () => {
  const t = useTranslations("landingPage");

  return (
    <SectionDescription className="flex flex-row items-center gap-x-2 mt-4">
      <span>{t("footer.contactUs")}:</span>
      <Button
        size="sm"
        title="Linkedin"
        variant="light"
        color="primary"
        isIconOnly
        as={Link}
        target="_blank"
        href="https://www.linkedin.com/company/syadtech/posts/?feedView=all"
      >
        <Icon icon="linkedin" className="w-5 h-5" />
      </Button>

      <Button
        size="sm"
        variant="light"
        title="Youtube"
        color="danger"
        isIconOnly
        as={Link}
        target="_blank"
        href="https://www.youtube.com/channel/UCKOhF4EG7baI1ruRaAMpkDQ"
      >
        <Icon icon="youtube" className="w-5 h-5" />
      </Button>

      <Button
        size="sm"
        title="Twitter (X)"
        variant="light"
        color="primary"
        isIconOnly
        as={Link}
        target="_blank"
        href="https://x.com/Syad_tech"
      >
        <Icon icon="twitter" className="w-5 h-5" />
      </Button>
    </SectionDescription>
  );
};

export default FooterLinks;
