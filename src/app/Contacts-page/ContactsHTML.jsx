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
          <h2
            className="margin-15 flex-horizontal-container-raw justify-content-center align-items-center text-align-center">{t("contactМе")}
            <p className="color-orange-text margin-left-10 padding-0"> {t("me")}!</p></h2>
          <div>
            <p className="margin-10">{t("contactMe")}.</p>
            <p>{t("address")}: {t("streetAdd")}</p>
            <p
              className="flex-horizontal-container-raw justify-content-center align-items-center text-align-center small-devices">{t("email")}: <p
              className="color-orange-text margin-left-10 padding-0">{t("yahoo")}</p></p>
            <p
              className="flex-horizontal-container-raw justify-content-center align-items-center text-align-center small-devices">{t("phone")}:
              +359 88 49 42 399 - <p className="color-orange-text margin-left-10 padding-0">{t("myName")}</p>
            </p>
          </div>
        </div>
        <EmailHtml/>
      </section>
    </main>
  );
};

export default ContactsHtml;
