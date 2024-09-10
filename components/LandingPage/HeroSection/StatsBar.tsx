import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { FC } from "react";

const statusBarVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 0.9,
    transition: {
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
  },
};

const StatsBar: FC<{
  max: number;
  filled: number;
  title: string;
  background?: "zahid" | "success" | "danger";
  className?: string;
}> = ({ max, filled, title, background = "zahid", className }) => {
  return (
    <div className="flex flex-col gap-y-1.5">
      <div className="flex flex-row justify-between items-center gap-x-2">
        <p className="text-xs leading-3 whitespace-nowrap font-semibold text-default-700">{title}</p>
        <p className="text-default-500 text-[0.65rem]">
          {filled} / {max}
        </p>
      </div>

      <div className="flex flex-row items-center justify-evenly gap-x-[1px]">
        {Array.from({ length: max / 10 }, (_, i) => (
          <motion.div
            variants={statusBarVariants}
            key={i}
            className={cn(
              "rounded-none w-full h-3 bg-default-300/50 brightness-95",
              {
                "rounded-s-[0.2rem]": i === 0,
                "bg-zahid-blue-bg": i < filled / 10 && background === "zahid",
                "bg-success-500": i < filled / 10 && background === "success",
                "bg-danger-500": i < filled / 10 && background === "danger",
                "rounded-e-[0.2rem]": i === 10,
              },
              className
            )}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
