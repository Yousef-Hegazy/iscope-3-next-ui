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
    title: "title",
    icon: "home",
    route: "dashboard",
  },
  {
    title: "projects.title",
    icon: "suitcase",
    route: "dashboard/projects",
    children: [
      {
        title: "projects.underExecution",
        icon: "suitcase",
        route: "dashboard/projects",
        key: "projects.underExecution",
      },
      {
        title: "projects.archived",
        icon: "archive",
        route: "dashboard/projects/archived",
        key: "projects.archived",
      },
    ],
  },
  {
    title: "studies.title",
    icon: "open-book",
    route: "dashboard/studies",
    children: [
      {
        title: "studies.management",
        icon: "open-book",
        route: "dashboard/studies",
      },
    ],
  },
];

export default navConfig;
