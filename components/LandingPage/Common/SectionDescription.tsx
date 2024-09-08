"use client";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { ReactNode, useMemo } from "react";

const pVariants: Variants = {
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

const SectionDescription = ({ children, className }: { children: ReactNode; className?: string }) => {
  const classes = useMemo(() => cn("text-sm text-center", className), [className]);

  return (
    <motion.p className={classes} variants={pVariants}>
      {children}
    </motion.p>
  );
};

export default SectionDescription;
