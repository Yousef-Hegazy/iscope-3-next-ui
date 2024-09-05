import Link from "next/link";
import React from "react";

const LandingPage = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <main className="p-4">
      <Link href={`/${locale}/dashboard`}>Go to dashboard</Link>
    </main>
  );
};

export default LandingPage;
