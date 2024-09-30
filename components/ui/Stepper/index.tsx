"use client";

import { Button, ScrollShadow } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { memo, ReactElement, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import Icon from "../Icon";
import { StepProps } from "./Step";
import StepButton from "./StepButton";
import StepperProvider from "./StepperContext";

const container: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 1,
    },
  },
};

interface Props {
  children: ReactNode;
  onCancel?: () => void;
  hideSubmit?: boolean;
  setIsReturn?: (isReturn: boolean) => void;
}

const Stepper = memo(({ children, onCancel, hideSubmit, setIsReturn }: Props) => {
  const [errorSteps, setErrorSteps] = useState<string[]>([]);
  const t = useTranslations("common");
  const steps = useMemo(() => (children as ReactElement<StepProps>[]).map((c) => c.props.stepKey), [children]);
  const stepsCount = useMemo(() => steps.length, [steps]);

  const [activeStepKey, setActiveStepKey] = useState(steps[0]);

  const activeStepIndex = useMemo(() => (activeStepKey ? steps.indexOf(activeStepKey) : -1), [activeStepKey, steps]);

  const handlePrev = useCallback(() => {
    const index = activeStepIndex - 1;
    if (index >= 0) {
      setActiveStepKey(steps[index]);
    }
  }, [activeStepIndex, setActiveStepKey, steps]);

  const handleNext = useCallback(() => {
    const index = activeStepIndex + 1;
    if (index < steps.length) {
      setActiveStepKey(steps[index]);
    }
  }, [activeStepIndex, setActiveStepKey, steps]);

  // useEffect(() => {
  //   if (errorSteps.includes(activeStepKey)) return;

  //   if (errorSteps.length > 0) {
  //     setActiveStepKey(errorSteps[0]);
  //   }
  // }, [activeStepKey, errorSteps]);

  return (
    <StepperProvider
      steps={steps}
      activeStepKey={activeStepKey}
      setActiveStepKey={setActiveStepKey}
      errorSteps={errorSteps}
      setErrorSteps={setErrorSteps}
    >
      <motion.section
        variants={container}
        initial="initial"
        animate="animate"
        aria-label="stepper"
        className="h-full w-full max-h-full overflow-hidden flex flex-col items-center gap-y-4 max-w-full px-1 py-1"
      >
        <ScrollShadow size={0} orientation="horizontal" hideScrollBar className="w-full flex-shrink-0">
          <div className="flex flex-row justify-stretch gap-x-2 w-full py-2 rounded">
            {(children as ReactElement<StepProps>[]).map((step, index) => (
              <StepButton
                key={step.props.title}
                step={step}
                index={index}
                stepsCount={stepsCount}
                activeStepIndex={activeStepIndex}
                setActiveStepKey={setActiveStepKey}
              />
            ))}
          </div>
        </ScrollShadow>

        <ScrollShadow hideScrollBar size={0} className="w-full h-full flex-1">
          {children}
        </ScrollShadow>

        <div className="flex flex-row items-center justify-between gap-x-2 w-full flex-shrink-0 border-t border-default-300 py-2">
          <div className="flex flex-row gap-x-2">
            <Button
              size="sm"
              onPress={handlePrev}
              color={activeStepIndex === 0 ? "default" : "primary"}
              disabled={activeStepIndex === 0}
              startContent={<Icon icon="menu-arrow-left" className="w-4 h-4 rtl:rotate-180" />}
            >
              {t("previous")}
            </Button>

            <Button
              size="sm"
              onPress={handleNext}
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
                onPress={() => setIsReturn?.(false)}
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
                onPress={() => setIsReturn?.(true)}
              >
                {t("saveAndReturn")}
              </Button>
            )}

            {onCancel && (
              <Button
                startContent={<Icon icon="close" className="w-5 h-5" />}
                size="sm"
                color="danger"
                type="button"
                variant="bordered"
                onPress={onCancel}
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
