import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext } from "react";

type StepperContextType = {
  activeStepKey?: string;
  steps: (string | null)[];
  errorSteps: string[];
  setErrorSteps: Dispatch<SetStateAction<string[]>>;
  setActiveStepKey: (key: string) => void;
};

export const StepperContext = createContext<StepperContextType>({
  activeStepKey: undefined,
  steps: [],
  setActiveStepKey: () => {},
  errorSteps: [],
  setErrorSteps: () => {},
});

const StepperProvider: FC<{ children: ReactNode } & StepperContextType> = ({
  steps,
  children,
  setActiveStepKey,
  activeStepKey,
  errorSteps,
  setErrorSteps,
}) => {
  return (
    <StepperContext.Provider
      value={{
        activeStepKey,
        setActiveStepKey,
        steps,
        errorSteps,
        setErrorSteps,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export const useStepperContext = () => {
  const ctx = useContext(StepperContext);

  if (!ctx) {
    throw new Error("useStepperContext must be used within a StepperProvider");
  }

  return ctx;
};

export default StepperProvider;
