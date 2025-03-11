'use client';

import React, { Suspense, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './cardAquariums.scss';
import { useDispatch, useSelector } from 'react-redux';
import images from '../../../assets/images/image';
import { fetchArticles } from '@/store/getArticles/getArticlesSlice';
import { useTranslation } from 'react-i18next';
import {t} from "i18next";
import LoaderHTML from "@/app/loader/LoaderHTML";

const CardAquariumsHTML = () => {
 const dispatch = useDispatch();
setTimeout(() => {
 // const { t } = useTranslation();
},2000)
 const router = useRouter();
 const status = useSelector((state) => state.articles.status);
 useEffect(() => {
  if (status === 'idle') {
   dispatch(fetchArticles());
  }
 }, [status, dispatch]);
 const loading = useSelector((state) => state.articles);
 const articlesInfo = useSelector((state) => state.articles.data);
 let img = images;
 const handleClick = (id) => {
  console.log("pesho",id);
  // const {id} = router.query;
  // Проверете дали използвате низове за query параметрите
  router.push('/ReadArticles' + `/?id=${id}`);
 };
 const sections = [
  {
   backgroundImage: `${img[6].url.src}`,
   text: 'Immerse yourself in a seamless experience where every touchpoint anticipates your needs. Description one.',
   date: '2024-12-13',
  },
  {
   backgroundImage: 'https://i.pinimg.com/564x/34/65/b8/3465b890b11571e2c876ae74dc1b3139.jpg',
   text: 'Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive. Description two.',
   date: '2024-12-14',
  },
  {
   backgroundImage: 'https://i.pinimg.com/564x/33/d6/54/33d654e8058fdf69e160dcbd2235cdac.jpg',
   text: 'Discover our commitment to thoughtful design, prioritizing accessibility and user satisfaction. Description three.',
   date: '2024-12-15',
  },
  {
   backgroundImage: 'https://i.pinimg.com/564x/39/b8/01/39b801afe355e623bcb3928b1c1b046d.jpg',
   text: 'Experience innovation at every step, with forward-thinking solutions designed to enhance your daily interactions. Description four.',
   date: '2024-12-16',
  },
  {
   backgroundImage: 'https://i.pinimg.com/564x/2b/b5/48/2bb548dbf4a4c57381a7b7f736b4930b.jpg',
   text: 'Join us in embracing sustainability, where design and functionality meet eco-conscious decisions. Description five.',
   date: '2024-12-17',
  },
 ];
 return (
  <Suspense fallback={<div>Loading...</div>}>
   {
    loading.isLoading ?
        <LoaderHTML />:
     <div>
      <section
       className="flex flex-col  justify-center items-center  add-scroll-aquarium-page">
       <div
        className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl mobile-devices-styles">
        <div className="flex-vertical-container-raw justify-center align-items-center">
         <h4 className="text-align-center">"Подводна магия у дома: Всичко за
          аквариуми – от старта до тайните
          на професионалистите"</h4>
         <p className="text-balance">"Живот под стъклото: Тайният свят на
          аквариумите, който ще ви плени"</p>
        </div>
       </div>

       <div className="flex flex-wrap mx-auto mt-6 border-t pt-12">
        {
         articlesInfo.length > 0 ?
          (
           articlesInfo.map((article, index) => {
            return (
             <div key={index}>
              {article.status === true && articlesInfo.length > 0 ?
               <div className="blog-card margin-15" key={index}>
                <div className="meta">
                 <div className="photo" style={{ backgroundImage: `url(${sections[index]?.backgroundImage || img[7].url.src})` }}
                 ></div>
                 <ul className="details">
                  <li className="author">
                   <a>{article.title.substring(0, 60)}....</a></li>
                  <li className="date">{article.create_article_date}</li>
                  <li className="tags">
                   <ul>
                    <li><a>{t('Support')}</a></li>,
                    <li><a>{t('Fish')}</a></li>,
                    <li><a >{t('Aquarium')}</a></li>
                   </ul>
                  </li>
                 </ul>
                </div>
                <div className="description">
                 <h1>{article.title}</h1>
                 <h2>Вашето ръководство за създаване и поддръжка на здрав и
                  красив
                  аквариум.</h2>
                 <span>Аквариумите не са просто декорация, а живи екосистеми, които
                  внасят спокойствие и красота в дома. Те обаче изискват знания,
                  внимание и грижи. Ако мечтаете за аквариум, но не знаете
                  откъде
                  да започнете, тази статия ще ви даде основни насоки.</span>
                 <div className="flex-horizontal-container-raw justify-end">
                  <button onClick={() => handleClick(article.id)}>
                   <span className="read-more">
                    <a>Read More</a>
                   </span>
                  </button>
                 </div>
                </div>
               </div> :
               <div className="status-article-false"></div>
              }
             </div>
            );
           })
          ) : null
        }

       </div>
      </section>

     </div>

   }
  </Suspense>
 );
};

export default CardAquariumsHTML;
