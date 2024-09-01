"use client";
import { FC } from "react";
import { Label, Pie, PieChart } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

interface Props {
  item: {
    title: string;
    pie: {
      name: string;
      value: number;
      fill: string;
    }[];
    config: {
      completed: {
        label: string;
      };
      remaining: {
        label: string;
      };
    };
  };
  locale: string;
}

const ProjectCardChart: FC<Props> = ({ item, locale }) => {
  return (
    <ChartContainer config={item.config as ChartConfig} className="w-[80px] h-[100px] flex-shrink-0">
      <PieChart>
        <ChartTooltip
          position={{
            x: locale === "ar" ? -30 : 20,
          }}
          content={<ChartTooltipContent />}
        />

        <Pie
          data={item.pie}
          width={200}
          height={300}
          innerRadius={20}
          paddingAngle={5}
          cornerRadius={2}
          dataKey="value"
          nameKey="name"
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan x={viewBox.cx} y={viewBox.cy} className="font-semibold text-small fill-foreground">
                      {item.pie[0].value}%
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};

export default ProjectCardChart;
