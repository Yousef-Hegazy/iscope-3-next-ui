import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext } from "react";

type StepContextProps = {
  stepKey: string;
  errors: { [key: string]: boolean };
  setErrors: Dispatch<SetStateAction<{ [k: string]: boolean }>>;
};

const StepContext = createContext<StepContextProps>({
  stepKey: "",
  errors: {},
  setErrors: () => {},
});

const StepProvider: FC<{ children: ReactNode } & StepContextProps> = ({ children, stepKey, errors, setErrors }) => {
  return <StepContext.Provider value={{ stepKey, errors, setErrors }}>{children}</StepContext.Provider>;
};

export const useStepContext = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useSteoContext must be used within a StepProvider");
  }
  return context;
};

export default StepProvider;
