"use client";
import React, {forwardRef, useState} from "react";
import {accordian} from "@/content";
import withClickOutside from "../Helper-components/Click-outside/WithClickOutSide";
import ScrollTop from "@/app/Helper-components/scrollToTop/scrollTop";

const AboutHtml = forwardRef(({open, setOpen}, ref) => {
  const [active, setActive] = useState(-1);
  const [hideDiv, setHideDiv] = useState(true);
  const handleClick = (index) => {
    if (index === active) {
      setActive(-1);
      setHideDiv(true);
    } else {
      setActive(index);
      setHideDiv(false);
    }
  };
  const closeDiv = () => {
    if (!open && !hideDiv) {
      setActive(-1);
      setHideDiv(true);
    }
  };


  return (
    <div className="about">
      <div className="about-me">
        <h2 className="text-align-center">За мен</h2>
      </div>
      <section>

        <div className="my-hobbi" onClick={closeDiv}>
          <p className="about-me-text margin-15">Здравейте, казвам се Димитър Димитров и съм авиационен инженер. Но
            с времето се наложи да се преклалифицирам в моето хоби към този момент.Именно в програмирането и по
            специално в Front-end частта.
            Страстен съм към различни хобита,лични финанси, аквариумистика, проекти с Arduino, разходки в
            природата, готварство, риболов, програмиране, четене и инвестиране.</p>
          <p className="about-me-text"> Моите цели са да постигна финансова независимост и да стана качествен
            програмист.
            Известен съм със своята упоритост, говоря директно това което мисля и съм в готовност да помагам на
            другите.</p>
          <ul className=" text-align-justify accordian">
            {accordian.map((item, index) => {
              return (
                <div ref={ref}
                     className={"list-hobby flex-horizontal-container justify-content-center align-items-center text-align-center click-btn btn-style506" + " " + (index === active ? "add-height-click" : "")}
                     key={index}>
                  <li
                    onClick={() => {
                      handleClick(index), setOpen(!open);
                    }
                    }
                    className={index === active ? "active" : ""}
                  >
                    <div className="accordian-title">{item.title}</div>
                    <div className="accordian-content">
                      {item.paras.map((para, num) => {
                        return <p key={num}>{para}</p>;
                      })}
                      {item.showMore ? <a href="#">{item.showMore}</a> : ""}
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="text-align-center maxWidthAndHeight margin-bottom-30 my-motto">
          <h4>
            <q>Единственият начин да се подобрите е да приемете провалa.</q>
          </h4>
          <hr className="add-line-bottom"/>
        </div>
      </section>
      <div className="text-align-center my-focus"><h2>В момента съм фокусиран върху</h2></div>
      <section className="info-bout-me flex-horizontal-container">
        <div className="box-3">
          <div className="overlay-box round-behavior shadowed-element border-color-gray-2px">
            <div
              className="desc flex-vertical-container-raw justify-content-center align-items-center text-align-center">
              <h3 className="margin-15">Програмиране!</h3>
              <h2 className="margin-5">Всичко започна като хоби</h2>
              <p>С изучаването на новите технологий и сблъскването с много проблеми ми ставаше все по-интересно и
                по-любипитно. И започнах да се замислям да ли да не му дам шанс!</p>
            </div>
          </div>
        </div>
        <div className="box-1">
          <div className="overlay-box round-behavior shadowed-element border-color-gray-2px">
            <div
              className="desc flex-vertical-container-raw justify-content-center align-items-center text-align-center">
              <h3 className="margin-15">Развитие в сферата на личните финанси и изграждане на капитали.</h3>
              <p>Старая се всеки ден да отделям по 30мин да се образовам</p>
              <h2 className="margin-5">Както е казал <strong>Уорън Бъфет</strong></h2>
              <p className="margin-5">Правило №1: Никога не губете пари. Правило №2: Никога не забравяйте правило №1</p>
            </div>
          </div>
        </div>
        <div className="box-4">
          <div className="overlay-box round-behavior shadowed-element border-color-gray-2px">
            <div
              className="desc flex-vertical-container-raw justify-content-center align-items-center text-align-center">
              <h3 className="margin-15">Книги</h3>
              <p>Тук главен виновник е едно видео което ми показа какво са парите и как те трябва да работят за мен.
                Както е казал Робърт Кийосаки в неговата книга <strong className="motivation">"те са войници които
                  трябва да се бият за мен докато аз спа и да печелят"</strong></p>
            </div>
          </div>
        </div>
      </section>
      <ScrollTop/>
    </div>
  );
});

export default withClickOutside(AboutHtml);
