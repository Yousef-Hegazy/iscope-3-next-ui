"use client";
import Stepper from "@/components/ui/Stepper";
import Step from "@/components/ui/Stepper/Step";
import { useTranslations } from "next-intl";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import StepperInput from "../ui/Stepper/StepperInput";
import { Divider, SelectItem } from "@nextui-org/react";
import StepperSelect from "../ui/Stepper/StepperSelect";

const AddProjectForm = () => {
  const t = useTranslations("projects");
  const commonT = useTranslations("common");
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
  } = useForm();

  const onSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full">
      <Stepper onCancel={() => {}}>
        <Step icon="id-card" stepKey="step 1" title={t("mainData")} className="p-2">
          <div className="w-full flex-1 flex flex-col gap-y-4 p-4 h-full shadow-small rounded-small">
            <h1 className="font-semibold text-lg">{t("mainData")}</h1>

            <Divider />

            <section className="grid grid-cols-1 gap-y-5 gap-x-4 md:grid-cols-2 lg:grid-cols-3">
              <StepperInput
                label={t("code")}
                placeholder={t("code")}
                {...register("code", { required: true })}
                isInvalid={!!errors.code}
              />

              <StepperInput
                label={t("eitimadRefNo")}
                {...register("refNumber", { required: true })}
                isInvalid={!!errors.refNumber}
                placeholder={t("eitimadRefNo")}
              />

              <StepperInput
                label={t("compNo")}
                {...register("compNumber", { required: true })}
                isInvalid={!!errors.compNumber}
                placeholder={t("compNo")}
              />

              <StepperInput
                label={commonT("arName")}
                {...register("nameFl", { required: true })}
                isInvalid={!!errors.nameFl}
                placeholder={commonT("arName")}
              />

              <StepperInput
                label={commonT("enName")}
                {...register("nameSl", { required: true })}
                isInvalid={!!errors.nameSl}
                placeholder={commonT("enName")}
              />

              <StepperInput
                label={t("finLinkNo")}
                {...register("finLinkNumber", { required: true })}
                isInvalid={!!errors.finLinkNumber}
                placeholder={t("finLinkNo")}
              />
            </section>
          </div>
        </Step>

        <Step
          icon="add-home"
          stepKey="step 2"
          title={t("executionData")}
          className="flex flex-col items-center justify-center w-full gap-y-4 p-2"
        >
          <section className="shadow-small rounded-small p-4 w-full grid gap-y-5 gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <StepperInput
              label={t("basicPeriod")}
              {...register("basicPeriod", { required: true, valueAsNumber: true, min: 0 })}
              isInvalid={!!errors.basicPeriod}
              placeholder={t("basicPeriod")}
              endContent={<p className="font-light text-small">{commonT("day")}</p>}
              type="number"
            />

            <StepperInput
              label={t("actualPeriod")}
              {...register("actualPeriod", { required: true, valueAsNumber: true, min: 0 })}
              isInvalid={!!errors.actualPeriod}
              placeholder={t("actualPeriod")}
              endContent={<p className="font-light text-small">{commonT("day")}</p>}
              type="number"
            />

            <StepperInput
              label={t("contractualVal")}
              {...register("contractualVal", { required: true, valueAsNumber: true, min: 0 })}
              isInvalid={!!errors.contractualVal}
              placeholder={t("contractualVal")}
              endContent={<p className="font-light text-small">{commonT("sar")}</p>}
              type="number"
            />
          </section>

          <section className="shadow-small rounded-small p-4 w-full grid gap-y-5 gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <StepperInput
              label={t("contractorBidDiscountRate")}
              {...register("contractorBidDiscountRate", { required: true, valueAsNumber: true, min: 0 })}
              isInvalid={!!errors.contractorBidDiscountRate}
              placeholder={t("contractorBidDiscountRate")}
              endContent={<p className="font-light text-small">%</p>}
              type="number"
            />

            <StepperInput
              label={t("contractorBidDiscountValue")}
              {...register("contractorBidDiscountValue", { required: true, valueAsNumber: true, min: 0 })}
              isInvalid={!!errors.contractorBidDiscountValue}
              placeholder={t("contractorBidDiscountValue")}
              endContent={<p className="font-light text-small">{commonT("sar")}</p>}
              type="number"
            />

            <StepperInput
              label={t("advanceDiscountRate")}
              placeholder={t("advanceDiscountRate")}
              {...register("advanceDiscountRate", { required: true, valueAsNumber: true, min: 0 })}
              isInvalid={!!errors.advanceDiscountRate}
              endContent={<p className="font-light text-small">%</p>}
              type="number"
            />

            <StepperInput
              label={t("advanceDiscountValue")}
              placeholder={t("advanceDiscountValue")}
              {...register("advanceDiscountValue", { required: true, valueAsNumber: true, min: 0 })}
              isInvalid={!!errors.advanceDiscountValue}
              endContent={<p className="font-light text-small">{commonT("sar")}</p>}
              type="number"
            />
          </section>
        </Step>

        <Step
          icon="add-home"
          stepKey="step 3"
          title={t("executingParties")}
          className="flex flex-col items-center justify-center"
        >
          <section className="shadow-small rounded-small p-4 w-full grid gap-y-5 gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <StepperSelect
              control={control}
              name="type"
              label={t("type")}
              placeholder={t("type")}
              rules={{ required: true }}
            >
              <SelectItem key="budget">{t("budget")}</SelectItem>
              <SelectItem key="initiative">{t("initiative")}</SelectItem>
            </StepperSelect>
          </section>
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
