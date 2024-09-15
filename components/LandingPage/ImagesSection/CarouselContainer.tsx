"use client";

import { Carousel } from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLocale } from "next-intl";
import { ReactNode, useRef } from "react";

const CarouselContainer = ({ children }: { children: ReactNode }) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const locale = useLocale();

  return (
    <Carousel
      opts={{
        direction: locale === "ar" ? "rtl" : "ltr",
        loop: true,
      }}
      plugins={[autoplay.current]}
      className="w-full max-w-3xl mt-4 mx-2"
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.play()}
    >
      {children}
    </Carousel>
  );
};

export default CarouselContainer;
