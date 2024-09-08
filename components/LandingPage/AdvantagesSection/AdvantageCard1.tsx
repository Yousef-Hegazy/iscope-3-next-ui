"use client";

import { cn } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import AdvantageCard from "./AdvantageCard";

const statusVars: Variants = {
  initial: {
    opacity: 0,
    scale: 0.3,
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
    scale: 0.3,
  },
};

const yAnimation: Variants = {
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

const xAnimation: Variants = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -60,
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
            <motion.div variants={yAnimation} className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="https://plus.unsplash.com/premium_photo-1683740128931-8bdefe553f95?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
                fill
                sizes="40px"
              />
            </motion.div>

            <div>
              <motion.p variants={xAnimation} className="text-xs font-semibold mb-1.5">
                Amanda Rosch
              </motion.p>
              <motion.p variants={xAnimation} className="text-xs text-default-500">
                Assistant Manager
              </motion.p>
            </div>
          </div>

          <p className="text-zahid-blue-bg text-xs">See details</p>
        </div>

        <div className="mt-5 flex flex-col gap-y-4 justify-between h-full">
          <div className="flex flex-row items-center justify-between">
            <motion.p variants={xAnimation} className="text-xs text-default-500">
              Invoice id
            </motion.p>
            <motion.p variants={xAnimation} className="text-xs">
              #NV-380
            </motion.p>
          </div>

          <div className="flex flex-row items-center justify-between">
            <motion.p variants={xAnimation} className="text-xs text-default-500">
              Total hours
            </motion.p>
            <motion.p variants={xAnimation} className="text-xs">
              180 hours
            </motion.p>
          </div>

          <div className="flex flex-row items-center justify-between">
            <motion.p variants={xAnimation} className="text-xs text-default-500">
              Invoice amount
            </motion.p>
            <motion.p variants={xAnimation} className="text-xs">
              {(2500).toLocaleString("en-SA", {
                style: "currency",
                currency: "SAR",
                trailingZeroDisplay: "stripIfInteger",
              })}
            </motion.p>
          </div>

          <div className="flex flex-row gap-x-2 w-full">
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
          </div>
        </div>
      </div>
    </AdvantageCard>
  );
};

export default AdvantageCard1;
