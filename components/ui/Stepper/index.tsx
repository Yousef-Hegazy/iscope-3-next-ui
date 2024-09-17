"use client";

import { cn } from "@/lib/utils";
import { Button, ScrollShadow } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { ReactNode, useState } from "react";

const iconContainer: Variants = {
  normal: {
    opacity: 0,
    scale: 0.5,
  },
  inView: {
    transition: {
      delayChildren: 0.1,
    },
    opacity: 1,
    scale: 1,
  },
};

const icon: Variants = {
  normal: {
    pathLength: 0,
  },
  inView: {
    pathLength: 1,
    transition: {
      duration: 0.5,
    },
  },
};

type Step = {
  title: string;
  content: ReactNode;
};

interface Props {
  steps: Step[];
}

const Stepper = ({ steps }: Props) => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section aria-label="stepper" className="h-full w-full overflow-hidden">
      <ScrollShadow size={0} orientation="horizontal" hideScrollBar className="flex flex-row gap-x-2 px-4">
        {steps.map((step, index) => (
          <div key={step.title} className="flex flex-col gap-y-2 w-full h-full flex-1 min-w-28">
            <div className="flex flex-row items-center gap-x-2">
              <div className="px-4">
                <Button
                  isIconOnly
                  size="sm"
                  radius="full"
                  variant="bordered"
                  color={activeStep >= index + 1 ? "primary" : "default"}
                  className="flex-shrink-0 text-lg relative overflow-hidden"
                  onClick={() => setActiveStep(index + 1)}
                >
                  {activeStep > index + 1 ? (
                    <motion.div
                      className="flex w-full h-full items-center justify-center rounded-full bg-primary shadow-lg flex-shrink-0 origin-center"
                      variants={iconContainer}
                      initial="normal"
                      whileInView="inView"
                    >
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <motion.path
                          className="text-white origin-left"
                          variants={icon}
                          initial="normal"
                          whileInView="inView"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          fill="none"
                          d="m4.5 12.75l6 6l9-13.5"
                        />
                      </svg>
                    </motion.div>
                  ) : (
                    index + 1
                  )}
                </Button>
              </div>
              <div
                className={cn("w-8 h-1 bg-default-300 rounded flex-1 relative overflow-hidden", {
                  hidden: index === steps.length - 1,
                })}
              >
                <div
                  className={cn(
                    "absolute bg-primary origin-left rtl:origin-right h-full w-full scale-x-0 transition-all duration-200 ease-in-out",
                    {
                      "scale-x-100": activeStep >= index + 2,
                    }
                  )}
                ></div>
              </div>
            </div>

            <h2 className="w-max cursor-pointer text-start px-2.5" onClick={() => setActiveStep(index + 1)}>
              {step.title}
            </h2>
          </div>
        ))}
      </ScrollShadow>
    </section>
  );
};

export default Stepper;
