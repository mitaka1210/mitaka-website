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
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const storedLang  = localStorage.getItem("i18nextLng") || 'en'; // Достъп до localStorage само в браузъра
        setLanguage(storedLang);
        document.title = storedLang === 'bg' ? 'Блог - Димитър Димитров' : 'Blog - Dimitar Dimitrov';
    }, []);

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
