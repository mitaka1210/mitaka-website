"use client";

import React from "react";
import EmailHtml from "../Email-form/page";
import {useTranslation} from "react-i18next";

const ContactsHtml = () => {
  const {t} = useTranslation();
  return (
    <main className="bgr-gray">
      <section
        className="flex-vertical-container align-items-center justify-content-center maxWidthAndHeight add-height-section">
        <div className="add-position-relative text-align-center border-color-gray padding-10 round-behavior">
          <div className="flex-horizontal-container justify-content-center">
            <h2 className="margin-10 flex-horizontal-container-raw justify-content-center align-items-center text-align-center change-header-font-size">{t("contactМе")}</h2>
            <h2 className="color-orange-text remove-margin-bottom margin-top-10 change-header-font-size"> {t("me")}!</h2>
          </div>
          <div>
            <span className="margin-10">{t("contactMe")}</span>
            <div className="flex-vertical-container">
            <span className="margin-10 special-text">С Вашата идея и моите знания може да направим нещо уникално заедно.</span>
              <span>{t("address")}: {t("streetAdd")}</span>
              <div className="flex-horizontal-container justify-content-center">
                <span className="flex-horizontal-container-raw justify-content-center align-items-center text-align-center small-devices">{t("email")}:
                </span>
                <span className="color-orange-text margin-left-10 padding-0">{t("yahoo")}</span>
              </div>
              <div className="flex-horizontal-container justify-content-center change-to-column">
                <span className="flex-horizontal-container-raw justify-content-center align-items-center text-align-center small-devices">{t("phone")}:
                  +359 88 49 42 399 -
                </span>
                <span className="color-orange-text  padding-0">{t("myName")}</span>
              </div>
            </div>
          </div>
        </div>
        <EmailHtml/>
      </section>
    </main>
  );
};

export default ContactsHtml;
