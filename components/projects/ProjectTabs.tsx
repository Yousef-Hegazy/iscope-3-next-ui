"use client";

import { Project } from "@/models/project";
import { Tab, Tabs } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import Icon from "../ui/Icon";

const ProjectTabs = ({ project, locale, children }: { project: Project; locale: string; children: ReactNode }) => {
  const t = useTranslations("projects");

  return (
    <Tabs
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
            <p>{t("mainData")}</p>
          </div>
        }
      >
        <div className="flex flex-col gap-3">
          {children}

          <div className="w-full h-full shadow-small rounded-small bg-white-100/40 backdrop-blur-lg">
            <Tabs
              variant="underlined"
              classNames={{
                base: "w-full border-b-1 border-neutral-200",
                panel: "px-4",
                tabList: "w-full justify-evenly pb-0",
              }}
            >
              <Tab key="financial-record" title={t("financialRecord")}>
                <p>Financial record</p>
              </Tab>
              <Tab key="duration-record" title={t("durationRecord")}>
                <p>Durations record</p>
              </Tab>
              <Tab key="date-record" title={t("datesRecord")}>
                <p>Date record</p>
              </Tab>
              <Tab key="externalDepsRefNo-record" title={t("externalDepsRefNo")}>
                <p>External Departments Reference Number</p>
              </Tab>
              <Tab key="timeline" title={t("timeline")}>
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
            <p>{t("timeline")}</p>
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
            <p>{t("requests")}</p>
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
            <p>{t("reports")}</p>
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
            <p>{t("visits")}</p>
          </div>
        }
      >
        <p>Visits</p>
      </Tab>
    </Tabs>
  );
};

export default ProjectTabs;
