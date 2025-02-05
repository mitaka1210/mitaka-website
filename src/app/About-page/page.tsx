'use client'

import React, {useEffect} from 'react';
import dynamic from 'next/dynamic';
import './about.scss';
const AboutHtml = dynamic(
    () => import('./AboutHTML'),
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
const AboutPage = () => {
  const getLocalStorage = localStorage.getItem("i18nextLng");
  useEffect(() => {
    document.title = getLocalStorage === 'bg' ? 'За мен - инж.Димитров' : 'About Me' +
        ' - eng.Dimitrov';
  }, [getLocalStorage])
  return (
    <>
      <main className="images">
        <div>
          <div className="about-page">
            <div
              className="nav-bar-about flex-vertical-container text-align-center justify-content-end ">
              <Navigation/>
            </div>
            <section>
              <main className='about-section'>
                <AboutHtml/>
              </main>
              <footer>
                <FooterHTML/>
              </footer>
            </section>
          </div>
        </div>
      </main>
    </>
  )

};

export default AboutPage;
