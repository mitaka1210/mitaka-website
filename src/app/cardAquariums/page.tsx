"use client";

import React from 'react';
import dynamic from "next/dynamic";
import './cardAquariums.scss';

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
      <CardAquariumsHtml/>
      <FooterHTML/>
    </div>
  );
};

export default Page;
