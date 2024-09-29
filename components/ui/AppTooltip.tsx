"use client";
import useClientConfigStore from "@/stores/configStore";
import { Tooltip, TooltipProps } from "@nextui-org/react";
import { FC, useCallback, useState } from "react";

const AppTooltip: FC<TooltipProps> = ({ children, ...props }) => {
  const { isMobile } = useClientConfigStore();
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
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
    <Tooltip
      showArrow={false}
      classNames={{
        content: "bg-foreground/80 backdrop-blur-3xl text-background",
      }}
      isOpen={isMobile ? open : undefined}
      {...props}
    >
      <span className="content" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
        {children}
      </span>
    </Tooltip>
  );
};

export default AppTooltip;
