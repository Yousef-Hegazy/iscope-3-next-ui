import { cn } from "@nextui-org/react";
import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGSVGElement> {
  icon: string;
}

const Icon = ({ icon, className, ...rest }: Props) => {
  const containerCs = cn("w-5 h-5", className);

  return (
    <svg {...rest} className={containerCs}>
      <use href={`#icon-${icon}`} />
    </svg>
  );
};

export default Icon;
