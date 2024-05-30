'use client'

import React, {useEffect, useState} from 'react';
import AboutHtml from "@/app/About-page/AboutHTML";
import Navigation from "@/app/Navigation-component/navigation";
import './about.scss';
import LoadingPage from "@/app/loading";
import {IMAGES} from "../../../assets/images/image";

const AboutPage = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false)

  useEffect(() => {
    const loadImage = (image: { id?: number; url: any; }) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image.url
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url)
          }, 2000)

        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(IMAGES.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, [])

  return (
    <>
      <main className="images">
        {imgsLoaded ?  <div>
          <div className="about-page">
            <div
              className="nav-bar-about flex-vertical-container text-align-center justify-content-end align-items-center">
              <Navigation/>
            </div>
            <AboutHtml/>
          </div>
        </div> : <LoadingPage time={2} />}
      </main>
    </>
  )
  // const [showMenu, setShowMenu] = useState(true);
  // useEffect(() => {
  //   setTimeout( () => {
  //     setShowMenu(false)
  //     console.log('pesho', setShowMenu)
  //   },3000)
  // }, []);
  // return (
  //   <>
  //   {showMenu ? <LoadingPage time={2} /> : <div>
  //     <div className="about-page">
  //       <div
  //         className="nav-bar-about flex-vertical-container text-align-center justify-content-end align-items-center">
  //         <Navigation/>
  //       </div>
  //       <AboutHtml/>
  //     </div>
  //   </div>}
  //   </>
  // );
};

export default AboutPage;
