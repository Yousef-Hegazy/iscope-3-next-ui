"use client";

import { motion, Variants } from "framer-motion";
import { FC, ReactNode } from "react";

const barVars: Variants = {
  initial: {
    opacity: 0,
    scaleX: 0,
  },
  animate: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scaleX: 0,
  },
};

interface Props {
  children: ReactNode;
}

const PricingBar: FC<Props> = ({ children }) => {
  return (
    <motion.div variants={barVars} className="w-full origin-left border-t-2 border-white/20 bg-white/50 relative z-1">
      {children}
    </motion.div>
  );
};

export default PricingBar;
