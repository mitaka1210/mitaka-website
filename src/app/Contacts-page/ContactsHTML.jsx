"use client";

import React from "react";
import EmailHtml from "../Email-form/page";

const ContactsHtml = () => {
  return (
    <main className="bgr-gray">
      <section
        className="flex-vertical-container align-items-center justify-content-center maxWidthAndHeight add-height-section">
        <div className="add-position-relative text-align-center border-color-gray padding-10 round-behavior">
          <h2
            className="margin-15 flex-horizontal-container-raw justify-content-center align-items-center text-align-center">Свържете
            се <p className="color-orange-text margin-left-10 padding-0"> с мен!</p></h2>
          <div>
            <p className="margin-10">Ако искаш да се свържеш с мен и имаш въпроси, предложения или искаш да получиш
              консултация, можеш да ми пишеш, звъннеш, да използваш формата за контакт по-долу.</p>
            <p>Адрес: гр.Русе, ул Солун 41</p>
            <p
              className="flex-horizontal-container-raw justify-content-center align-items-center text-align-center small-devices">Имейл: <p
              className="color-orange-text margin-left-10 padding-0">dimitar_dimitrov12@mail.bg</p></p>
            <p
              className="flex-horizontal-container-raw justify-content-center align-items-center text-align-center small-devices">телефон:
              +359 823 42 42 344 - <p className="color-orange-text margin-left-10 padding-0">инж.Димитър Димитров</p>
            </p>
          </div>
        </div>
        <EmailHtml/>
      </section>
    </main>
  );
};

export default ContactsHtml;
