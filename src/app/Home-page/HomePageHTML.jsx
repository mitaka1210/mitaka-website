'use client'
import React from 'react';
const HomePageHTML = (props) => {
  const  myName = 'Dimitar Dimitrov';
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 250 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };
  window.onload = function () {
      var elements = document.getElementsByClassName("typewrite");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };
  return (
    <>
      <div className="main-container">
        <div className="my-name flex-horizontal-container justify-content-center align-items-center maxWidthAndHeight">
          <h2 className="is">Hello, my name is</h2>
          <h2 className="main">{myName}</h2>
        </div>
        <div className='automation-text'>

          <div className="flex-vertical-container align-items-center "><p className='text-main'>And</p></div>
          <div className='second'>
            <a href="" className="typewrite" data-period="2000"
               data-type='[ "I Love to Develop.", "I am Aquarist", "I Love Design.", "I am Freelancer", "I am Aviation engineer" ]'>
              <span className="wrap"></span>
            </a>
          </div>
        </div>
      </div>

    </>
  )
};

export default HomePageHTML;
