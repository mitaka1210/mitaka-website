"use client";

import React from "react";
import "./timeline.scss";
import Image from "next/image";
import geodesy from "../../../assets/images/tacheometer.png";
import aviation from "../../../assets/images/airport.png";
import coding from "../../../assets/images/coding.png";
import {useTranslation} from "react-i18next";

const TimeLineHtml = () => {
  // imported lib
  const {t} = useTranslation();
  return (
    <div>
      <h2 className="text-align-center">{t("myWord")}!</h2>
      <div className="timeline">
        <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1 line-height-25 word-wrap">
          <div className="timeline__event__icon ">
            <Image className="coding-icon" src={coding} alt="coding"/>
          </div>
          <div className="timeline__event__date">
            04-22-2021
          </div>
          <div className="timeline__event__content ">
            <h6>
              {t("programing")}
            </h6>
            <div className="timeline__event__description">
              <p>{t("giveChance")}</p>
            </div>
          </div>
        </div>
        <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2 line-height-25 word-wrap">
          <div className="timeline__event__icon">
            <i className="lni-burger"></i>
          </div>
          <div className="timeline__event__date">
            25-08-2014
          </div>
          <div className="timeline__event__content">
            <h6 className="">
              {t("workAll")}
            </h6>
            <div className="timeline__event__description">
              <p>{t("startWorkingEverything")}!</p>
            </div>
          </div>
        </div>
        <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3 line-height-25 word-wrap">
          <div className="timeline__event__icon">
            <Image className="aviation-icon" src={aviation} alt="aviation"/>
          </div>
          <div className="timeline__event__date">
            15-09-2010
          </div>
          <div className="timeline__event__content padding-15">
            <div className="">
              {t("UNI")}
            </div>
            <div className="timeline__event__description">
              <p> {t("specialty")}: <strong className="margin-left-5"> {t("specification")}</strong>
              </p>
              <p> {t("qualification")} „{t("bachelor")}”</p>
            </div>
          </div>
        </div>
        <div className="timeline__event animated fadeInUp timeline__event--type1 line-height-25 word-wrap">
          <div className="timeline__event__icon">
            <Image className="geodesy-icon" src={geodesy} alt="Express"/>
          </div>
          <div className="timeline__event__date">
            01-06-2010
          </div>
          <div className="timeline__event__content padding-15">
            <div className="">
              {t("school")}
            </div>
            <div className="timeline__event__description">
              <p>{t("specialty")}:<strong className="margin-left-5">{t("geodesy")}</strong></p>
              <p>
                <p>{t("qualification")} „{t("technician")}”</p>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TimeLineHtml;
