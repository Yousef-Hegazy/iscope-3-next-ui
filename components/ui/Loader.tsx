import { Spinner } from "@nextui-org/react";

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner color="primary" />
    </div>
  );
};

export default Loader;
