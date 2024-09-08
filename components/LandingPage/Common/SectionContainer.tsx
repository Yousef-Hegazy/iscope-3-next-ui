"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion";
import { ReactNode, useMemo, useRef } from "react";

const containerVariants: Variants = {
  animate: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
  exit: {
    // transition: { staggerChildren: 0.05, staggerDirection: -1 }
  },
};

const SectionContainer = ({ children, id, className }: { children: ReactNode; id: string; className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const inView = useInView(containerRef);

  const classes = useMemo(() => cn("h-screen", className), [className]);

  return (
    <motion.section
      variants={containerVariants}
      ref={containerRef}
      initial="initial"
      animate={inView ? "animate" : "exit"}
      id={id}
      className={classes}
    >
      {children}
    </motion.section>
  );
};

export default SectionContainer;
