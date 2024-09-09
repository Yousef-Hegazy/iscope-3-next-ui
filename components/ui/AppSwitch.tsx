"use client";

import { Switch, SwitchProps } from "@nextui-org/react";
import { FC, HTMLAttributes } from "react";

const AppSwitch: FC<SwitchProps & HTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return <Switch {...props} />;
};

export default AppSwitch;
