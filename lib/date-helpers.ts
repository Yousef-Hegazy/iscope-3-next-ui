import momentH from "moment-hijri";

export const formatDate = (date: momentH.Moment, locale?: string) => {
  const arabicDays: { [key: string]: string } = {
    Saturday: "السبت",
    Sunday: "الأحد",
    Monday: "الاثنين",
    Tuesday: "الثلاثاء",
    Wednesday: "الاربعاء",
    Thursday: "الخميس",
    Friday: "الجمعة",
  };
  const day = locale === "ar" ? arabicDays[date.format("dddd")] : date.format("dddd");
  const formatted = date.format(locale === "ar" ? "iYYYY-iMM-iDD هـ | YYYY-MM-DD م" : "YYYY-MM-DD | iYYYY-iMM-iDD");
  return `${day} ${formatted}`;
};
