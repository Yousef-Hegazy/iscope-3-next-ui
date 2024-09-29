"use client";

import { Chip } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import Stepper from "../ui/Stepper";
import Step from "../ui/Stepper/Step";
import StepperInput from "../ui/Stepper/StepperInput";

const AddIRForm = () => {
  const locale = useLocale();
  const t = useTranslations("requests");
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm();

  const onSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
      <Stepper>
        <Step stepKey="Step-1" title={t("chooseProject")} icon="suitcase" className="p-6 w-full h-full">
          <section className="rounded-small shadow-small p-2.5 w-full h-full">
            <StepperInput
              className="hidden"
              {...register("chosenProject", { required: true })}
              isInvalid={!!errors.chosenProject}
            />

            <div
              onClick={() => {
                setValue("chosenProject", "project1");
                clearErrors("chosenProject");
              }}
              className="cursor-pointer shadow-small rounded-small ring-1 ring-primary flex flex-col gap-y-2 w-full p-4"
            >
              <h1 className="text-xl">مشروع 1</h1>

              <Chip title="متقدم" color="primary">
                متقدم
              </Chip>
            </div>
          </section>
        </Step>
        <Step stepKey="Step-2" title={t("")} icon="suitcase" className="p-6 w-full h-full">
          <section className="rounded-small shadow-small p-2.5 w-full h-full"></section>
        </Step>
      </Stepper>
    </form>
  );
};

export default AddIRForm;
