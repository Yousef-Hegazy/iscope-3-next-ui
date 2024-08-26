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
    route: "",
  },
  {
    title: "projects.title",
    icon: "suitcase",
    route: "projects",
    children: [
      {
        title: "projects.underExecution",
        icon: "suitcase",
        route: "projects",
        key: "projects.underExecution",
      },
      {
        title: "projects.archived",
        icon: "archive",
        route: "projects/archived",
        key: "projects.archived",
        // children: [
        //   {
        //     title: "mainPage",
        //     icon: "main-page",
        //     route: "users/settings",
        //   },
        // ],
      },
    ],
  },
  {
    title: "studies.title",
    icon: "open-book",
    route: "studies",
    children: [
      {
        title: "studies.management",
        icon: "open-book",
        route: "studies",
      },
    ],
  },
];

export default navConfig;
