import { Select, SelectProps } from "@nextui-org/react";
import { FC, forwardRef, SelectHTMLAttributes, useEffect } from "react";
import { useStepContext } from "./StepContext";
import { Control, Controller, ControllerProps, FieldValues, RegisterOptions } from "react-hook-form";

const StepperSelectInput: FC<SelectHTMLAttributes<HTMLSelectElement> & SelectProps> = ({ ...props }) => {
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
      variant={props.variant || "bordered"}
      labelPlacement={props.labelPlacement || "outside"}
      placeholder={props.placeholder || ""}
    />
  );
};

StepperSelectInput.displayName = "StepperSelectInput";

type SelectPropTypes = SelectHTMLAttributes<HTMLSelectElement> & SelectProps;

interface Props extends SelectPropTypes {
  control: Control<FieldValues>;
  name: string;
  rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">;
}

const StepperSelect = ({ control, name, rules, ...props }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState: { invalid } }) => <StepperSelectInput {...props} {...field} isInvalid={invalid} />}
    />
  );
};

export default StepperSelect;
