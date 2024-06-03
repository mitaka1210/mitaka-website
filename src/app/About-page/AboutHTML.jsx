
'use client'
import React, {useEffect, useState, useRef} from 'react';
import RocketIcon from '@mui/icons-material/Rocket';
import {accordian} from '@/content'
import ScrollTop from "@/helpMetods/scrollTop";
const AboutHtml = () => {
  const [active, setActive] = useState(-1);
  const handleClick = (index) => {
    if (index === active) setActive(-1);
    else setActive(index);
  };

  return (
    <div className="about">
      <div className='about-me'>
        <h2 className="text-align-center">За мен</h2>
      </div>
      <section>

        <div className='my-hobbi'>
          <p className='about-me-text margin-15'>Здравейте, казвам се Димитър Димитров и съм авиационен инженер. Но
            с времето се наложи да се преклалифицирам в моето хоби към този момент.Именно в програмирането и по специално в Front-end частта.
            Страстен съм към различни хобита,лични финанси, аквариумистика, проекти с Arduino, разходки в
            природата, готварство, риболов, програмиране, четене и инвестиране.</p><p>
          Моите цели са да постигна финансова независимост и да стана качествен програмист.
          Известен съм със своята упоритост, говоря директно това което мисля и съм в готовност да помагам на
          другите.</p>
          <ul className='margin-15 text-align-justify accordian'>
            {accordian.map((item, index) => {
              return (
                <div className={'list-hobby margin-20 click-btn btn-style506' + ' ' +  (index === active ? 'add-height-click' : '')} key={index}>
                  <li
                    onClick={() => handleClick(index)
                    }
                    className={index === active ? 'active' : ''}
                  >
                    <div className="accordian-title">{item.title}</div>
                    <div className="accordian-content">
                      {item.paras.map((para,num) => {
                        return <p  key={num}>{para}</p>;
                      })}
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className='text-align-center maxWidthAndHeight margin-bottom-30'>
          <h4>
            <q>Единственият начин да се подобрите е да приемете провалa.</q>
          </h4>
          <hr className='add-line-bottom'/>
        </div>
      </section>
      <div className='text-align-center'><h2>В момента съм фокусиран върху</h2></div>
      <section className="info-bout-me flex-h">
        <div className="box-1">
          <div className="overlay-box">
            <div className="desc flex-horizontal-container justify-content-center align-items-center text-align-center">
              <h3 className='margin-15'>Развитие в сферата на личните финанси и изграждане на капитали.</h3>
              <p>когато имам свободно време</p>
            </div>
          </div>
        </div>
        <div className="box-3">
          <div className="overlay-box">
            <div className="desc flex-horizontal-container justify-content-center align-items-center text-align-center">
              <h3 className='margin-15'>Програмиране!</h3>
              <h2 className='margin-5'>Всичко започна като хоби</h2>
              <p>С изучаването на новите технологий и сблъскването с много проблеми ми ставаше все по-интересно и
                по-любипитно. И започнах да се замислям да ли да не му дам шанс!</p>
            </div>
          </div>
        </div>
        <div className="box-4">
          <div className="overlay-box">
            <div className="desc flex-horizontal-container justify-content-center align-items-center text-align-center">
              <h3 className='margin-15'>Книги</h3>
              <p>Тук главен виновник е едно видео което ми показа какво са парите и как те трябва да работят за мен.
                Както е казал Робърт Кийосаки в неговата книга <strong className='motivation'>"те са войници които
                  трябва да се бият за мен докато аз спа и да печелят"</strong></p>
            </div>
          </div>
        </div>
      </section>
      <ScrollTop/>
    </div>
  );
};

// export function scrollTop(){
//   const [active, setActive] = useState(-1);
//   const [show, setShow] = useState(false);
//
//   const ScrollToTop = () =>{
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   }
//
//   return ScrollToTop;
// }

// export const scrollTop2 = (index) =>{
//   const [active, setActive] = useState(-1);
//   const handleClick = (index) => {
//     if (index === active) setActive(-1);
//     else setActive(index);
//   };
//
//   return handleClick;
// }

export default AboutHtml;
