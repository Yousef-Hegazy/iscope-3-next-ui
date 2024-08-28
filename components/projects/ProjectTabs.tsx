"use client";

import { formatDate } from "@/lib/date-helpers";
import { Project } from "@/models/project";
import { Card, CardBody, colors, Tab, Tabs, Tooltip } from "@nextui-org/react";
import momentH from "moment-hijri";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";
import Icon from "../Icon";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const yDay = momentH().add(-1, "day");

const ProjectTabs = ({ project, locale }: { project: Project; locale: string }) => {
  const t = useTranslations();

  const cards = useMemo(
    () => [
      {
        title: t("projects.percentageOnSite"),
        pie: [
          { name: t("completed"), value: 10, fill: colors.cyan[500] },
          { name: t("remaining"), value: 90, fill: colors.cyan[900] },
        ],
      },
      {
        title: t("projects.percentageOnSitePayable"),
        pie: [
          {
            name: t("completed"),
            value: 50,
            fill: colors.cyan[500],
          },
          {
            name: t("remaining"),
            value: 50,
            fill: colors.cyan[900],
          },
        ],
      },
      {
        title: t("projects.plannedPercentage"),
        pie: [
          { name: t("completed"), value: 20, fill: colors.cyan[500] },
          { name: t("remaining"), value: 80, fill: colors.cyan[900] },
        ],
      },
      {
        title: t("projects.financialPercentage"),
        pie: [
          { name: t("completed"), value: 60, fill: colors.cyan[500] },
          { name: t("remaining"), value: 40, fill: colors.cyan[900] },
        ],
      },
    ],
    [t]
  );

  return (
    <Tabs
      radius="sm"
      variant="solid"
      color="primary"
      classNames={{
        base: "w-full mx-0 px-0",
        tabList: "w-full justify-evenly",
      }}
    >
      <Tab
        key="main-data"
        title={
          <div className="flex flex-row items-center gap-2 justify-center">
            <Icon icon="open-book" />
            <p>{t("projects.mainData")}</p>
          </div>
        }
      >
        <div className="flex flex-col gap-3">
          <Card
            shadow="sm"
            radius="sm"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-evenly items-start gap-4 px-4 py-3"
          >
            <Tooltip content={project.id} closeDelay={3} className="max-w-xs">
              <div className="flex flex-col gap-0.5 items-start justify-start">
                <p className="text-neutral-400 font-semibold text-xs">{t("projects.contractNo")}</p>
                <p className="font-normal line-clamp-2 text-small">{project.id}</p>
              </div>
            </Tooltip>

            <Tooltip content={project.id.split("-")[0]} closeDelay={3} className="max-w-xs">
              <div className="flex flex-col gap-0.5 items-start justify-start">
                <p className="text-neutral-400 font-semibold text-xs">{t("projects.code")}</p>
                <p className="font-normal line-clamp-2 text-small">{project.id.split("-")[0]}</p>
              </div>
            </Tooltip>

            <Tooltip content={formatDate(yDay, locale)} closeDelay={3} className="max-w-xs">
              <div className="flex flex-col gap-0.5 items-start justify-start">
                <p className="text-neutral-400 font-semibold text-xs">{t("projects.date")}</p>
                <p className="font-normal line-clamp-2 text-small">{formatDate(yDay, locale)}</p>
              </div>
            </Tooltip>

            <Tooltip content={project.owner} closeDelay={3} className="max-w-xs">
              <div className="flex flex-col gap-0.5 items-start justify-start">
                <p className="text-neutral-400 font-semibold text-xs">{t("projects.owner")}</p>
                <p className="font-normal line-clamp-2 text-small">{project.owner}</p>
              </div>
            </Tooltip>

            <Tooltip content={project.studyEntity} closeDelay={3} className="max-w-xs">
              <div className="flex flex-col gap-0.5 items-start justify-start">
                <p className="text-neutral-400 font-semibold text-xs">{t("projects.studyOrg")}</p>
                <p className="font-normal line-clamp-2 text-small">{project.studyEntity}</p>
              </div>
            </Tooltip>

            <Tooltip content={project.consultant} closeDelay={3} className="max-w-xs">
              <div className="flex flex-col gap-0.5 items-start justify-start">
                <p className="text-neutral-400 font-semibold text-xs">{t("projects.consultant")}</p>
                <p className="font-normal line-clamp-2 text-small">{project.consultant}</p>
              </div>
            </Tooltip>

            <Tooltip content={project.contractor} closeDelay={3} className="max-w-xs">
              <div className="flex flex-col gap-0.5 items-start justify-start">
                <p className="text-neutral-400 font-semibold text-xs">{t("projects.contractor")}</p>
                <p className="font-normal line-clamp-2 text-small">{project.contractor}</p>
              </div>
            </Tooltip>

            <Tooltip content={project.department} closeDelay={3} className="max-w-xs">
              <div className="flex flex-col gap-0.5 items-start justify-start">
                <p className="text-neutral-400 font-semibold text-xs">{t("projects.department")}</p>
                <p className="font-normal line-clamp-2 text-small">{project.department}</p>
              </div>
            </Tooltip>

            <Tooltip content={project.type} closeDelay={3} className="max-w-xs">
              <div className="flex flex-col gap-0.5 items-start justify-start">
                <p className="text-neutral-400 font-semibold text-xs">{t("projects.type")}</p>
                <p className="font-normal line-clamp-2 text-small">{project.type}</p>
              </div>
            </Tooltip>
          </Card>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {cards.map((item, index) => (
              <Card key={index} radius="sm" className="w-full overflow-visible" shadow="sm">
                <Tooltip content={item.title} className="max-w-xs text-small">
                  <CardBody className="h-full w-full flex flex-row items-center gap-2 overflow-visible py-0">
                    <ChartContainer config={{}} className="w-[100px] h-[100px] flex-shrink-0">
                      <PieChart>
                        <ChartTooltip content={<ChartTooltipContent />} />

                        <Pie
                          data={item.pie}
                          width={100}
                          height={100}
                          innerRadius={25}
                          paddingAngle={5}
                          cornerRadius={2}
                          dataKey="value"
                          nameKey="name"
                        >
                          {/* <Cell fill={colors.cyan[500]} />

                      <Cell fill={colors.cyan[900]} /> */}

                          <Label
                            content={({ viewBox }) => {
                              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                                    <tspan
                                      x={viewBox.cx}
                                      y={viewBox.cy}
                                      className="font-semibold text-small fill-foreground"
                                    >
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

                    <p className="text-start text-small line-clamp-2">{item.title}</p>
                  </CardBody>
                </Tooltip>
              </Card>
            ))}
          </div>

          <div className="w-full h-full shadow-small rounded-small bg-white-100/40 backdrop-blur-lg">
            <Tabs
              variant="underlined"
              classNames={{
                base: "w-full border-b-1 border-neutral-200",
                panel: "px-4",
                tabList: "w-full justify-evenly pb-0",
              }}
            >
              <Tab key="financial-record" title={t("projects.financialRecord")}>
                <p>Financial record</p>
              </Tab>
              <Tab key="duration-record" title={t("projects.durationRecord")}>
                <p>Durations record</p>
              </Tab>
              <Tab key="date-record" title={t("projects.datesRecord")}>
                <p>Date record</p>
              </Tab>
              <Tab key="externalDepsRefNo-record" title={t("projects.externalDepsRefNo")}>
                <p>External Departments Reference Number</p>
              </Tab>
              <Tab key="timeline" title={t("projects.timeline")}>
                <p>Timeline</p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Tab>

      <Tab
        key="timeline"
        title={
          <div className="flex flex-row items-center gap-2 justify-center">
            <Icon icon="language" />
            <p>{t("projects.timeline")}</p>
          </div>
        }
      >
        <p>Timeline</p>
      </Tab>

      <Tab
        key="requests"
        title={
          <div className="flex flex-row items-center gap-2 justify-center">
            <Icon icon="suitcase" />
            <p>{t("projects.requests")}</p>
          </div>
        }
      >
        <p>Requests</p>
      </Tab>

      <Tab
        key="reports"
        title={
          <div className="flex flex-row items-center gap-2 justify-center">
            <Icon icon="users" />
            <p>{t("projects.reports")}</p>
          </div>
        }
      >
        <p>Requests</p>
      </Tab>

      <Tab
        key="visits"
        title={
          <div className="flex flex-row items-center gap-2 justify-center">
            <Icon icon="medal" />
            <p>{t("projects.visits")}</p>
          </div>
        }
      >
        <p>Visits</p>
      </Tab>
    </Tabs>
  );
};

export default ProjectTabs;
