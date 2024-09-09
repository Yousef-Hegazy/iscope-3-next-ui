"use client";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { FC, ReactNode } from "react";

const tagVars: Variants = {
  initial: {
    opacity: 0,
    scaleY: 0,
  },
  animate: {
    opacity: 1,
    scaleY: 1,
    transition: {
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
  },
};

interface Props {
  className: string;
  title?: string;
  description?: string;
  icon?: ReactNode;
  customContent?: ReactNode;
}

const PricingTag: FC<Props> = ({ className, title, description, icon, customContent }) => {
  return (
    <motion.div variants={tagVars} className={cn("absolute origin-top top-0 flex flex-col items-center", className)}>
      <div
        className={cn("absolute top-0 -translate-y-1/2 z-[2]", {
          "border-l-2 border-white/50 h-4": !icon,
        })}
      >
        {icon}
      </div>

      <div
        className={cn("mt-6 w-full text-center text-white overflow-x-show", {
          contents: !!customContent,
        })}
      >
        {customContent ? (
          customContent
        ) : (
          <>
            <h6>{title}</h6>

            <p className="text-xs text-white/80">{description}</p>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default PricingTag;
