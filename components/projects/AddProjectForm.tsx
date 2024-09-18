"use client";
import Stepper, { Step } from "@/components/ui/Stepper";

const AddProjectForm = () => {
  return (
    <Stepper onCancel={() => {}}>
      <Step
        icon="id-card"
        stepKey="step 1"
        title="البيانات الأساسية"
        className="flex flex-col items-center justify-center gap-y-4"
      >
        <div className="w-20 h-10 rounded bg-primary shadow"></div>
        <div className="w-20 h-10 rounded bg-primary shadow"></div>
        <div className="w-20 h-10 rounded bg-primary shadow"></div>
        <div className="w-20 h-10 rounded bg-primary shadow"></div>
        <div className="w-20 h-10 rounded bg-primary shadow"></div>
      </Step>

      <Step
        icon="add-home"
        stepKey="step 2"
        title="بيانات التنفيذ"
        className="flex flex-col items-center justify-center"
      >
        <div className="w-20 h-10 rounded bg-danger shadow"></div>
      </Step>

      <Step
        icon="add-home"
        stepKey="step 3"
        title="الجهات المنفذة"
        className="flex flex-col items-center justify-center"
      >
        <div className="w-20 h-10 rounded bg-warning shadow"></div>
      </Step>

      <Step
        icon="add-home"
        stepKey="step 4"
        title="بيانات تكميلية"
        className="flex flex-col items-center justify-center"
      >
        <div className="w-20 h-10 rounded bg-success shadow"></div>
      </Step>

      <Step
        icon="add-home"
        stepKey="step 5"
        title="البلديات التابعة"
        className="flex flex-col items-center justify-center"
      >
        <div className="w-20 h-10 rounded bg-default-800 shadow"></div>
      </Step>

      {/* <Step stepKey="step 6" title="خطوة 6" className="flex flex-col items-center justify-center">
      <div className="w-20 h-10 rounded bg-rose-600 shadow"></div>
    </Step>
    <Step stepKey="step 8" title="خطوة 8" className="flex flex-col items-center justify-center">
      <div className="w-20 h-10 rounded bg-emerald-600 shadow"></div>
    </Step>
    <Step stepKey="step 9" title="خطوة 9" className="flex flex-col items-center justify-center">
      <div className="w-20 h-10 rounded bg-emerald-600 shadow"></div>
    </Step>
    <Step stepKey="step 10" title="خطوة 10" className="flex flex-col items-center justify-center">
      <div className="w-20 h-10 rounded bg-emerald-600 shadow"></div>
    </Step>
    <Step stepKey="step 11" title="خطوة 11" className="flex flex-col items-center justify-center">
      <div className="w-20 h-10 rounded bg-emerald-600 shadow"></div>
    </Step>
    <Step stepKey="step 12" title="خطوة 12" className="flex flex-col items-center justify-center">
      <div className="w-20 h-10 rounded bg-emerald-600 shadow"></div>
    </Step>
    <Step stepKey="step 13" title="خطوة 13" className="flex flex-col items-center justify-center">
      <div className="w-20 h-10 rounded bg-emerald-600 shadow"></div>
    </Step>
    <Step stepKey="step 14" title="خطوة 14" className="flex flex-col items-center justify-center">
      <div className="w-20 h-10 rounded bg-emerald-600 shadow"></div>
    </Step> */}
    </Stepper>
  );
};

export default AddProjectForm;
