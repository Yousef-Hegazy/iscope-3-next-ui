"use client";

import { Avatar, Button, Divider } from "@nextui-org/react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import StatsBar from "./StatsBar";
import Image from "next/image";

const containerVariants: Variants = {
  animate: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
  exit: {
    // transition: { staggerChildren: 0.05, staggerDirection: -1 }
  },
};

const firstContainerVars: Variants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -50,
    opacity: 0,
  },
};

const secondContainerVars: Variants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    // transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

const thirdContainerVars: Variants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    // transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -50,
    opacity: 0,
  },
};

const fourthContainerVars: Variants = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: 0.4 },
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 50,
    opacity: 0,
  },
};

const fifthContainerVars: Variants = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: 0.5 },
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 50,
    opacity: 0,
  },
};

const arrowVars: Variants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 0.5,
    },
  },

  exit: {
    pathLength: 0,
  },
};

const svgVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const barVars: Variants = {
  initial: {
    // opacity: 0,
    scaleY: 0,
  },
  animate: {
    // opacity: 1,
    scaleY: 1,
    transformOrigin: "bottom",
    transition: {
      type: "spring",
    },
  },
  exit: {
    // opacity: 0,
    scaleY: 0,
  },
};

const ChartsContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const inView = useInView(containerRef);

  return (
    <motion.div
      variants={containerVariants}
      ref={containerRef}
      initial="initial"
      animate={inView ? "animate" : "exit"}
      className="mx-auto max-w-5xl w-full flex flex-row items-stretch justify-between gap-x-3 absolute bottom-0 translate-y-1/2 py-4"
    >
      {/* First One */}
      <motion.div
        variants={firstContainerVars}
        className="flex-1 flex-shrink-0 shadow-large rounded-lg py-4 px-2.5 bg-background"
      >
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-row justify-between items-center gap-x-2">
            <p className="text-xs whitespace-nowrap font-semibold">Time Off</p>
            <p className="text-zahid-blue-bg text-xs">Request now</p>
          </div>

          <Divider />

          <StatsBar max={11} filled={7} title="Sick leave" />

          <Divider />

          <StatsBar max={11} filled={5} title="Vacation leave" background="success" />

          <Divider />

          <StatsBar max={11} filled={3} title="No news leave" background="danger" />
        </div>
      </motion.div>

      {/* Second one */}
      <motion.div className="flex-[2] flex flex-col gap-y-3 flex-shrink-0 my-auto">
        <motion.div variants={secondContainerVars} className="flex-1 shadow-large rounded-lg py-4 px-2.5 bg-background">
          <div className="flex flex-row items-center gap-x-1 rounded-lg border-1 border-default-300 ps-2 pe-1.5 py-1 justify-between">
            <p className="text-xs font-semibold">00:00:00</p>

            <div className="w-[1px] h-4 max-h-full bg-default-300" />

            <input
              type="text"
              placeholder="Write notes for clock-in here"
              className="placeholder:text-[0.65rem] outline-0 text-xs"
            />

            <Button size="sm" color="primary">
              Check-In (
              {new Date().toLocaleTimeString("en-SA", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              )
            </Button>
          </div>
        </motion.div>

        <div className="flex-1 max-w-full">
          <div className="flex flex-row items-center justify-between gap-x-2">
            <motion.div
              variants={thirdContainerVars}
              className="bg-background rounded-medium shadow-large p-3 flex-1 flex flex-col gap-y-2"
            >
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

              <Divider className="my-2" />

              <div className="flex flex-row items-end justify-evenly gap-x-2">
                <Button size="sm" radius="sm" variant="bordered" className="text-xs text-default-500 w-full">
                  3 Months
                </Button>

                <Button
                  size="sm"
                  radius="sm"
                  variant="bordered"
                  color="primary"
                  className="text-xs w-full bg-primary/10"
                >
                  Onboarding
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={fourthContainerVars}
              className="bg-background rounded-medium shadow-large p-3 flex-1 flex flex-col gap-y-2"
            >
              <div className="flex flex-row items-center gap-x-2">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-success-50">
                  <svg className="text-success-600 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <motion.path
                      variants={svgVariants}
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991zM14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-semibold mb-1.5">Insurance</p>
                  <p className="text-[0.65rem] text-default-500">Insurance to cover your work</p>
                </div>
              </div>

              <Divider className="my-2" />

              <div className="flex flex-row items-center justify-evenly gap-x-2">
                <p className="text-xs text-default-500 w-full">4 years covered</p>

                <p className="text-base w-full tracking-tighter">
                  {Number(2680).toLocaleString("en-SA", {
                    currency: "SAR",
                    style: "currency",
                  })}

                  {/* {new Intl.NumberFormat("en-SA", {
                    style: "currency",
                    currency: "SAR",
                  }).format(2680)} */}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Last one */}
      <motion.div
        variants={fifthContainerVars}
        className="flex-1 flex-shrink-0 shadow-large rounded-lg py-4 px-2.5 bg-background"
      >
        <div className="flex flex-row justify-between items-center gap-x-2">
          <p className="text-xs whitespace-nowrap font-semibold">Payroll Summary</p>
          <p className="text-zahid-blue-bg text-xs">Download</p>
        </div>

        <Divider className="my-3" />

        <p className="text-zahid-blue-bg text-lg font-semibold mb-1.5">
          {(18000).toLocaleString("en-SA", {
            currency: "SAR",
            style: "currency",
            trailingZeroDisplay: "stripIfInteger",
          })}
        </p>

        <div className="mb-2">
          <p className="text-sm text-default-500 inline-block me-1">
            {new Date().toLocaleString("en-SA", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-zahid-blue-bg inline-block"
          >
            <motion.path
              variants={arrowVars}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 18L18 6m0 0H9m9 0v9"
            />
          </svg>
        </div>

        <div className="flex flex-row items-end justify-evenly gap-x-2.5">
          <motion.div variants={barVars} className="flex-1 h-20 bg-zahid-blue-bg/10 rounded-small"></motion.div>
          <motion.div variants={barVars} className="flex-1 h-32 bg-zahid-blue-bg/10 rounded-small"></motion.div>
          <motion.div variants={barVars} className="flex-1 h-16 bg-zahid-blue-bg/10 rounded-small"></motion.div>
          <motion.div variants={barVars} className="flex-1 h-20 bg-zahid-blue-bg/10 rounded-small"></motion.div>
          <motion.div variants={barVars} className="flex-1 h-32 bg-zahid-blue-bg rounded-small"></motion.div>
          <motion.div variants={barVars} className="flex-1 h-20 bg-zahid-blue-bg/10 rounded-small"></motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChartsContainer;
