"use client";

import React, {useEffect} from 'react';
import dynamic from "next/dynamic";
import './cardAquariums.scss';
import CardAquariumsHTML from "@/app/cardAquariums/CardAquariumsHTML";

const CardAquariumsHtml = dynamic(
    () => import('./CardAquariumsHTML'),
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
        document.title = getLocalStorage === 'bg' ? 'Блог - Димитър Димитров' : 'Blog - Dimitar Dimitrov';
    }, [getLocalStorage])
  return (
    <div>
      <Navigation/>
      <CardAquariumsHTML/>
      <div className="fotter-css">
        <FooterHTML/>
      </div>
    </div>
  );
};

export default Page;
