import { ScrollShadow } from "@nextui-org/react";
import { ReactNode } from "react";
import QuickActions from "../QuickActions";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Topbar />
      <div className="relative flex flex-row flex-grow overflow-hidden h-full w-full">
        <Sidebar />

        <div className="flex flex-col flex-1 overflow-hidden">
          <QuickActions />
          <ScrollShadow size={10} orientation="vertical" hideScrollBar className="flex-1">
            {children}
          </ScrollShadow>
        </div>
      </div>
    </>
  );
};

export default LayoutWrapper;
