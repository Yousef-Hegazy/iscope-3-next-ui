import { ReactNode } from "react";
import Content from "./Content";
import SubRoutes from "./Content/SubRoutes";
import Topbar from "./Topbar";

const LayoutWrapper = ({ children, locale }: { children: ReactNode; locale: string }) => {
  return (
    <>
      <Topbar params={{ locale }} />
      <div className="flex flex-row flex-grow overflow-hidden h-full w-full">
        <Content />

        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </>
  );
};

export default LayoutWrapper;
