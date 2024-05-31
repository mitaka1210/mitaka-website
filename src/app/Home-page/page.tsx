'use client'
import "./home.scss";
import HomePageHTML from './HomePageHTML'
import Navigation from "@/app/Navigation-component/navigation";
import React, {useEffect, useState} from "react";
import LoadingPage from "@/app/loading";

const  HomePage = () =>{
  const [showMenu, setShowMenu] = useState(true);
  useEffect(() => {
  setTimeout( () => {
    setShowMenu(false)
    console.log('pesho', setShowMenu)
  },2000)
  }, []);
  return (
    <>
      {showMenu ?  <LoadingPage time={2} /> : <div>
        <div className="nav-bar-home flex-vertical-container text-align-center justify-content-end align-items-center">
          <Navigation/>
        </div>
        <HomePageHTML/>
      </div>}
    </>
  )
}

export default HomePage
