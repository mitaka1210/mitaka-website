'use client'
import "./home.scss";
import React, {useEffect, useState} from "react";
import LoaderHTML from "@/app/loader/LoaderHTML";
import dynamic from "next/dynamic";

const HomePage = () => {
  const HomePageHTML = dynamic(
    () => import('./HomePageHTML'),
    {ssr: false}
  );
  const Navigation = dynamic(
    () => import('../Navigation-component/navigation'),
    {ssr: false}
  );
  let [showMenu, setShowMenu] = useState(true);
  if (typeof window !== 'undefined') {
    useEffect(() => {
      let nextauth = localStorage.getItem("nextauth.message");
      console.log('pesho1', nextauth);
      if (nextauth) {
        setShowMenu(false)
      } else {
        console.log('pesho2', nextauth);
        setTimeout(() => {
          console.log('pesho3', nextauth);
          setShowMenu(false)
        }, 3000);
      }
    }, [showMenu]);
  } else {
    useEffect(() => {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }, []);
  }

  return (
    <>
      {showMenu ? <LoaderHTML/> :
        <div>
          <div className="nav-bar-home flex-vertical-container text-align-center justify-content-end ">
            <Navigation/>
          </div>
          <HomePageHTML/>
        </div>}
    </>
  )
}

export default HomePage
