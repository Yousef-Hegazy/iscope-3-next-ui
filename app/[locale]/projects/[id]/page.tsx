import Icon from "@/components/Icon";
import ProjectTabs from "@/components/projects/ProjectTabs";
import { Project } from "@/models/project";
import { Button, Divider } from "@nextui-org/react";
import axios from "axios";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const getProject = async (id: string, locale: string): Promise<Project | null> => {
  try {
    const host = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000";
    const { data } = await axios.get(`${host}/api/projects/${id}`, {
      headers: {
        "Accept-Language": locale,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const ProjectDetails = async ({ params: { id, locale } }: { params: { id: string; locale: string } }) => {
  try {
    const project = await getProject(id, locale);

    return project ? (
      <div className="flex flex-col flex-1 w-full h-full gap-3 p-4">
        <div className="flex flex-row items-center justify-between">
          <p>{project.name}</p>

          <div className="flex flex-row gap-2 items-center">
            <Button variant="light" isIconOnly size="sm" title="Stack">
              <Icon icon="stack" />
            </Button>

            <Button variant="light" isIconOnly size="sm" title="Calendar">
              <Icon icon="calendar" />
            </Button>

            <Button variant="light" isIconOnly size="sm" title="Settings">
              <Icon icon="settings" />
            </Button>

            <Button variant="light" isIconOnly size="sm" title="More">
              <Icon icon="more-vertical" />
            </Button>

            <Button variant="light" as={Link} href={`/${locale}/projects`} isIconOnly size="sm" title="Go back">
              <Icon icon={locale === "ar" ? "menu-arrow-left" : "menu-arrow-right"} />
            </Button>
          </div>
        </div>

        <Divider />

        <ProjectTabs project={project} locale={locale} />
      </div>
    ) : (
      <div className="flex flex-1 w-full h-full items-center justify-center">Something went wrong</div>
    );
  } catch (error) {
    console.log(error);
    return <div className="flex flex-1 w-full h-full items-center justify-center">Something went wrong</div>;
  }
};

export default ProjectDetails;
