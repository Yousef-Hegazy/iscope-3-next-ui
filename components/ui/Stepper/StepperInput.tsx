import { Input, InputProps } from "@nextui-org/react";
import { forwardRef, InputHTMLAttributes, useEffect } from "react";
import { useStepContext } from "./StepContext";

const StepperInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & InputProps>(
  ({ ...props }, ref) => {
    const { setErrors } = useStepContext();

    useEffect(() => {
      if (props.isInvalid) {
        setErrors((prev) => {
          if (!props.name) return prev;
          if (prev[props.name as string]) return prev;

          return {
            ...prev,
            [props.name as string]: true,
          };
        });
      } else {
        setErrors((prev) => {
          if (!props.name) return prev;
          if (!prev[props.name as string]) return prev;

          return {
            ...prev,
            [props.name as string]: false,
          };
        });
      }
    }, [props.isInvalid, props.name, setErrors]);

    return (
      <Input
        ref={ref}
        {...props}
        variant={props.variant || "bordered"}
        labelPlacement={props.labelPlacement || "outside"}
        placeholder={props.placeholder || ""}
      />
    );
  }
);

StepperInput.displayName = "StepperInput";

export default StepperInput;
