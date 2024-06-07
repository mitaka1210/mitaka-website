'use client'

import React from 'react';
import TimeLineHtml from "@/app/Timeline-page/TimeLineHTML";
import Navigation from "@/app/Navigation-component/navigation";
import ProjectsHtml from "@/app/Projects-page/ProjectsHTML";
import FooterHtml from "@/app/Footer-page/page";

const Page = () => {
  return (
    <div className="timeline-page">
      <div className="timeline-nav flex-horizontal-container text-align-center justify-content-end align-items-center">
        <Navigation/>
      </div>
      <TimeLineHtml/>
      <FooterHtml/>
    </div>
)
  ;
};

export default Page;
