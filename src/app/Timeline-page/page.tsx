'use client'

import React, {useEffect} from 'react';
import dynamic from "next/dynamic";
const TimeLineHtml = dynamic(
    () => import('./TimeLineHTML'),
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
    const getLocalStorage = localStorage.getItem("i18nextLng");
    useEffect(() => {
        document.title = getLocalStorage === 'bg' ? 'Историята ми! - инж.Димитров' : 'Professional Skills' +
            ' - eng.Dimitrov';
    }, [getLocalStorage])
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
