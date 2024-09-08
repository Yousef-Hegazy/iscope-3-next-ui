"use client";

import { motion, Variants } from "framer-motion";
import { FC, ReactNode } from "react";

interface Props {
  number: string;
  title: string;
  description: string;
  children: ReactNode;
}

const cardVars: Variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

const textVars: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 60,
  },
};

const scaleAnimation: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
  },
};

const AdvantageCard: FC<Props> = ({ number, title, description, children }) => {
  return (
    <motion.div variants={cardVars} className="rounded-medium bg-default-100 pt-6">
      <div className="px-4">
        <motion.p
          variants={textVars}
          className="px-2 py-0.5 bg-background w-max rounded-full text-xs ring-4 ring-default-300"
        >
          {number}
        </motion.p>

        <motion.h2 variants={textVars} className="font-semibold text-lg mt-4">
          {title}
        </motion.h2>

        <motion.p variants={textVars} className="text-default-500 text-sm mt-5">
          {description}
        </motion.p>
      </div>

      <motion.div
        variants={scaleAnimation}
        className="bg-default-300 p-2 ms-3 mt-6"
        style={{
          borderRadius: "0.75rem 0 0.75rem 0",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AdvantageCard;
