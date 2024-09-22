"use client";
import Stepper from "@/components/ui/Stepper";
import Step from "@/components/ui/Stepper/Step";
import { useTranslations } from "next-intl";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import StepperInput from "../ui/Stepper/StepperInput";
import { Divider } from "@nextui-org/react";

const AddProjectForm = () => {
  const t = useTranslations("projects");
  const commonT = useTranslations("common");
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
      <Stepper onCancel={() => {}}>
        <Step icon="id-card" stepKey="step 1" title={t("mainData")}>
          <div className="w-full flex-1 flex flex-col gap-y-4 p-4 h-full shadow-small rounded-small m-2">
            <h1 className="font-semibold text-lg">{t("mainData")}</h1>

            <Divider />

            <section className="grid grid-cols-1 gap-y-5 gap-x-4 md:grid-cols-2 lg:grid-cols-3">
              <StepperInput
                label={t("code")}
                placeholder="123"
                {...register("code", { required: true })}
                isInvalid={!!errors.code}
              />

              <StepperInput
                label={t("eitimadRefNo")}
                {...register("refNumber", { required: true })}
                isInvalid={!!errors.refNumber}
                placeholder="AEG123"
              />

              <StepperInput
                label={t("compNo")}
                {...register("compNumber", { required: true })}
                isInvalid={!!errors.compNumber}
                placeholder="AEG123"
              />

              <StepperInput
                label={commonT("arName")}
                {...register("nameFl", { required: true })}
                isInvalid={!!errors.nameFl}
                placeholder="مشروع الرياض"
              />

              <StepperInput
                label={commonT("enName")}
                {...register("nameSl", { required: true })}
                isInvalid={!!errors.nameSl}
                placeholder="Riyadh Project"
              />

              <StepperInput
                label={t("finLinkNo")}
                {...register("finLinkNumber", { required: true })}
                isInvalid={!!errors.finLinkNumber}
                placeholder="145698"
              />
            </section>
          </div>
        </Step>

        <Step
          icon="add-home"
          stepKey="step 2"
          title={t("executionData")}
          className="flex flex-col items-center justify-center"
        >
          <StepperInput label={t("code")} {...register("test", { required: true })} isInvalid={!!errors.test} />
        </Step>

        <Step
          icon="add-home"
          stepKey="step 3"
          title={t("executingParties")}
          className="flex flex-col items-center justify-center"
        >
          <StepperInput label={t("code")} {...register("test2", { required: true })} isInvalid={!!errors.test2} />
        </Step>

        <Step
          icon="add-home"
          stepKey="step 4"
          title={t("supplementaryData")}
          className="flex flex-col items-center justify-center"
        >
          <StepperInput label={t("code")} {...register("test3", { required: true })} isInvalid={!!errors.test3} />
        </Step>

        <Step
          icon="add-home"
          stepKey="step 5"
          title={t("affiliatedMuns")}
          className="flex flex-col items-center justify-center"
        >
          <StepperInput label={t("code")} {...register("test4", { required: true })} isInvalid={!!errors.test4} />

          <StepperInput label={t("code")} {...register("test5", { required: true })} isInvalid={!!errors.test5} />
        </Step>
      </Stepper>
    </form>
  );
};

export default AddProjectForm;
