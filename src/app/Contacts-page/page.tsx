'use client'
import React from 'react';
import ContactsHtml from "@/app/Contacts-page/ContactsHTML";
import Navigation from "@/app/Navigation-component/navigation";
import FooterHtml from "@/app/Footer-page/FooterHTML";
import './contact.scss';


const Page = () => {
  return (
    <div className="contacts-page">
      <div className="contacts-nav flex-horizontal-container text-align-center justify-content-end align-items-center">
        <Navigation/>
      </div>
      <ContactsHtml />
      <FooterHtml/>
    </div>
  );
};

export default Page;
