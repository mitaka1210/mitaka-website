"use client";

// components/Nav.js
import Link from "next/link";
import "./nav.scss";
import {useTranslation} from "react-i18next";
import HamburgerMenu from "@/app/HamburgerMenu-page/HamburgerMenuHTML";
import useWindowSize from "@/app/Helper-components/getWindowSize/windowSize";
import Appbar from "@/app/SignInButton/AppBar/AppBar";
import React from "react";
import i18n from "../../i18n";
import Header from "@/app/Lang/Lang";

const Navigation = () => {
  const {t} = useTranslation();
  const size = useWindowSize();
  const changeLang = lng => {
    i18n.changeLanguage(lng).then(r => {
    });
  };
  return (
    <header className="flex-horizontal-container justify-content-end text-align-center">
      <div className="my-logo">
        {/*<p href="#">Portfo<span>lio.</span></p>*/}
        {/*<div className="logo-images"></div>*/}
      </div>

      {/*!If we need to check screen size START*/}
      {/*<div className='color-white addP'>*/}
      {/*  {size.width}px / {size.height}px*/}
      {/*</div>*/}
      {/*!If we need to check screen size END*/}
      {
        (size.width < 501) ? <div>
          <HamburgerMenu/>
        </div> : <div className="maxWidthAndHeight justify-content-end flex-horizontal-container">
          <ul className="navigation">
            <li className="text-1 color-white margin-15">
              <Link href="/">{t("home")}</Link>
            </li>
            <li className="text-2 color-white margin-15">
              <Link href="/About-page">{t("about")}</Link>
            </li>
            <li className="text-3 color-white margin-15">
              <Link href="/Blog-Page">{t("blog")}</Link>
            </li>
            <li className="text-4 color-white margin-15">
              <Link href="/Projects-page">{t("project")}</Link>
            </li>
            <li className="text-5 color-white margin-15">
              <Link href="/Skills-page">{t("skills")}</Link>
            </li>
            <li className="text-6 color-white margin-15">
              <Link href="/Timeline-page">{t("timeLine")}</Link>
            </li>
            <li className="text-7 color-white margin-15">
              <Link href="/Contacts-page">{t("contact")}</Link>
            </li>
            <li className="text-8 color-white margin-15">
              <Appbar/>
            </li>
            <li className="text-9 color-white margin-15">
              <Header/>
            </li>
          </ul>
        </div>
      }
    </header>
  );
};

export default Navigation;
