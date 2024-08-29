"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

const ClientInitializers = () => {
  const { resolvedTheme } = useTheme();
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    if (resolvedTheme) {
      if (resolvedTheme.includes("dark")) document.documentElement.dataset.mode = "dark";
      else document.documentElement.dataset.mode = "";
    }
  }, [resolvedTheme]);

  // useEffect(() => {
  //   const handleStart = () => setLoading(true);
  //   const handleComplete = () => setLoading(false);

  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleComplete);
  //   router.events.on('routeChangeError', handleComplete);

  //   return () => {
  //     router.events.off('routeChangeStart', handleStart);
  //     router.events.off('routeChangeComplete', handleComplete);
  //     router.events.off('routeChangeError', handleComplete);
  //   };
  // }, [router]);

  return <div className="hidden"></div>;
};

export default ClientInitializers;
