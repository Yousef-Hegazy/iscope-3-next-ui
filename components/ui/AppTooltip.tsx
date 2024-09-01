"use client";
import useClientConfigStore from "@/stores/configStore";
import { Tooltip, TooltipProps } from "@nextui-org/react";
import { FC, useCallback, useState } from "react";

const AppTooltip: FC<TooltipProps> = ({ children, ...props }) => {
  const { isMobile } = useClientConfigStore();
  const [open, setOpen] = useState(false);

  //   console.log(isMobile);

  const handleOpen = useCallback(() => {
    console.log(isMobile);
    if (isMobile) {
      setOpen(true);
    }
  }, [isMobile]);

  const handleClose = useCallback(() => {
    if (isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  return (
    <Tooltip {...props} isOpen={open}>
      <span className="content" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
        {children}
      </span>
    </Tooltip>
  );
};

export default AppTooltip;
