"use client";

import NextTopLoader from "nextjs-toploader";

export default function RouteProgress() {
  return (
    <NextTopLoader
      color="#b32025"
      height={3}
      showSpinner={false}
      crawl
      crawlSpeed={180}
      easing="ease"
      speed={500}
      shadow="none"
      zIndex={9999}
    />
  );
}