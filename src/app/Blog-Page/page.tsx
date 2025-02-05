'use client'

import React, {useEffect, useState} from 'react';
import './blog.scss';
import dynamic from 'next/dynamic';



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
const Page = () => {

    const getLocalStorage = localStorage.getItem("i18nextLng");


    useEffect(() => {
        document.title = getLocalStorage === 'bg' ? 'Блог - Димитър Димитров' : 'Blog - Dimitar Dimitrov';
    }, [getLocalStorage])

    return (
     <>
         <div className="blog-page">
             <div
                 className="nav-bar-blog flex-vertical-container text-align-center justify-content-end ">
                 <Navigation/>
             </div>
             <BlogHtml/>
             <FooterHTML/>
         </div>
     </>
 );
};

export default Page;
