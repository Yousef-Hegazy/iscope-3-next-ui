"use client";
import Stepper from "@/components/ui/Stepper";
import Step from "@/components/ui/Stepper/Step";
import { Divider, SelectItem } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import StepperDatePicker from "../ui/Stepper/StepperDatePicker";
import StepperInput from "../ui/Stepper/StepperInput";
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
          <section className="shadow-small flex-1 rounded-small p-4 w-full grid gap-y-5 gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

          <section className="shadow-small flex-1 rounded-small p-4 w-full grid gap-y-5 gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
          className="flex flex-col items-center justify-center p-2"
        >
          <div className="shadow-small rounded-small p-4 w-full h-full flex flex-col gap-y-3">
            <h3 className="text-lg font-semibold">{t("executingParties")}</h3>
            <Divider />
            <section className="w-full h-full grid gap-y-5 gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <StepperSelect
                control={control}
                name="type"
                label={t("typeOnly")}
                placeholder={t("typeOnly")}
                rules={{ required: true }}
              >
                <SelectItem key="budget">{t("budget")}</SelectItem>
                <SelectItem key="initiative">{t("initiative")}</SelectItem>
              </StepperSelect>

              <StepperSelect
                control={control}
                name="contractionType"
                label={t("contractionType")}
                placeholder={t("contractionType")}
                rules={{ required: true }}
              >
                <SelectItem key="lumpSum">{t("lumpSum")}</SelectItem>
                <SelectItem key="unitPrice">{t("unitPrice")}</SelectItem>
                <SelectItem key="costPlus">{t("costPlus")}</SelectItem>
              </StepperSelect>

              <StepperSelect
                control={control}
                name="subType"
                label={t("subType")}
                placeholder={t("subType")}
                rules={{ required: true }}
                className="col-span-2"
              >
                <SelectItem key="budget">{t("budget")}</SelectItem>
                <SelectItem key="initiative">{t("initiative")}</SelectItem>
              </StepperSelect>

              <StepperSelect
                control={control}
                name="contractor"
                label={t("contractor")}
                placeholder={t("contractor")}
                rules={{ required: true }}
              >
                <SelectItem key="cont1">{`${t("contractor")} 1`}</SelectItem>
                <SelectItem key="cont2">{`${t("contractor")} 2`}</SelectItem>
                <SelectItem key="cont3">{`${t("contractor")} 3`}</SelectItem>
              </StepperSelect>

              <StepperSelect
                control={control}
                name="studyConsultant"
                label={t("studyConsultant")}
                placeholder={t("studyConsultant")}
                rules={{ required: true }}
              >
                <SelectItem key="studyConsult1">{`${t("studyConsultant")} 1`}</SelectItem>
                <SelectItem key="studyConsult2">{`${t("studyConsultant")} 2`}</SelectItem>
                <SelectItem key="studyConsult3">{`${t("studyConsultant")} 3`}</SelectItem>
              </StepperSelect>

              <StepperSelect
                control={control}
                name="executiveConsultant"
                label={t("executiveConsultant")}
                placeholder={t("executiveConsultant")}
                rules={{ required: true }}
                className="col-span-2"
              >
                <SelectItem key="executiveConsult1">{`${t("executiveConsultant")} 1`}</SelectItem>
                <SelectItem key="executiveConsult2">{`${t("executiveConsultant")} 2`}</SelectItem>
                <SelectItem key="executiveConsult3">{`${t("executiveConsultant")} 3`}</SelectItem>
              </StepperSelect>

              <StepperSelect
                control={control}
                name="owner"
                label={t("owner")}
                placeholder={t("owner")}
                rules={{ required: true }}
                className="col-span-2"
              >
                <SelectItem key="owner1">{`${t("owner")} 1`}</SelectItem>
                <SelectItem key="owner2">{`${t("owner")} 2`}</SelectItem>
                <SelectItem key="owner3">{`${t("owner")} 3`}</SelectItem>
              </StepperSelect>

              <StepperSelect
                control={control}
                name="department"
                label={t("department")}
                placeholder={t("department")}
                rules={{ required: true }}
                className="col-span-2"
              >
                <SelectItem key="department1">{`${t("department")} 1`}</SelectItem>
                <SelectItem key="department2">{`${t("department")} 2`}</SelectItem>
                <SelectItem key="department3">{`${t("department")} 3`}</SelectItem>
              </StepperSelect>

              <StepperSelect
                control={control}
                name="area"
                label={t("area")}
                placeholder={t("area")}
                rules={{ required: true }}
                className="col-span-2"
              >
                <SelectItem key="area1">{`${t("area")} 1`}</SelectItem>
                <SelectItem key="area2">{`${t("area")} 2`}</SelectItem>
                <SelectItem key="area3">{`${t("area")} 3`}</SelectItem>
              </StepperSelect>

              <StepperSelect
                control={control}
                name="city"
                label={t("city")}
                placeholder={t("city")}
                rules={{ required: true }}
                className="col-span-2"
              >
                <SelectItem key="city1">{`${t("city")} 1`}</SelectItem>
                <SelectItem key="city2">{`${t("city")} 2`}</SelectItem>
                <SelectItem key="city3">{`${t("city")} 3`}</SelectItem>
              </StepperSelect>
            </section>
          </div>
        </Step>

        <Step
          icon="add-home"
          stepKey="step 4"
          title={t("supplementaryData")}
          className="flex flex-col items-center justify-center w-full gap-y-4 p-2"
        >
          <section className="shadow-small flex-1 w-full  flex flex-row flex-wrap items-start rounded-small p-4 gap-3">
            <StepperSelect
              control={control}
              name="budgetClassification"
              label={t("budgetClassification")}
              placeholder={t("budgetClassification")}
              rules={{ required: true }}
              className="basis-full md:basis-[calc(50%-0.5rem)] lg:flex-1"
            >
              <SelectItem key="first">{t("firstDoor")}</SelectItem>
              <SelectItem key="second">{t("secondDoor")}</SelectItem>
              <SelectItem key="third">{t("thirdDoor")}</SelectItem>
              <SelectItem key="fourth">{t("fourthDoor")}</SelectItem>
            </StepperSelect>

            <StepperInput
              {...register("contractNumber", { required: true })}
              label={t("contractNo")}
              placeholder={t("contractNo")}
              className="basis-full md:basis-[calc(50%-0.5rem)] lg:flex-1"
            />

            <StepperDatePicker
              control={control}
              name="projectDate"
              rules={{ required: true }}
              label={t("date")}
              className="basis-full md:basis-[calc(50%-0.5rem)] lg:flex-1"
            />
          </section>

          <section className="shadow-small flex-1 rounded-small p-4 w-full grid gap-y-5 gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></section>
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
