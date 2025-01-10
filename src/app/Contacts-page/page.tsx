'use client'
import React from 'react';
import './contact.scss';
import dynamic from "next/dynamic";
import LoaderHTML from "@/app/loader/LoaderHTML";


const Page = () => {
  const ContactsHtml = dynamic(
    () => import('./ContactsHTML'),
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
    <div className="contacts-page">
        {/*<LoaderHTML/>*/}
      <div className="contacts-nav flex-horizontal-container text-align-center justify-content-end align-items-center">
        <Navigation/>
      </div>
      <ContactsHtml/>
      <FooterHTML/>
    </div>
  );
};

export default Page;
