"use client";

import React from "react";
import "./timeline.scss";
import Image from "next/image";
import geodesy from "../../../assets/images/tacheometer.png";
import aviation from "../../../assets/images/airport.png";
import coding from "../../../assets/images/coding.png";

const TimeLineHtml = () => {
  return (
    <div>
      <h2 className="text-align-center">Моят свят накратко!</h2>
      <div className="timeline">
        <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
          <div className="coding">
            <Image className="coding-icon" src={coding} alt="coding"/>
          </div>
          <div className="timeline__event__icon ">
            <i className="lni-cake"></i>
          </div>
          <div className="timeline__event__date">
            04-22-2021
          </div>
          <div className="timeline__event__content ">
            <h6>
              Програмиране
            </h6>
            <div className="timeline__event__description">
              <p>Реших да дам шанс на хобито си! С което се занимавам и до сега. </p>
            </div>
          </div>
        </div>
        <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div className="timeline__event__icon">
            <i className="lni-burger"></i>
          </div>
          <div className="timeline__event__date">
            25-08-2014
          </div>
          <div className="timeline__event__content">
            <h6 className="">
              Работех всичко и се занимавах с мойте хобита
            </h6>
            <div className="timeline__event__description">
              <p>Започнах да работя каквото има. Програмиране на майтап като хоби!</p>
            </div>
          </div>
        </div>
        <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
          <div className="aviation">
            <Image className="aviation-icon" src={aviation} alt="aviation"/>
          </div>
          <div className="timeline__event__icon">
            <i className="lni-slim"></i>
          </div>
          <div className="timeline__event__date">
            15-09-2010
          </div>
          <div className="timeline__event__content padding-15">
            <div className="">
              ВИСШЕ ВОЕННОВЪЗДУШНО УЧИЛИЩЕ "ГЕОРГИ БЕНКОВСКИ" - гр. Долна Митрополия
            </div>
            <div className="timeline__event__description">
              <p>Специалност: <strong className="margin-left-5">Автоматика, информационна и управляваща техника</strong>
              </p>
              <p>Професионална квалификация „Бакалавър-инженер”</p>
            </div>
          </div>
        </div>
        <div className="timeline__event animated fadeInUp timeline__event--type1">
          <div className="geodesy">
            <Image className="geodesy-icon" src={geodesy} alt="Express"/>
          </div>
          <div className="timeline__event__icon">
            <i className="lni-cake"></i>
          </div>
          <div className="timeline__event__date">
            01-06-2009
          </div>
          <div className="timeline__event__content padding-15">
            <div className="">
              ПГСАГ - ПРОФЕСИОНАЛНА ГИМНАЗИЯ ПО СТРОИТЕЛСТВО, АРХИТЕКТУРА И ГЕОДЕЗИЯ - гр. Шумен
            </div>
            <div className="timeline__event__description">
              <p>Специалност:<strong className="margin-left-5">Геодезия</strong></p>
              <p>
                <p>Професионална квалификация „Техник”</p>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TimeLineHtml;
