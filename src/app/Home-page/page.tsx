'use client'
import "./home.scss";
import HomePageHTML from './HomePageHTML'
import Navigation from "@/app/Navigation-component/navigation";
import React, {useEffect, useState} from "react";
import LoaderHTML from "@/app/loader/LoaderHTML";

const HomePage = () => {
  let nextauth = localStorage.getItem("nextauth.message");
  let [showMenu, setShowMenu] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if (nextauth) {
        setShowMenu(false)
        console.log('pesho menu', showMenu);
      }
    }, 2000);
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
