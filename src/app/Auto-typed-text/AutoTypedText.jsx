
'use client'
import React, {useEffect, useState,useRef} from 'react';
import Typed from "typed.js";
import './auto-type.scss'
const AutoTypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ "Develop.", "Aquarist", "Design.", "Freelancer", "Aviation engineer" ],
      typeSpeed: 150,
      loop: true,
      loopCount: Infinity,
      cursorChar: "|"
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <h4>
        {" "}
        And i'am a <span className="who-am-i" ref={el} />{" "}
      </h4>
    </div>
  );
};

export default AutoTypedText;
