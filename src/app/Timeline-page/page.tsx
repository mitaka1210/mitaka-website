'use client'

import React from 'react';
import dynamic from "next/dynamic";

const Page = () => {
  const TimeLineHtml = dynamic(
    () => import('./TimeLineHtml'),
    {ssr: false}
  );
  const FooterHTML = dynamic(
    () => import('../Footer-page/FooterHTML'),
    {ssr: false}
  );
  const Navigation = dynamic(
    () => import('../Navigation-component/navigation'),
    {ssr: false}
  );
  return (
    <div className="timeline-page">
      <div className="timeline-nav flex-horizontal-container text-align-center justify-content-end align-items-center">
        <Navigation/>
      </div>
      <TimeLineHtml/>
      <FooterHTML/>
    </div>
  )
    ;
};

export default Page;
