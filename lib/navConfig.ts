export type DynamicNavType =
  | "projects.underExecution"
  | "projects.archived"
  | "projects.portfolios"
  | "projects.programs"
  | "studies.management"
  | "transactions.visits"
  | "transactions.requests"
  | "transactions.reports"
  | "transactions.extracts"
  | "relatedParties.contractors"
  | "relatedParties.supervisorCons"
  | "relatedParties.owners"
  | "relatedParties.studyAndDesign"
  | "relatedParties.qualityControlParties"
  | "relatedParties.departments"
  | "bi.biIntegration"
  | "bi.biTasks"
  | "bi.biVisualiztionSettings"
  | "bi.biReportSettings"
  | "reports.biReports"
  | "reports.reviewDocs"
  | "reports.attendanceAndDeparture";

export interface NavObject {
  title: string;
  route?: string;
  icon?: string;
  key?: DynamicNavType;
  children?: NavObject[];
  asSubLink?: boolean;
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
        route: "dashboard/projects",
        key: "projects.programs",
        asSubLink: true,
      },
      {
        title: "portfolios",
        icon: "portfolio",
        route: "dashboard/projects",
        key: "projects.portfolios",
        asSubLink: true,
      },
      {
        title: "underExecution",
        icon: "project-outlined",
        route: "dashboard/projects",
        key: "projects.underExecution",
      },

      {
        title: "archived",
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
        title: "management",
        icon: "open-book",
        route: "dashboard/studies",
        key: "studies.management",
        asSubLink: true,
      },
    ],
  },
  {
    title: "transactions",
    icon: "transactions",
    route: "dashboard/transactions",
    children: [
      {
        title: "visits",
        icon: "transactions",
        route: "dashboard/transactions",
        key: "transactions.visits",
        asSubLink: true,
      },
      {
        title: "requests",
        icon: "transactions",
        route: "dashboard/transactions",
        key: "transactions.requests",
        asSubLink: true,
      },
      {
        title: "reports",
        icon: "transactions",
        route: "dashboard/transactions",
        key: "transactions.reports",
        asSubLink: true,
      },
      {
        title: "extracts",
        icon: "transactions",
        route: "dashboard/transactions",
        key: "transactions.extracts",
        asSubLink: true,
      },
    ],
  },
  {
    title: "relatedParties",
    icon: "relationship",
    route: "dashboard/relatedParties",
    children: [
      {
        title: "contractors",
        icon: "relationship",
        route: "dashboard/relatedParties",
        key: "relatedParties.contractors",
        asSubLink: true,
      },
      {
        title: "supervisorCons",
        icon: "relationship",
        route: "dashboard/relatedParties",
        key: "relatedParties.supervisorCons",
        asSubLink: true,
      },
      {
        title: "owners",
        icon: "relationship",
        route: "dashboard/relatedParties",
        key: "relatedParties.owners",
        asSubLink: true,
      },
      {
        title: "studyAndDesign",
        icon: "relationship",
        route: "dashboard/relatedParties",
        key: "relatedParties.studyAndDesign",
        asSubLink: true,
      },
      {
        title: "qualityControlParties",
        icon: "relationship",
        route: "dashboard/relatedParties",
        key: "relatedParties.qualityControlParties",
        asSubLink: true,
      },
      {
        title: "departments",
        icon: "relationship",
        route: "dashboard/relatedParties",
        key: "relatedParties.departments",
        asSubLink: true,
      },
    ],
  },

  {
    title: "reports",
    icon: "reports",
    route: "dashboard/reports",
    children: [
      {
        title: "biReports",
        icon: "reports",
        route: "dashboard/reports",
        key: "reports.biReports",
        asSubLink: true,
      },
      {
        title: "reviewDocs",
        icon: "reports",
        route: "dashboard/reports",
        key: "reports.reviewDocs",
        asSubLink: true,
      },
      {
        title: "attendanceAndDeparture",
        icon: "reports",
        route: "dashboard/reports",
        key: "reports.attendanceAndDeparture",
        asSubLink: true,
      },
    ],
  },

  {
    title: "bi",
    icon: "bi",
    route: "dashboard/bi",
    children: [
      {
        title: "biIntegration",
        icon: "bi",
        route: "dashboard/bi",
        key: "bi.biIntegration",
        asSubLink: true,
      },
      {
        title: "biReportSettings",
        icon: "bi",
        route: "dashboard/bi",
        key: "bi.biReportSettings",
        asSubLink: true,
      },
      {
        title: "biVisualiztionSettings",
        icon: "bi",
        route: "dashboard/bi",
        key: "bi.biVisualiztionSettings",
        asSubLink: true,
      },
      {
        title: "biTasks",
        icon: "bi",
        route: "dashboard/bi",
        key: "bi.biTasks",
        asSubLink: true,
      },
    ],
  },
];

export default navConfig;
