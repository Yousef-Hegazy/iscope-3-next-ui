export type DynamicNavType = "projects.underExecution" | "projects.archived";

export interface NavObject {
  title: string;
  route?: string;
  icon?: string;
  key?: DynamicNavType;
  children?: NavObject[];
}

export const getRoute = (locale: string, route: string) => `/${locale}/${route}`;

const navConfig: NavObject[] = [
  {
    title: "home",
    icon: "home",
    route: "dashboard",
  },
  {
    title: "projects",
    icon: "project-outlined",
    route: "dashboard/projects",
    children: [
      {
        title: "programs",
        icon: "program",
        route: "dashboard/programs",
      },
      {
        title: "portfolios",
        icon: "portfolio",
        route: "dashboard/portfolios",
      },

      {
        title: "projectsUnderExec",
        icon: "project-outlined",
        route: "dashboard/projects",
        key: "projects.underExecution",
      },

      {
        title: "achivedProjects",
        icon: "archive",
        route: "dashboard/projects/archived",
        key: "projects.archived",
      },
    ],
  },
  {
    title: "studies",
    icon: "open-book",
    route: "dashboard/studies",
    children: [
      {
        title: "studiesManagement",
        icon: "open-book",
        route: "dashboard/studies",
      },
    ],
  },
];

export default navConfig;
