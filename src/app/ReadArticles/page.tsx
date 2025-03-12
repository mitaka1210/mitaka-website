"use client";
import React from 'react';
import dynamic from "next/dynamic";
import './read.scss';

const Page = () => {
  const ReadHtml = dynamic(
    () => import('./ReadHTML'),
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
      <ReadHtml/>
      <FooterHTML/>
    </div>
  );
};

export default Page;
