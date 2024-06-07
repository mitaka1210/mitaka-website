'use client'

import React from "react";
import './timeline.scss'
const TimeLineHtml = () => {
  return (
    <div>
      <h2 className='time-line-header'>A clean timeline design, with animated links</h2>
      <div className="timeline">
        <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
          <div className="timeline__event__icon ">
            <i className="lni-cake"></i>

          </div>
          <div className="timeline__event__date">
            20-08-2019
          </div>
          <div className="timeline__event__content ">
            <div className="timeline__event__title">
              Birthday
            </div>
            <div className="timeline__event__description">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab
                asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum
                quidem dolorem in!</p>
            </div>
          </div>
        </div>
        <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div className="timeline__event__icon">
            <i className="lni-burger"></i>

          </div>
          <div className="timeline__event__date">
            20-08-2019
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">
              Lunch
            </div>
            <div className="timeline__event__description">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab
                asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum
                quidem dolorem in!</p>
            </div>
          </div>
        </div>
        <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
          <div className="timeline__event__icon">
            <i className="lni-slim"></i>

          </div>
          <div className="timeline__event__date">
            20-08-2019
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">
              Exercise
            </div>
            <div className="timeline__event__description">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab
                asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum
                quidem dolorem in!</p>
            </div>

          </div>
        </div>
        <div className="timeline__event animated fadeInUp timeline__event--type1">
          <div className="timeline__event__icon">
            <i className="lni-cake"></i>

          </div>
          <div className="timeline__event__date">
            20-08-2019
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">
              Birthday
            </div>
            <div className="timeline__event__description">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab
                asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum
                quidem dolorem in!</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TimeLineHtml;
