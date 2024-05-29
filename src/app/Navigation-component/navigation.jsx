'use client'

// components/Nav.js
import Link from 'next/link';
import './nav.scss';

const Navigation = () => {
  return (
    <header>
      <div className="my-logo">
        <p href="#">Portfo<span>lio.</span></p>
        <div  className="logo-images"></div>
      </div>
      <ul className='navigation'>
        <li className='text-1 color-white'>
          <Link href="/Home-page">Home</Link>
        </li>
        <li className='text-2 color-white'>
          <Link href="/About-page">About</Link>
        </li>
        <li className='text-3 color-white'>
          <Link href="/Blog">Blog</Link>
        </li>
        <li className='text-4 color-white'>
          <Link href="/Project">Project</Link>
        </li>
        <li className='text-5 color-white'>
          <Link href="/Skills">Skills</Link>
        </li>
        <li className='text-6 color-white'>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
