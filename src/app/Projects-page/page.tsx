'use client'

import React from 'react';
import ProjectsHtml from "@/app/Projects-page/ProjectsHTML";
import FooterHtml from "@/app/Footer-page/FooterHTML";
import Navigation from "@/app/Navigation-component/navigation";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="projects-nav flex-horizontal-container text-align-center justify-content-end align-items-center">
      <Navigation/>
      </div>
      <ProjectsHtml/>
      <FooterHtml/>
    </div>
  );
};

export default ProjectsPage;
