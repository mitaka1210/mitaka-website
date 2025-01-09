'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import './about.scss';
import Head from 'next/head';
const AboutPage = () => {
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
