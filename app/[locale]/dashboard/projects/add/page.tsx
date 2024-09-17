import Stepper, { Step } from "@/components/ui/Stepper";

const AddProjectPage = () => {
  return (
    <main className="w-full h-full p-4">
      <Stepper>
        <Step key="step 1" title="خطوة 1" className="flex-col items-center justify-center gap-y-4">
          <div className="w-20 h-10 rounded bg-primary shadow"></div>
        </Step>
        <Step key="step 2" title="خطوة 2">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-20 h-10 rounded bg-danger shadow"></div>
          </div>
        </Step>
        <Step key="step 3" title="خطوة 3">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-20 h-10 rounded bg-warning shadow"></div>
          </div>
        </Step>
        <Step key="step 4" title="خطوة 4">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-20 h-10 rounded bg-success shadow"></div>
          </div>
        </Step>
        <Step key="step 5" title="خطوة 5">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-20 h-10 rounded bg-default-800 shadow"></div>
          </div>
        </Step>
        <Step key="step 6" title="خطوة 6">
          <h1>Step 6</h1>
        </Step>
        <Step key="step 7" title="خطوة 7">
          <h1>Step 7</h1>
        </Step>
      </Stepper>
    </main>
  );
};

export default AddProjectPage;
