'use client';
import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '@/store/likesSlice/likesSlice.js';
import { useTranslation } from 'react-i18next';
// import  Uploader  from 'uploader/image.js';
import {
 fetchSections,
} from '@/store/articlesSectionById/articlesSectionByIdSlice';

const ReadHtml = () => {
 const { t } = useTranslation();
 const searchParams = useSearchParams();
 const router = useRouter();
 const dispatch = useDispatch();
 const articlesInfo = useSelector((state) => state.articles.data);
 const status = useSelector((state) => state.sections.status);
 const articleSections = useSelector((state) => state.sections.data);
 const id = searchParams.get('id');

 useEffect(() => {
  if (status === 'idle') {
   dispatch(fetchSections(id));
  }
 }, [status, dispatch]);

 const goBack = () => {
  dispatch(resetState());
  router.push('/cardAquariums'); // Връщане назад с 1 стъпка в историята
 };
 return (
  <div className="read">
   <div>
    <div className="read-back-btn">
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
             onClick={goBack}>
      {t('back')}
     </button>
     {
      articlesInfo.map((article, index) => {
       if (article.id === Number(id)) {
        return (
         <div key={index}>
          <h1 className="read-title">{article.title}</h1>
         </div>
        );
       }
      })
     }
    </div>

   </div>
   <div className="article-image-container">
    {/*<img src={Uploader[0].url.src} alt="read" />*/}
   </div>
   {
    articleSections.map((section, index) => {
     return (
      <article key={index}>

       <div className="content-container">
        <h3>{section.title}</h3>
        <p className="article-content">{section.content}</p>
       </div>
      </article>);
    })
   }
  </div>
 );
};

export default ReadHtml;
