"use client";

import { cn } from "@/lib/utils";
import { Button, ScrollShadow } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { createContext, memo, ReactElement, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import Icon from "../Icon";

const container: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 1,
    },
  },
};

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

const StepperContext = createContext<{
  activeStepKey: string | null;
  steps: (string | null)[];
}>({
  activeStepKey: null,
  steps: [],
});

const StepperProvider = ({
  activeStepKey,
  steps,
  children,
}: {
  activeStepKey: string | null;
  steps: (string | null)[];
  children: ReactNode;
}) => {
  return <StepperContext.Provider value={{ activeStepKey, steps }}>{children}</StepperContext.Provider>;
};

type StepProps = {
  children: ReactNode;
  isActive?: boolean;
  title: string;
  className?: string;
  stepKey: string;
  icon?: string;
};

export const Step = memo(({ children, stepKey, title, className }: StepProps) => {
  const { activeStepKey } = useContext(StepperContext);

  return (
    <motion.div
      key={title}
      className={cn("w-full p-2", className, "h-max")}
      variants={contentVars}
      aria-label="Step contents"
      initial="initial"
      animate={activeStepKey === stepKey ? "animate" : "exit"}
    >
      {children}
    </motion.div>
  );
});

Step.displayName = "Step";

interface Props {
  children: ReactNode;
  onCancel?: () => void;
  hideSubmit?: boolean;
  setIsReturn?: (isReturn: boolean) => void;
}

const Stepper = memo(({ children, onCancel, hideSubmit, setIsReturn }: Props) => {
  const t = useTranslations("common");
  const steps = useMemo(() => (children as ReactElement<StepProps>[]).map((c) => c.props.stepKey), [children]);
  const stepsCount = useMemo(() => steps.length, [steps]);

  const [activeStepKey, setActiveStepKey] = useState<string | null>(
    (children as ReactElement<StepProps>[])?.[0]?.props.stepKey
  );

  const activeStepIndex = useMemo(
    () =>
      activeStepKey ? (children as ReactElement<StepProps>[])?.map((c) => c?.props.stepKey).indexOf(activeStepKey) : -1,
    [activeStepKey, children]
  );

  const handlePrev = useCallback(() => {
    const index = activeStepIndex - 1;
    if (index >= 0) {
      setActiveStepKey(steps[index]);
    }
  }, [activeStepIndex, steps]);

  const handleNext = useCallback(() => {
    const index = activeStepIndex + 1;
    if (index < steps.length) {
      setActiveStepKey(steps[index]);
    }
  }, [activeStepIndex, steps]);

  return (
    <StepperProvider activeStepKey={activeStepKey} steps={steps}>
      <motion.section
        variants={container}
        initial="initial"
        animate="animate"
        aria-label="stepper"
        className="h-full w-full max-h-full overflow-hidden flex flex-col items-center gap-y-4 max-w-full px-1 py-1"
      >
        <ScrollShadow size={0} orientation="horizontal" hideScrollBar className="w-full flex-shrink-0">
          <div className="flex flex-row justify-stretch gap-x-2 w-full">
            {(children as ReactElement<StepProps>[]).map((step, index) => (
              <div
                key={step.props.title}
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
                    color={activeStepIndex >= index ? "primary" : "default"}
                    className="flex-shrink-0 text-lg relative overflow-hidden p-2 w-max h-max max-w-full max-h-full"
                    onClick={() => setActiveStepKey(step.props.stepKey)}
                  >
                    <motion.div
                      className="absolute flex w-full h-full items-center justify-center rounded-full bg-primary shadow-lg flex-shrink-0 z-10"
                      variants={iconContainer}
                      initial="normal"
                      animate={activeStepIndex > index ? "inView" : "normal"}
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
                          animate={activeStepIndex > index ? "inView" : "normal"}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          fill="none"
                          d="m4.5 12.75l6 6l9-13.5"
                        />
                      </svg>
                    </motion.div>

                    {step.props.icon ? (
                      <Icon icon={step.props.icon} className="w-5 h-5" />
                    ) : (
                      <p className="relative z-5">{index + 1}</p>
                    )}
                  </Button>

                  <h2
                    className={cn("w-full text-sm cursor-pointer text-center text-wrap text-default-500", {
                      "text-primary": activeStepIndex >= index,
                    })}
                    onClick={() => setActiveStepKey(step.props.stepKey)}
                  >
                    {step.props.title}
                  </h2>
                </div>

                {index < stepsCount - 1 && (
                  <div className="min-w-8 h-1 bg-default-300 rounded flex-1 relative overflow-hidden mt-4">
                    <motion.div
                      variants={line}
                      className="absolute bg-primary origin-left rtl:origin-right h-full w-full"
                      initial="initial"
                      animate={activeStepIndex > index ? "animate" : "initial"}
                    ></motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollShadow>

        <ScrollShadow hideScrollBar size={0} className="w-full flex-1">
          {children}
        </ScrollShadow>

        <div className="flex flex-row items-center justify-between w-full flex-shrink-0">
          <div className="flex flex-row gap-x-2">
            <Button
              size="sm"
              onClick={handlePrev}
              color={activeStepIndex === 0 ? "default" : "primary"}
              disabled={activeStepIndex === 0}
              startContent={<Icon icon="menu-arrow-left" className="w-4 h-4 rtl:rotate-180" />}
            >
              {t("previous")}
            </Button>

            <Button
              size="sm"
              onClick={handleNext}
              color={activeStepIndex === stepsCount - 1 ? "default" : "primary"}
              disabled={activeStepIndex === stepsCount - 1}
              endContent={<Icon icon="menu-arrow-right" className="w-4 h-4 rtl:rotate-180" />}
            >
              {t("next")}
            </Button>
          </div>

          <div className="flex flex-row gap-x-2 items-center">
            {!hideSubmit && (
              <Button
                size="sm"
                startContent={<Icon icon="double-check" className="w-5 h-5" />}
                color="success"
                type="submit"
                variant="solid"
                onClick={() => setIsReturn?.(false)}
              >
                {t("save")}
              </Button>
            )}

            {!hideSubmit && (
              <Button
                startContent={<Icon icon="return" className="w-4 h-4" />}
                size="sm"
                color="primary"
                type="submit"
                variant="ghost"
                onClick={() => setIsReturn?.(true)}
              >
                {t("saveAndReturn")}
              </Button>
            )}

            {onCancel && (
              <Button
                startContent={<Icon icon="close" className="w-5 h-5" />}
                size="sm"
                color="danger"
                variant="light"
                type="button"
                onClick={onCancel}
              >
                {t("cancel")}
              </Button>
            )}
          </div>
        </div>
      </motion.section>
    </StepperProvider>
  );
});

Stepper.displayName = "Stepper";

export default Stepper;
