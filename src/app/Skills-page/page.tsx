'use client'

import React from 'react';
import Navigation from "@/app/Navigation-component/navigation";
import FooterHtml from "@/app/Footer-page/FooterHTML";
import SkillPageHtml from "@/app/Skills-page/SkillPageHTML";
import './skill.scss';

const Page = () => {
  return (
    <div className="projects-page">
      <div className="skills-page flex-horizontal-container text-align-center justify-content-end align-items-center">
        <Navigation/>
      </div>
      <SkillPageHtml/>
      <FooterHtml/>
    </div>
  );
};

export default Page;
