"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { ReactNode, useMemo } from "react";

const h1Vars: Variants = {
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

const SectionH1 = ({ children, className }: { children: ReactNode; className?: string }) => {
  const classes = useMemo(() => cn("text-2xl text-white lg:text-5xl text-center mb-2", className), [className]);

  return (
    <motion.h1 className={classes} variants={h1Vars}>
      {children}
    </motion.h1>
  );
};

export default SectionH1;
