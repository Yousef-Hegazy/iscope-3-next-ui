"use client";

import { cn } from "@/lib/utils";
import { Button, ScrollShadow } from "@nextui-org/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Children, cloneElement, ReactElement, ReactNode, useMemo, useState } from "react";

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
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 150,
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
      type: "spring",
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
      type: "spring",
    },
  },
};

type StepProps = {
  children: ReactNode;
  isActive?: boolean;
  title: string;
  className?: string;
};

interface Props {
  children: ReactNode;
}

export const Step = ({
  children,
  isActive = false,
  title,

  className,
}: StepProps) => {
  return (
    isActive && (
      <motion.div
        key={title}
        className={cn("w-full p-2", className, "h-max")}
        variants={contentVars}
        aria-label="Step contents"
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.div>
    )
  );
};

const Stepper = ({ children }: Props) => {
  const stepsCount = useMemo(() => Children.count(children), [children]);

  const [activeStepKey, setActiveStepKey] = useState((children as ReactElement[])?.[0]?.key);

  const activeStepIndex = useMemo(
    () => (children as ReactElement[])?.map((c: any) => c?.key).indexOf(activeStepKey),
    [activeStepKey, children]
  );

  return (
    <motion.section
      variants={container}
      initial="initial"
      animate="animate"
      aria-label="stepper"
      className="h-full w-full overflow-hidden flex flex-col gap-y-4"
    >
      <ScrollShadow size={0} orientation="horizontal" hideScrollBar className="flex flex-row gap-x-2 px-4 py-2">
        {(children as ReactElement<StepProps>[]).map((step, index) => (
          <div key={step.props.title} className="flex flex-col gap-y-2 w-full h-full flex-1 min-w-28">
            <div className="flex flex-row items-center gap-x-2">
              <div className="px-4">
                <Button
                  isIconOnly
                  size="sm"
                  radius="full"
                  variant="bordered"
                  color={activeStepIndex >= index ? "primary" : "default"}
                  className="flex-shrink-0 text-lg relative overflow-hidden"
                  onClick={() => setActiveStepKey(step.key)}
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

                  <p className="relative z-5">{index + 1}</p>
                </Button>
              </div>
              <div
                className={cn("w-8 h-1 bg-default-300 rounded flex-1 relative overflow-hidden", {
                  hidden: index === stepsCount - 1,
                })}
              >
                <motion.div
                  variants={line}
                  className="absolute bg-primary origin-left rtl:origin-right h-full w-full"
                  initial="initial"
                  animate={activeStepIndex > index ? "animate" : "initial"}
                ></motion.div>
              </div>
            </div>

            <h2 className="w-max cursor-pointer text-start px-2.5" onClick={() => setActiveStepKey(step.key)}>
              {step.props.title}
            </h2>
          </div>
        ))}
      </ScrollShadow>

      <ScrollShadow hideScrollBar size={0} className="w-full h-full overflow-y-auto p-2 flex-1">
        <AnimatePresence mode="wait">
          {Children.map(children as ReactElement[], (child: ReactElement) =>
            cloneElement(child, { isActive: child.key === activeStepKey })
          )}
        </AnimatePresence>
      </ScrollShadow>
    </motion.section>
  );
};

export default Stepper;
