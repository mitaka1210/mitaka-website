
'use client'
import React, {useEffect, useState} from 'react';
import RocketIcon from '@mui/icons-material/Rocket';
const AboutHtml = () => {
  const ScrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);
  // const img1 = require.context('../../../assets/images', true);
  return (
    <div className="about">
      <div className='about-me'>
        <h2 className="text-align-center">За мен</h2>
      </div>
      <section>
        <div className='my-hobbi'>
          <p className='about-me-text margin-15'>Здравейте, казвам се инж. Димитър Димитров и съм авиационен инженер. Но
            с времето се наложи да се преклалифицирам(не по-мое желание) в програмирането. По специално в Front-end частта.
            Страстен съм към различни хобита, включително лични финанси, аквариумистика, проекти с Arduino, разходки в
            природата, готварство, риболов, програмиране, четене и инвестиране.</p><p>
          Моите цели са да постигна финансова независимост и да стана качествен програмист.
          Известен съм със своята упоритост, говоря директно това което мисля и съм в готовност да помагам на
          другите.</p>
          <ul className='margin-15 text-align-justify'>
            <li className='margin-5'>
              <section>
                <details id="smooth">
                  <summary><h3>Лични финанси: Стремя се да постигна финансово грамотност и независимост.</h3></summary>
                  <div className="content">
                    <p>This detail element requires the use of the height and transition attributes to open smoothly.
                      The
                      downside to this is that it's less flexible since you must know how long the content will be in
                      order to
                      display content properly.</p>

                    <p>Max-height will only work for opening the collapsible, but not for closing it. Closure using
                      max-height
                      will cause the element to close mostly like the default version, but slightly collapse at the end.
                      This
                      is due to changes to the <code>&lt;slot&gt;</code> made when opening and closing the details.</p>
                    <p>The slot's inline styling is changed to include "content-visibility: hidden", which functions
                      similarly
                      to "display: none" in that it just removes the content from the layout and removes visibility.</p>

                    <p>Lastly, the slot belongs to the user-agent shadow DOM, and is seemingly unable to be targeted
                      using any
                      CSS selectors that target shadow DOM components. Need to do more research.
                    </p>
                  </div>
                </details>


              </section>
            </li>
            <li className='margin-5'>Аквариумистика: Обичам да се грижа за аквариумни риби и да създавам красиви
              подводни светове.
            </li>
            <li className='margin-5'>Arduino: Занимавам се с програмиране и изграждане на проекти с помощта на
              Arduino.
            </li>
            <li className='margin-5'>Разходки в природата: Природата е моето убежище, където намирам спокойствие и
              вдъхновение.
            </li>
            <li className='margin-5'>Кухня и готварство: Готвенето е мое страст и обичам да експериментирам с различни
              рецепти.
            </li>
            <li className='margin-5'>Риболов: Риболовът е една от моите любими активности на открито.</li>
            <li className='margin-5'>Програмиране: Непрекъснато се стремя да подобрявам уменията си в програмирането и
              да уча нови технологии.
            </li>
            <li className='margin-5'>Четене на книги: Книгите са неизменна част от моето ежедневие и обичам да се
              потапям в различни литературни светове.
            </li>
            <li className='margin-5'>Инвестиране: Инвестирането е важно за мен, тъй като ми помага да постигна
              финансовите си цели
            </li>
          </ul>
        </div>
        <div>
          <q>Единственият начин да се подобрите е да приемете провалa.</q>
        </div>


      </section>
      <section className="info-bout-me">
        <div className="box-1">
          <div className="overlay-box">
            <div className="desc flex-horizontal-container justify-content-center align-items-center text-align-center">
              <h3 className='margin-15'>Футбол</h3>
              <p>когато имам свободно време</p>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="overlay-box">
            <div className="desc flex-horizontal-container justify-content-center align-items-center text-align-center">
              <h3 className='margin-15'>Акваристът</h3>
              <p> С аквариумистика се занимавам от 14 години и по-сериозно се занимавам от 5 години. Запалих се по-нея
                защото има много неща който човек може сам да си направи.</p>
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
      <div className={`nav ${show && 'nav__blue'}`} onClick={ScrollToTop}>
        <RocketIcon/>
      </div>
    </div>
  );
};

export default AboutHtml;
