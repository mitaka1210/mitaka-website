'use client'

// components/Nav.js
import Link from 'next/link';
import './nav.scss';
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n';
import HamburgerMenu from "@/app/HamburgerMenu-page/HamburgerMenuHTML";
import useWindowSize from "@/app/Helper-components/getWindowSize/windowSize";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const size = useWindowSize();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className='flex-horizontal-container justify-content-end align-items-center text-align-center'>
      {/*<button type="button" onClick={() => changeLanguage("en")}>*/}
      {/*  en*/}
      {/*</button>*/}
      {/*<button type="button" onClick={() => changeLanguage("bg")}>*/}
      {/*  bg*/}
      {/*</button>*/}
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
       ( size.width < 501) ? <div>
          <HamburgerMenu/>
        </div> : <ul className="navigation">
          <li className='text-1 color-white'>
            <Link href="/Home-page">Home</Link>
          </li>
          <li className='text-2 color-white'>
            <Link href="/About-page">About</Link>
          </li>
          <li className='text-3 color-white'>
            <Link href="/Blog-Page">Blog</Link>
          </li>
          <li className='text-4 color-white'>
            <Link href="/Projects-page">Project</Link>
          </li>
          <li className='text-5 color-white'>
            <Link href="/Skills-page">Skills</Link>
          </li>
          <li className='text-6 color-white'>
            <Link href="/Timeline-page">TimeLine</Link>
          </li>
          <li className='text-6 color-white'>
            <Link href="/Contacts-page">Contact</Link>
          </li>
        </ul>
      }
    </header>
  );
};

export default Navigation;
