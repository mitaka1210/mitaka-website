'use client'

import React, {useEffect} from 'react';
import './skill.scss';
import useWindowSize from "@/app/Helper-components/getWindowSize/windowSize";
import dynamic from "next/dynamic";
const SkillPageHtml = dynamic(
    () => import('./SkillPageHTML'),
    {ssr: false}
);
const FooterHTML = dynamic(
    () => import('../Footer-page/page'),
    {ssr: false}
);
const Navigation = dynamic(
    () => import('../Navigation-component/navigation'),
    {ssr: false}
);
const Page = () => {
  const size = useWindowSize();

    const getLocalStorage = localStorage.getItem("i18nextLng");
    useEffect(() => {
        document.title = getLocalStorage === 'bg' ? 'Професионални умения - инж.Димитров' : 'Professional Skills' +
            ' - eng.Dimitrov';
    }, [getLocalStorage])
  return (
    <div className="projects-page">
      <div className="skills-page flex-horizontal-container text-align-center justify-content-end align-items-center">
        <Navigation/>
      </div>
      <SkillPageHtml size={size}/>
      <FooterHTML/>
    </div>
  );
};

export default Page;
