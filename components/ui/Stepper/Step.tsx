import { cn } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { memo, ReactNode, useEffect, useState } from "react";
import StepProvider from "./StepContext";
import { useStepperContext } from "./StepperContext";

const contentVars: Variants = {
  initial: {
    display: "none",
    opacity: 0,
    scale: 0.7,
  },
  animate: {
    display: "flex",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 0.31,
      type: "spring",
      display: {
        delay: 0.15,
        duration: 0,
      },
    },
  },
  exit: {
    display: "none",
    opacity: 0,
    scale: 0.7,
    transition: {
      duration: 0.3,
      type: "spring",
      display: {
        delay: 0.15,
        duration: 0,
      },
    },
  },
};

export type StepProps = {
  children: ReactNode;
  isActive?: boolean;
  title: string;
  className?: string;
  stepKey: string;
  icon?: string;
};

export const Step = memo(({ children, stepKey, title, className }: StepProps) => {
  const [errors, setErrors] = useState<{ [k: string]: boolean }>({});
  const { activeStepKey, setErrorSteps } = useStepperContext();

  useEffect(() => {
    const hasError = Object.values(errors).some((v) => v === true);

    setErrorSteps((prev) => {
      const isStepInError = prev.includes(stepKey);

      if (hasError && !isStepInError) {
        return [...prev, stepKey];
      } else if (!hasError && isStepInError) {
        return prev.filter((k) => k !== stepKey);
      }

      return prev;
    });
  }, [errors, stepKey, setErrorSteps]);

  return (
    <StepProvider stepKey={stepKey} errors={errors} setErrors={setErrors}>
      <motion.div
        key={title}
        className={cn("flex-1 w-full h-full", className)}
        variants={contentVars}
        aria-label="Step contents"
        initial="initial"
        animate={activeStepKey === stepKey ? "animate" : "exit"}
      >
        {children}
      </motion.div>
    </StepProvider>
  );
});

Step.displayName = "Step";

export default Step;
