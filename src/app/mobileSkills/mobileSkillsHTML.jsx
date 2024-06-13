import React from "react";
import './mobile.scss';
import Slider from 'react-slick';
const MobileSkillsHtml = () => {
  const imgs = [
    'html',
    'css',
    'docker',
    'grunt',
    'reactjs',
    'angular',
    'angularjs',
    'scss',
    'reactjs',
    'postman',
    'redux(RTK)',
    'dbeaver',
    'postgreSQL',
    'github',
    'express',
    'javascript',
    'nodejs',
    'jekyll',
    'rxjs',
  ];
  const settings = {
    centerMode: true,
    className: "slider variable-width, center",
    centerPadding: '10px',
    slidesToShow: 0,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    variableWidth: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      }
    ],
  };

  const renderSlides = imgs.map((num) => (
    <div className="trending-img card" key={num}   style={{ width: 350 }}>{num}</div>
  ));
  return(
    <>
      <div className="cards-preview">
            <Slider {...settings}>{renderSlides}</Slider>
      </div>
    </>
  )
};

export default MobileSkillsHtml;
