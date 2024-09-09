"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const imageVars: Variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const FeatureImageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div variants={imageVars} className="flex-1 relative h-full w-full flex items-center justify-center">
      {children}
    </motion.div>
  );
};

export default FeatureImageContainer;
