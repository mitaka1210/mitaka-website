'use client'

import React from 'react';
import Navigation from "@/app/Navigation-component/navigation";
import FooterHtml from "@/app/Footer-page/FooterHTML";
import SkillPageHtml from "@/app/Skills-page/SkillPageHTML";
import './skill.scss';
import useWindowSize from "@/app/Helper-components/getWindowSize/windowSize";
import Appbar from "@/app/SignInButton/AppBar/AppBar";

const Page = () => {
  const size = useWindowSize();
  return (
    <div className="projects-page">
      <div className="skills-page flex-horizontal-container text-align-center justify-content-end align-items-center">
        <Navigation/>
      </div>
      <Appbar/>
      <SkillPageHtml size={size} />
      <FooterHtml/>
    </div>
  );
};

export default Page;
