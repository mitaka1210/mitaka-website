'use client';

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/navigation';
import './cardAquariums.scss';
import { useDispatch, useSelector } from 'react-redux';
import articleImg from '../../../assets/images/article-img.jpg'
import { fetchArticles } from '@/store/getArticles/getArticlesSlice';
import LoaderHTML from "@/app/loader/LoaderHTML";

const CardAquariumsHTML = () => {
 const { t } = useTranslation();
 const dispatch = useDispatch();
 const router = useRouter();
 const [loading, setLoading] = useState(true);

 const articlesInfo = useSelector((state) => state.articles.data || []);
 const status = useSelector((state) => state.articles.status);

 useEffect(() => {
  if (status === 'idle') {
   dispatch(fetchArticles());
  }
  if (status === 'succeeded') {
   setLoading(false);
  }
 }, [status, dispatch]);

 const handleClick = (id) => {
  router.push(`/ReadArticles/?id=${id}`);
 };

 if (loading) {
  return <LoaderHTML />;
 }

 return (
     <div>
      <section className="flex flex-col justify-center items-center add-scroll-aquarium-page">
       <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl mobile-devices-styles">
        <div className="flex-vertical-container-raw justify-center align-items-center">
         <h2 className="text-align-center">{t('underWaterMagic')}!</h2>
         <h4 className="text-align-center">{t('secretWorld')}.</h4>
        </div>
       </div>

       <div className="flex flex-wrap mx-auto mt-6 border-t pt-12">
        {articlesInfo.map((article, index) => (
            article?.status ? (
                <div className="blog-card margin-15" key={index}>
                 <div className="meta">
                  <div className="photo">
                   {/* eslint-disable-next-line react/jsx-no-undef */}
                   <Image
                       src="/assets/images/my-image.jpg"
                       alt="Описание на изображението"
                       width={500}
                       height={300}
                   />
                  </div>
                  <ul className="details">
                   <li className="author">
                    <a>{article.title?.substring(0, 60) || ''}....</a>
                   </li>
                   <li className="date">{article.create_article_date}</li>
                   <li className="tags">
                    <ul>
                     <li><a>{t('Support')}</a></li>,
                     <li><a>{t('Fish')}</a></li>,
                     <li><a>{t('Aquarium')}</a></li>
                    </ul>
                   </li>
                  </ul>
                 </div>
                 <div className="description">
                  <h1>{article.title}</h1>
                  <h2>Вашето ръководство за създаване и поддръжка на здрав и красив аквариум.</h2>
                  <span>
                    Аквариумите не са просто декорация, а живи екосистеми, които
                    внасят спокойствие и красота в дома. Те обаче изискват знания,
                    внимание и грижи. Ако мечтаете за аквариум, но не знаете откъде
                    да започнете, тази статия ще ви даде основни насоки.
                  </span>
                  <div className="flex-horizontal-container-raw justify-end">
                   <button onClick={() => handleClick(article.id)}>
                      <span className="read-more">
                        <a>Read More</a>
                      </span>
                   </button>
                  </div>
                 </div>
                </div>
            ) : null
        ))}
       </div>
      </section>
     </div>
 );
};

export default CardAquariumsHTML;