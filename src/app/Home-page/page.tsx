'use client'
import "./home.scss";
import HomePageHTML from './HomePageHTML'
import Navigation from "@/app/Navigation-component/navigation";
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
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let nextauth = localStorage.getItem("nextauth.message");
      setTimeout(() => {
        if (nextauth) {
          setShowMenu(false)
          console.log('pesho menu', showMenu);
        }
      }, 1000);
    } else {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [showMenu]);

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
