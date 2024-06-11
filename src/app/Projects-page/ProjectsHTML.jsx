'use client'

import React from 'react';
import './project.scss';
const ProjectsHtml = () => {
  return (
    <div className="flex-vertical-container text-align-center justify-content-center">
      <section className='start-programing flex-item'>
      <h2>Така започна всичко и още много.</h2>
      <div className="box-wrapper">
        <figure className="shape-box shape-box_half">
          <img
            src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt=""/>
          <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
          <figcaption>
            <div className="show-cont">
              <h3 className="card-no">01</h3>
              <h4 className="card-main-title">Weather App(PWA)</h4>
            </div>
            <p className="card-content">Приложение чрез което може да получавате информация за време. Нужно е само да
              въведете град. Може да бъде инсталирано на телефона.</p>
            <h5 className='margin-top-5 border-color-bottom-gray'>Технологий</h5>
            <ul className="card-content">
              <li>HTML</li>
              <li>SCSS</li>
              <li>JS</li>
              <li>Gulp</li>
              <li>Jekyll</li>
              <li>Figma</li>
            </ul>
            <div className='buttons-wrapper flex-horizontal-container justify-content-end text-align-center align-items-center'>
              <a href="https://gracious-goldstine-c11de1.netlify.app/" target='_blank' className="read-more-btn">Приложение</a>
              <a href="https://github.com/mitaka1210/PWA" target='_blank' className="read-more-btn">Код в GitHub</a>
            </div>
          </figcaption>
          <span className="after"></span>
        </figure>
        <figure className="shape-box shape-box_half">
          <img
            src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"/>
          <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
          <figcaption>
            <div className="show-cont">
              <h3 className="card-no">02</h3>
              <h4 className="card-main-title">React website</h4>
            </div>
            <p className="card-content">Страници с оформление направени с ReactJs and Figma. Адаптивен дизайн</p>
            <h5 className='margin-top-5 border-color-bottom-gray'>Технологий</h5>
            <ul className="card-content">
              <li>HTML</li>
              <li>SCSS</li>
              <li>JS</li>
              <li>ReactJS</li>
            </ul>
            <div
              className='buttons-wrapper flex-horizontal-container justify-content-end text-align-center align-items-center'>
              <a href="https://keen-volhard-2b8ec9.netlify.app/" target='_blank' className="read-more-btn">Приложение</a>
              <a href="https://github.com/mitaka1210/React-Website-1" target='_blank' className="read-more-btn">Код в GitHub</a>
            </div>
          </figcaption>
          <span className="after"></span>
        </figure>
        <figure className="shape-box shape-box_half">
          <img
            src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=757&q=80"
            alt='logo'/>
          <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
          <figcaption>
            <div className="show-cont">
              <h3 className="card-no">03</h3>
              <h4 className="card-main-title">React ToDo</h4>
            </div>
            <p className="card-content">Приложение с което можете да си записвате задачите и да го променяте. Адаптивен
              дизайн</p>
            <h5 className='margin-top-5 border-color-bottom-gray'>Технологий</h5>
            <ul className="card-content">
              <li>HTML</li>
              <li>SCSS</li>
              <li>JS</li>
              <li>ReactJS</li>
            </ul>
            <div
              className='buttons-wrapper flex-horizontal-container justify-content-end text-align-center align-items-center'>
              <a href="https://mitaka1210.github.io/To-Do-App/" target='_blank' className="read-more-btn">Приложение</a>
              <a href="https://github.com/mitaka1210/To-Do-App" target='_blank' className="read-more-btn">Код в GitHub</a>
            </div>
          </figcaption>
          <span className="after"></span>
        </figure>
        <figure className="shape-box shape-box_half">
          <img
            src="https://images.unsplash.com/photo-1534669740902-e09e38a6a29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
          <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
          <figcaption>
            <div className="show-cont">
              <h3 className="card-no">04</h3>
              <h4 className="card-main-title">React website</h4>
            </div>
            <p className="card-content">Страници с оформление направени с ReactJs and Figma. Адаптивен дизайн</p>
            <h5 className='margin-top-5 border-color-bottom-gray'>Технологий</h5>
            <ul className="card-content">
              <li>HTML</li>
              <li>SCSS</li>
              <li>JS</li>
              <li>ReactJS</li>
            </ul>
            <div
              className='buttons-wrapper flex-horizontal-container justify-content-end text-align-center align-items-center'>
              <a href="#" className="read-more-btn" target='_blank'>Приложение</a>
              <a href="#" className="read-more-btn" target='_blank'>Код в GitHub</a>
            </div>
          </figcaption>
          <span className="after"></span>
        </figure>
      </div>
      </section>
      <section className='upgrade-my-self flex-item'>
        <h2>Надграждам себе си!</h2>
        <div className="box-wrapper">
          <figure className="shape-box shape-box_half">
            <img
              src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt=""/>
          <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <figcaption>
              <div className="show-cont">
                <h3 className="card-no">05</h3>
                <h4 className="card-main-title">Невероятни обувки <span> (Начална страница)</span></h4>
              </div>
              <p className="card-content"> Начална страница на магазин за обувки</p>
              <h5 className='margin-top-5 border-color-bottom-gray'>Технологий</h5>
              <ul className="card-content">
                <li>HTML</li>
                <li>SCSS</li>
                <li>Figma</li>
              </ul>
              <div
                className='buttons-wrapper flex-horizontal-container justify-content-end text-align-center align-items-center'>
                <a href="https://mitaka1210.github.io/landingPages/" target='_blank' className="read-more-btn">Приложение</a>
                <a href="https://github.com/mitaka1210/landingPages" target='_blank' className="read-more-btn">Код в GitHub</a>
              </div>
            </figcaption>
            <span className="after"></span>
          </figure>
          <figure className="shape-box shape-box_half">
            <img
              src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80" alt='logo-6'/>
          <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <figcaption>
              <div className="show-cont">
                <h3 className="card-no">06</h3>
                <h4 className="card-main-title">Платежен лист (TypeScript)</h4>
              </div>
              <p className="card-content">Платежна страница направена с TS</p>
              <h5 className="margin-top-5 border-color-bottom-gray">Технологий</h5>
              <ul className="card-content">
                <li>HTML</li>
                <li>SCSS</li>
                <li>JS</li>
                <li>TypeScript</li>
              </ul>
              <div
                className="buttons-wrapper flex-horizontal-container justify-content-end text-align-center align-items-center">
                <a href="https://mitaka1210.github.io/paymentAppWithTypeScript/" target="_blank"
                   className="read-more-btn">Приложение</a>
                <a href="https://github.com/mitaka1210/paymentAppWithTypeScript" target="_blank" className="read-more-btn">Код в
                  GitHub</a>
              </div>
            </figcaption>
            <span className="after"></span>
          </figure>
          <figure className="shape-box shape-box_half">
            <img
              src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=757&q=80"
              alt="logo-7"/>
            <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
          <figcaption>
            <div className="show-cont">
              <h3 className="card-no">07</h3>
              <h4 className="card-main-title">Пица меню</h4>
            </div>
            <p className="card-content">Приложение с което можете да си записвате задачите и да го променяте. Адаптивен
              дизайн</p>
            <h5 className='margin-top-5 border-color-bottom-gray'>Технологий</h5>
            <ul className="card-content">
              <li>HTML</li>
              <li>SCSS</li>
              <li>JS</li>
              <li>ReactJS</li>
              <li>Material-UI</li>
              <li>Redux</li>
              <li>Styled-components</li>
            </ul>
            <div
              className='buttons-wrapper flex-horizontal-container justify-content-end text-align-center align-items-center'>
              <a href="#" className="read-more-btn" target='_blank'>Приложение</a>
              <a href="https://github.com/mitaka1210/react-pizza" target='_blank' className="read-more-btn">Код в GitHub</a>
            </div>
          </figcaption>
          <span className="after"></span>
        </figure>
          <figure className="shape-box shape-box_half">
            <img
              src="https://images.unsplash.com/photo-1534669740902-e09e38a6a29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt='logo-8'/>
            <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <figcaption>
              <div className="show-cont">
                <h3 className="card-no">08</h3>
                <h4 className="card-main-title">Електронен магазин</h4>
              </div>
              <p className="card-content">Страници с оформление направени с ReactJs and Figma. Адаптивен дизайн</p>
              <h5 className='margin-top-5 border-color-bottom-gray'>Технологий</h5>
              <ul className="card-content">
                <li>HTML</li>
                <li>SCSS</li>
                <li>JS</li>
                <li>ReactJS</li>
              </ul>
              <div
                className='buttons-wrapper flex-horizontal-container justify-content-end text-align-center align-items-center'>
                <a href="https://dazzling-joliot-4402f9.netlify.app/" target='_blank' className="read-more-btn">Приложение</a>
                <a href="https://github.com/mitaka1210/E-shopReactJS" target='_blank' className="read-more-btn">Код в GitHub</a>
              </div>
            </figcaption>
            <span className="after"></span>
          </figure>
        </div>
      </section>
      <section className="magic-novatio flex-vertical-container justify-content-center text-align-center">
        <h2>Продължавам да се развивам и надграждам себе си!</h2>
        <div className='flex-horizontal-container-raw text-align-center justify-content-center'>
          <p className='margin-10'>магията</p>
          <h2><q><strong className='novatio-header'>Новатио</strong></q></h2>
        </div>
        <div className="box-wrapper">
          <figure className="shape-box shape-box_half">
            <img
              src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="logo-9"/>
            <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <figcaption>
              <div className="show-cont">
                <h3 className="card-no">09</h3>
                <h4 className="card-main-title">Блог(PERN)</h4>
              </div>
              <p className="card-content">Приложение чрез което може да получавате информация за време. Нужно е само да
                въведете град. Може да бъде инсталирано на телефона.</p>
              <h5 className='margin-top-5 border-color-bottom-gray'>Технологий</h5>
              <ul className="card-content">
                <li>HTML</li>
                <li>SCSS</li>
                <li>ReactJS</li>
                <li>Redux(RTK)</li>
                <li>Express</li>
                <li>Docker</li>
                <li>DBeaver</li>
                <li>PostgreSQL</li>
              </ul>
              <div
                className='buttons-wrapper flex-horizontal-container justify-content-end text-align-center align-items-center'>
                <a href="https://github.com/mitaka1210/PERN" target='_blank' className="read-more-btn">Приложение</a>
              </div>
            </figcaption>
            <span className="after"></span>
          </figure>
          <figure className="shape-box shape-box_half">
            <img
              src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="logo-9"/>
            <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <figcaption>
              <div className="show-cont">
                <h3 className="card-no">10</h3>
                <h4 className="card-main-title">Новатио</h4>
              </div>
              <p className="card-content">Приложение чрез което може да получавате информация за време. Нужно е само да
                въведете град. Може да бъде инсталирано на телефона.</p>
              <h5 className='margin-top-5 border-color-bottom-gray'>Технологий</h5>
              <ul className="card-content">
                <li>HTML</li>
                <li>SCSS</li>
                <li>JS</li>
                <li>Angular</li>
                <li>VueJs</li>
                <li>RxJs</li>
              </ul>
              <div
                className='buttons-wrapper flex-horizontal-container justify-content-end text-align-center align-items-center'>
                <a href="https://novatiospace.com/industries/" target='_blank' className="read-more-btn">Приложение</a>
              </div>
            </figcaption>
            <span className="after"></span>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default ProjectsHtml;
