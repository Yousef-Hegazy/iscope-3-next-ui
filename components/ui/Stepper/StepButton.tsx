"use client";

import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { ReactElement, useMemo } from "react";
import Icon from "../Icon";
import { StepProps } from "./Step";
import { useStepperContext } from "./StepperContext";

const line: Variants = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
};

const iconContainer: Variants = {
  normal: {
    opacity: 0,
    scale: 0.5,
  },
  inView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const icon: Variants = {
  normal: {
    pathLength: 0,
  },
  inView: {
    pathLength: 1,
    transition: {
      delay: 0.15,
      duration: 0.4,
    },
  },
};

interface StepButtonProps {
  step: ReactElement<StepProps>;
  index: number;
  stepsCount: number;
  activeStepIndex: number;
  setActiveStepKey: (key: string) => void;
}

const StepButton = ({ activeStepIndex, index, setActiveStepKey, step, stepsCount }: StepButtonProps) => {
  const { errorSteps } = useStepperContext();
  const { title, stepKey, icon: stepIcon } = useMemo(() => step.props, [step.props]);

  const isError = useMemo(() => errorSteps.includes(stepKey), [errorSteps, stepKey]);

  return (
    <div
      key={title}
      id={stepKey}
      className={cn("flex flex-row gap-x-2", {
        "min-w-48 w-full flex-1": index < stepsCount - 1,
      })}
    >
      <div className="flex flex-col items-center gap-y-2 h-full w-28">
        <Button
          isIconOnly
          radius="full"
          size="sm"
          variant="bordered"
          color={isError ? "danger" : activeStepIndex >= index ? "primary" : "default"}
          className="flex-shrink-0 text-lg relative overflow-hidden p-2 w-max h-max max-w-full max-h-full"
          onClick={() => setActiveStepKey(stepKey)}
        >
          <motion.div
            className={cn(
              "absolute flex w-full h-full items-center justify-center rounded-full bg-primary shadow-lg flex-shrink-0 z-10",
              {
                "bg-danger": isError,
              }
            )}
            variants={iconContainer}
            initial="normal"
            animate={activeStepIndex > index ? "inView" : "normal"}
          >
            {isError ? (
              <Icon icon="close" className="w-5 h-5 text-white" />
            ) : (
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <motion.path
                  className="text-white origin-left"
                  variants={icon}
                  initial="normal"
                  animate={activeStepIndex > index ? "inView" : "normal"}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  fill="none"
                  d="m4.5 12.75l6 6l9-13.5"
                />
              </svg>
            )}
          </motion.div>

          {stepIcon ? <Icon icon={stepIcon || ""} className="w-5 h-5" /> : <p className="relative z-5">{index + 1}</p>}
        </Button>

        <h2
          className={cn("w-full text-sm cursor-pointer text-center text-wrap text-default-500", {
            "text-primary": activeStepIndex >= index,
            "text-danger-500": isError,
          })}
          onClick={() => setActiveStepKey(stepKey)}
        >
          {title}
        </h2>
      </div>

      {index < stepsCount - 1 && (
        <div className="min-w-8 h-1 bg-default-300 rounded flex-1 relative overflow-hidden mt-4">
          <motion.div
            variants={line}
            className={cn("absolute bg-primary origin-left rtl:origin-right h-full w-full", {
              "bg-danger-500": isError,
            })}
            initial="initial"
            animate={activeStepIndex > index ? "animate" : "initial"}
          ></motion.div>
        </div>
      )}
    </div>
  );
};

export default StepButton;
