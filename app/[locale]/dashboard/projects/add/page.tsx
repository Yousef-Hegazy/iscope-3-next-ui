import Stepper from "@/components/ui/Stepper";

const AddProjectPage = () => {
  return (
    <main className="w-full h-full p-4">
      <Stepper
        steps={[
          {
            title: "خطوة 1",
            content: <div>Step 1 Content</div>,
          },
          {
            title: "خطوة 2",
            content: <div>Step 2 Content</div>,
          },
          {
            title: "خطوة 3",
            content: <div>Step 3 Content</div>,
          },
          {
            title: "خطوة 4",
            content: <div>Step 4 Content</div>,
          },
          {
            title: "خطوة 5",
            content: <div>Step 5 Content</div>,
          },
          {
            title: "خطوة 6",
            content: <div>Step 6 Content</div>,
          },
          {
            title: "خطوة 7",
            content: <div>Step 7 Content</div>,
          },
          {
            title: "خطوة 8",
            content: <div>Step 8 Content</div>,
          },
          {
            title: "خطوة 9",
            content: <div>Step 9 Content</div>,
          },
          {
            title: "خطوة 10",
            content: <div>Step 10 Content</div>,
          },
          {
            title: "خطوة 11",
            content: <div>Step 11 Content</div>,
          },
        ]}
      />
    </main>
  );
};

export default AddProjectPage;
