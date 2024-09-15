"use client";

import Icon from "@/components/ui/Icon";
import { Button } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";

const variants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    pointerEvents: "none",
  },
  visible: {
    opacity: 1,
    scale: 1,
    pointerEvents: "auto",
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
};

const ScrollToTopButton = () => {
  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("landingPage");

  const handleScroll = useCallback((ev: Event, element: HTMLElement) => {
    const scrollY = element.scrollTop;
    if (scrollY <= 10) {
      setIsVisible(false);
      return;
    }
    if (scrollY > lastScrollY.current) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY.current = scrollY;
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (main) {
      main.addEventListener("scroll", (e) => handleScroll(e, main));
    }

    return () => main?.removeEventListener("scroll", (e) => handleScroll(e, main));
  }, [handleScroll]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="fixed bottom-4 right-4 w-max h-max bg-transaprent"
    >
      <Button
        isIconOnly
        color="primary"
        variant="shadow"
        title={t("scrollToTop")}
        onClick={() => {
          const element = document.getElementById("hero");
          if (element) {
            element?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <Icon icon="double-arrow-up" className="w-5 h-5" />
      </Button>
    </motion.div>
  );
};

export default ScrollToTopButton;
