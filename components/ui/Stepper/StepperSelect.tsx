import { Select, SelectProps } from "@nextui-org/react";
import { forwardRef, SelectHTMLAttributes, useEffect } from "react";
import { useStepContext } from "./StepContext";

const StepperSelect = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement> & SelectProps>(
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
      <Select
        {...props}
        ref={ref}
        variant={props.variant || "bordered"}
        labelPlacement={props.labelPlacement || "outside"}
        placeholder={props.placeholder || ""}
      />
    );
  }
);

StepperSelect.displayName = "StepperSelect";

export default StepperSelect;
