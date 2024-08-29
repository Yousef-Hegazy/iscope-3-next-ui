import { ReactNode, Suspense } from "react";
import QuickActions from "./QuickActions";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const LayoutWrapper = ({ children, locale }: { children: ReactNode; locale: string }) => {
  return (
    <>
      <Topbar params={{ locale }} />
      <div className="flex flex-row flex-grow overflow-hidden h-full w-full">
        <Sidebar />

        <div className="flex flex-col flex-1 overflow-hidden">
          <QuickActions />
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </div>
    </>
  );
};

export default LayoutWrapper;
