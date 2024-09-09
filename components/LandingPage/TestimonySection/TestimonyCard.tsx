"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const containerVars: Variants = {
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const testVars: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
  },
};

export const TestimonyCardsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div variants={containerVars} className="flex flex-row items-start justify-evenly mt-8 lg:mt-20 gap-x-6">
      {children}
    </motion.div>
  );
};

const TestimonyCard = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div variants={testVars} className="bg-default-100 flex-1 rounded-lg p-4 lg:p-8 flex flex-col gap-y-4">
      {children}
    </motion.div>
  );
};

export default TestimonyCard;
