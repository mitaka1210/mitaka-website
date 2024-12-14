"use client";

import React from 'react';
import dynamic from "next/dynamic";
import './cardAquariums.scss';
import CardAquariumsHTML from "@/app/cardAquariums/CardAquariumsHTML";

const Page = () => {
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
