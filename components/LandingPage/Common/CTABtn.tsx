"use client";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { ReactNode, useMemo } from "react";

const btnVars: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const CTABtn = ({ children, className }: { children: ReactNode; className?: string }) => {
  const classes = useMemo(
    () =>
      cn(
        "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none px-4 min-w-20 h-10 text-small gap-2 rounded-full bg-zahid-yellow-btn text-black text-sm",
        className
      ),
    [className]
  );

  return (
    <motion.button
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.2,
        },
      }}
      whileTap={{
        scale: 0.95,
        transition: {
          duration: 0.2,
        },
      }}
      className={classes}
      variants={btnVars}
    >
      {children}
    </motion.button>
  );
};

export default CTABtn;
