'use client';

import React from 'react';
import './blog.scss';
import dynamic from 'next/dynamic';

const Page = () => {
 const BlogHtml = dynamic(
  () => import('./BlogHTML'),
  { ssr: false },
 );
 const FooterHTML = dynamic(
  () => import('../Footer-page/page'),
  { ssr: false },
 );
 const Navigation = dynamic(
  () => import('../Navigation-component/navigation'),
  { ssr: false },
 );
 return (
  <div className="blog-page">
   <div
    className="nav-bar-blog flex-vertical-container text-align-center justify-content-end ">
    <Navigation />
   </div>
   <BlogHtml />
   <FooterHTML />
  </div>
 );
};

export default Page;
