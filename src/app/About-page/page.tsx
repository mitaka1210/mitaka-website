'use client'

import React, {useEffect, useState} from 'react';
import AboutHtml from "@/app/About-page/AboutHTML";
import Navigation from "@/app/Navigation-component/navigation";
import './about.scss';
import {IMAGES} from "../../../assets/images/image";
import FooterHTML from "@/app/Footer-page/FooterHTML";

const AboutPage = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false)
  useEffect(() => {
    // const loadImage = (image: { id?: number; url: any; }) => {
    //   return new Promise((resolve, reject) => {
    //     const loadImg = new Image()
    //     loadImg.src = image.url
    //     // wait 2 seconds to simulate loading time
    //     loadImg.onload = () =>
    //       setTimeout(() => {
    //         resolve(image.url)
    //       }, 2000)
    //
    //     loadImg.onerror = err => reject(err)
    //   })
    // }
    //
    // Promise.all(IMAGES.map(image => loadImage(image)))
    //   .then(() => setImgsLoaded(true))
    //   .catch(err => console.log("Failed to load images", err))
  }, [])

  return (
    <>
      <main className="images">
        <div>
          <div className="about-page">
            <div
              className="nav-bar-about flex-vertical-container text-align-center justify-content-end align-items-center">
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
