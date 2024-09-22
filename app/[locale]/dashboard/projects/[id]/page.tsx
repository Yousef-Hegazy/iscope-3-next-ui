import Icon from "@/components/ui/Icon";
import ProjectFirstTab from "@/components/projects/ProjectFirstTabServerSide";
import ProjectTabs from "@/components/projects/ProjectTabs";
import { Project } from "@/models/project";
import { Button, Divider } from "@nextui-org/react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import AvailableActions from "@/components/projects/AvailableActions";

const getProject = async (id: string, locale: string): Promise<Project | null> => {
  try {
    const host =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_HOST || "http://localhost:3000"
        : "https://iscope-3-next-ui.vercel.app";
    const res = await fetch(`${host}/api/projects/${id}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept-Language": locale,
      },
    });

    if (!res.ok)
      throw Error("Something went wrong", {
        cause: await res.json(),
      });

    return await res.json();
  } catch (error) {
    console.log("error from method", error);
    return null;
  }
};

const ProjectDetails = async ({ params: { id, locale } }: { params: { id: string; locale: string } }) => {
  try {
    const project = await getProject(id, locale);

    if (!project) {
      return notFound();
    }

    const t = await getTranslations("projects");

    return (
      <main className="flex flex-col flex-1 w-full h-full gap-3 p-4">
        <div className="flex flex-row items-center justify-between">
          <p>{project.name}</p>

          <div className="flex flex-row gap-2 items-center">
            <AvailableActions />

            <Button variant="light" isIconOnly size="sm" title="Calendar">
              <Icon icon="calendar" />
            </Button>

            <Button variant="light" isIconOnly size="sm" title="Settings">
              <Icon icon="settings" />
            </Button>

            <Button variant="light" isIconOnly size="sm" title="More">
              <Icon icon="more-vertical" />
            </Button>

            <Button
              variant="light"
              as={Link}
              href={`/${locale}/dashboard/projects`}
              isIconOnly
              size="sm"
              title="Go back"
            >
              <Icon icon={locale === "ar" ? "menu-arrow-left" : "menu-arrow-right"} />
            </Button>
          </div>
        </div>

        <Divider />

        <ProjectTabs project={project} locale={locale}>
          <ProjectFirstTab project={project} locale={locale} t={t} />
        </ProjectTabs>
      </main>
    );
  } catch (error) {
    console.log(error);
    return notFound();
  }
};

export default ProjectDetails;
