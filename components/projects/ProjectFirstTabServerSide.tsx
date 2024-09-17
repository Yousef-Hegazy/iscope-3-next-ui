import { formatDate } from "@/lib/date-helpers";
import { Project } from "@/models/project";
import { Card, CardBody, colors } from "@nextui-org/react";
import momentH from "moment-hijri";
import AppTooltip from "../ui/AppTooltip";
import ProjectCardChart from "./ProjectCardChart";

const yDay = momentH().add(-1, "day");

const ProjectFirstTab = ({ project, locale, t }: { project: Project; locale: string; t: any }) => {
  const cards = [
    {
      title: t("percentageOnSite"),
      pie: [
        { name: "completed", value: 10, fill: colors.cyan[600] },
        { name: "remaining", value: 90, fill: colors.cyan[900] },
      ],
      config: {
        completed: {
          label: t("completed"),
        },
        remaining: {
          label: t("remaining"),
        },
      },
    },
    {
      title: t("percentageOnSitePayable"),
      pie: [
        {
          name: "completed",
          value: 50,
          fill: colors.cyan[600],
        },
        {
          name: "remaining",
          value: 50,
          fill: colors.cyan[900],
        },
      ],
      config: {
        completed: {
          label: t("completed"),
        },
        remaining: {
          label: t("remaining"),
        },
      },
    },
    {
      title: t("plannedPercentage"),
      pie: [
        { name: "completed", value: 20, fill: colors.cyan[600] },
        {
          name: "remaining",
          value: 80,
          fill: colors.cyan[900],
        },
      ],
      config: {
        completed: {
          label: t("completed"),
        },
        remaining: {
          label: t("remaining"),
        },
      },
    },
    {
      title: t("financialPercentage"),
      pie: [
        { name: "completed", value: 60, fill: colors.cyan[600] },
        {
          name: "remaining",
          value: 40,
          fill: colors.cyan[900],
        },
      ],
      config: {
        completed: {
          label: t("completed"),
        },
        remaining: {
          label: t("remaining"),
        },
      },
    },
  ];

  return (
    <>
      <Card
        shadow="sm"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-evenly items-start gap-4 px-4 py-3"
      >
        <AppTooltip content={project.id} closeDelay={3} className="max-w-xs">
          <div className="flex flex-col gap-0.5 items-start justify-start">
            <p className="text-neutral-400 font-semibold text-xs">{t("contractNo")}</p>
            <p className="font-normal line-clamp-2 text-small">{project.id}</p>
          </div>
        </AppTooltip>

        <AppTooltip content={project.id.split("-")[0]} closeDelay={3} className="max-w-xs">
          <div className="flex flex-col gap-0.5 items-start justify-start">
            <p className="text-neutral-400 font-semibold text-xs">{t("code")}</p>
            <p className="font-normal line-clamp-2 text-small">{project.id.split("-")[0]}</p>
          </div>
        </AppTooltip>

        <AppTooltip content={formatDate(yDay, locale)} closeDelay={3} className="max-w-xs">
          <div className="flex flex-col gap-0.5 items-start justify-start">
            <p className="text-neutral-400 font-semibold text-xs">{t("date")}</p>
            <p className="font-normal line-clamp-2 text-small">{formatDate(yDay, locale)}</p>
          </div>
        </AppTooltip>

        <AppTooltip content={project.owner} closeDelay={3} className="max-w-xs">
          <div className="flex flex-col gap-0.5 items-start justify-start">
            <p className="text-neutral-400 font-semibold text-xs">{t("owner")}</p>
            <p className="font-normal line-clamp-2 text-small">{project.owner}</p>
          </div>
        </AppTooltip>

        <AppTooltip content={project.studyEntity} closeDelay={3} className="max-w-xs">
          <div className="flex flex-col gap-0.5 items-start justify-start">
            <p className="text-neutral-400 font-semibold text-xs">{t("studyOrg")}</p>
            <p className="font-normal line-clamp-2 text-small">{project.studyEntity}</p>
          </div>
        </AppTooltip>

        <AppTooltip content={project.consultant} closeDelay={3} className="max-w-xs">
          <div className="flex flex-col gap-0.5 items-start justify-start">
            <p className="text-neutral-400 font-semibold text-xs">{t("consultant")}</p>
            <p className="font-normal line-clamp-2 text-small">{project.consultant}</p>
          </div>
        </AppTooltip>

        <AppTooltip content={project.contractor} closeDelay={3} className="max-w-xs">
          <div className="flex flex-col gap-0.5 items-start justify-start">
            <p className="text-neutral-400 font-semibold text-xs">{t("contractor")}</p>
            <p className="font-normal line-clamp-2 text-small">{project.contractor}</p>
          </div>
        </AppTooltip>

        <AppTooltip content={project.department} closeDelay={3} className="max-w-xs">
          <div className="flex flex-col gap-0.5 items-start justify-start">
            <p className="text-neutral-400 font-semibold text-xs">{t("department")}</p>
            <p className="font-normal line-clamp-2 text-small">{project.department}</p>
          </div>
        </AppTooltip>

        <AppTooltip content={project.type} closeDelay={3} className="max-w-xs">
          <div className="flex flex-col gap-0.5 items-start justify-start">
            <p className="text-neutral-400 font-semibold text-xs">{t("type")}</p>
            <p className="font-normal line-clamp-2 text-small">{project.type}</p>
          </div>
        </AppTooltip>
      </Card>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {cards.map((item, index) => (
          <Card key={index} className="w-full overflow-visible" shadow="sm">
            <AppTooltip content={item.title} className="max-w-xs text-small">
              <CardBody className="h-full w-full flex flex-row items-center overflow-visible py-0">
                <ProjectCardChart item={item} locale={locale} />
                <p className="text-start text-small line-clamp-3">{item.title}</p>
              </CardBody>
            </AppTooltip>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProjectFirstTab;
