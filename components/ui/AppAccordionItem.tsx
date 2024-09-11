"use client";

import { AccordionItem, AccordionItemProps } from "@nextui-org/react";
import { FC } from "react";

const AppAccordionItem: FC<AccordionItemProps> = ({ ...props }) => {
  return <AccordionItem {...props} />;
};

export default AppAccordionItem;
