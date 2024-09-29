import AppScrollShadow from "@/components/ui/AppScrollShadow";
import { unstable_setRequestLocale } from "next-intl/server";
import React, { ReactNode } from "react";

export default function DashboardLayout({
  children,
  quickActions,
  sidebar,
  topbar,
  params: { locale },
}: {
  children: ReactNode;
  topbar: ReactNode;
  sidebar: ReactNode;
  quickActions: ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      {topbar}
      <div className="relative flex flex-row flex-grow overflow-hidden h-full w-full">
        {sidebar}

        <div className="flex flex-col flex-1 overflow-hidden">
          {quickActions}

          <AppScrollShadow size={10} orientation="vertical" hideScrollBar className="flex-1">
            {children}
          </AppScrollShadow>
        </div>
      </div>
    </>
  );
}
