'use client'
import React, {useEffect} from 'react';
import AboutPageHTML from "@/app/Auto-typed-text/AutoTypedText";
const HomePageHTML = (props) => {
  const  myName = 'Dimitar Dimitrov';
  return (
    <>
      <div className="main-container flex-vertical-container justify-content-center align-items-center text-align-center">
        <div className="my-name">
          {/*<h2 className="is">{t('welcome')}</h2>*/}
          <h2 className="main">{myName}</h2>
        </div>
        <div className='wrap-auto-text'>
          <div className='automation-text'>
            <AboutPageHTML text="My React App" delay={10}/>
          </div>
        </div>
      </div>


    </>
  )
};

export default HomePageHTML;
