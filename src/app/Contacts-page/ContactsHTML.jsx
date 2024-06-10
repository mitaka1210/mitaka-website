'use client'

import React from "react";
import EmailHtml from '../Email-form/page';

const ContactsHtml = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7442db02-2b80-4edf-a366-dbd0ee20fd1f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }
  return (
    <main className="bgr-gray">
      <section className="flex-vertical-container align-items-center justify-content-center maxWidthAndHeight add-height-section">
        <div className="add-position-relative text-align-center border-color-gray padding-10 round-behavior">
          <h2
            className="margin-15 flex-horizontal-container-raw justify-content-center align-items-center text-align-center">Свържете
            се <p className='color-orange-text margin-left-10'> с мен!</p></h2>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus autem distinctio dolorem ea
              eligendi
              et
              ex excepturi facere facilis harum impedit incidunt laborum libero maiores quam, rem suscipit
              voluptatibus!</p>
            <p>Адрес: гр.Русе, ул Солун 41</p>
            <p>Имейл: dimitar_dimitrov12@mail.bg</p>
            <p>телефон: +359 823 42 42 344 - инж.Димитър Димитров</p>
          </div>
          {/*<form onSubmit={handleSubmit}>*/}
          {/*  <input type="text" name="name"/>*/}
          {/*  <input type="email" name="email"/>*/}
          {/*  <textarea name="message"></textarea>*/}
          {/*  <button type="submit">Submit Form</button>*/}
          {/*</form>*/}
        </div>
        <EmailHtml/>
      </section>
    </main>
  );
};

export default ContactsHtml;
