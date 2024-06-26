'use client'
import "./home.scss";
import HomePageHTML from './HomePageHTML'
import Navigation from "@/app/Navigation-component/navigation";
import React, {useEffect, useState} from "react";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowMenu(false)
    }, 2000)
  }, []);
  return (
    <>
      {showMenu ? '' : <div>
        <div className="nav-bar-home flex-vertical-container text-align-center justify-content-end ">
          <Navigation/>
        </div>
        <HomePageHTML/>
      </div>}
    </>
  )
}

export default HomePage
