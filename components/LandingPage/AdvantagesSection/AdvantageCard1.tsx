"use client";

import { cn } from "@nextui-org/react";
import Image from "next/image";
import AdvantageCard from "./AdvantageCard";
import { animate, motion, Variants } from "framer-motion";

const statsContainerVars: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.3,
    },
  },
};

const statusVars: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

const AdvantageCard1 = () => {
  return (
    <AdvantageCard
      number="01"
      title="Project Monitoring Solution"
      description="Make project monitoring a breeze with iScope, instant real-time changes from the work site to you directly, with full transparency and security."
    >
      <div
        className="bg-background p-4"
        style={{
          borderRadius: "0.75rem 0 0.75rem 0",
        }}
      >
        <div className="flex flex-row items-start justify-between gap-x-4">
          <div className="flex flex-row items-center gap-x-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1683740128931-8bdefe553f95?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
                fill
                sizes="40px"
              />
            </div>

            <div>
              <p className="text-xs font-semibold mb-1.5">Amanda Rosch</p>
              <p className="text-xs text-default-500">Assistant Manager</p>
            </div>
          </div>

          <p className="text-zahid-blue-bg text-xs">See details</p>
        </div>

        <div className="mt-5 flex flex-col gap-y-4 justify-between h-full">
          <div className="flex flex-row items-center justify-between">
            <p className="text-xs text-default-500">Invoice id</p>
            <p className="text-xs">#NV-380</p>
          </div>

          <div className="flex flex-row items-center justify-between">
            <p className="text-xs text-default-500">Total hours</p>
            <p className="text-xs">180 hours</p>
          </div>

          <div className="flex flex-row items-center justify-between">
            <p className="text-xs text-default-500">Invoice amount</p>
            <p className="text-xs">
              {(2500).toLocaleString("en-SA", {
                style: "currency",
                currency: "SAR",
                trailingZeroDisplay: "stripIfInteger",
              })}
            </p>
          </div>

          <motion.div className="flex flex-row gap-x-2 w-full" variants={statsContainerVars}>
            {Array.from({ length: 12 }, (_, i) => (
              <motion.div
                variants={statusVars}
                key={i}
                className={cn("flex-1 h-6 rounded-md bg-default-50 brightness-95 origin-left", {
                  "bg-success/20": i < 7,
                  "bg-success": i === 7,
                })}
              ></motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AdvantageCard>
  );
};

export default AdvantageCard1;
