'use client'

import "./home.scss";
import HomePageHTML from './HomePageHTML'
import {useEffect} from "react";
import Typewriter from 'typewriter-effect';
export default function HomePage() {
  const words = ["Hello, World!", "Welcome to my website!", "This is a typewriter effect."];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  return (

    <>
      <HomePageHTML/>
    </>
  )
}
