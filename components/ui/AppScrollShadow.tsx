"use client";
import { ScrollShadow, ScrollShadowProps } from "@nextui-org/react";
import { FC } from "react";

const AppScrollShadow: FC<ScrollShadowProps> = ({ ...props }) => {
  return <ScrollShadow {...props} />;
};

export default AppScrollShadow;
