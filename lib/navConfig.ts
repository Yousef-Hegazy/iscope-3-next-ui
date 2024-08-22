export interface NavObject {
  title: string;
  route?: string;
  icon?: string;
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
      },
      {
        title: "users.settings",
        icon: "settings-solid",
        route: "users/settings",
        children: [
          {
            title: "mainPage",
            icon: "main-page",
            route: "users/settings",
          },
        ],
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
