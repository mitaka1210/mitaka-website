'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '@/store/likesSlice/likesSlice.js';
import { useTranslation } from 'react-i18next'; // Импорт на useTranslation
import { fetchArticles } from '@/store/getArticles/getArticlesSlice';

const ReadHtml = () => {
  // Извикване на useTranslation тук
  const { t } = useTranslation();
  
  const router = useRouter();
  const dispatch = useDispatch();
  
  // Извикване на useSelector за информация за статията
  const articlesInfo = useSelector((state) => state.articles.data);
  const status = useSelector((state) => state.articles.status);
 
  // Извикване на useState за състоянието
  const [loading, setLoading] = useState(true);
  const [sectionArr, setSectionArr] = useState([]);
  const [data, setData] = useState();
  const [articleTitle, setArticleTitle] = useState('');

  // Hard-coded ID (можете да замените това с логика за получаване на параметър)
  let id = 3;
  console.log('pesho', id);

  // Извикване на useEffect за извличане на статии
  useEffect(() => {
    dispatch(fetchArticles()); // Зареждаме статии при първоначално рендериране
  }, [dispatch]);

  // Извикване на useEffect за обработка на данни след извличането на статиите
  useEffect(() => {
    if (status === 'succeeded' && articlesInfo.length > 0) {
      const sectionId = Number(id);
      const section = articlesInfo.find((s) => s.id === sectionId);

      if (section) {
        setArticleTitle(section.title);
        const mergedSections = section.sections.reduce((acc, curr) => {
          const existingSection = acc.find(sec => sec.position === curr.position);
          if (existingSection) {
            existingSection.content += `\n${curr.content}`;
          } else {
            acc.push({ ...curr });
          }
          return acc;
        }, []);

        setSectionArr(mergedSections);
        setLoading(false);
      }
    } else {
      setLoading(true);
    }
  }, [status, articlesInfo, id]); // Следим за статуса и информацията за статиите

  // Функция за връщане назад
  const goBack = () => {
    dispatch(resetState());
    router.push('/cardAquariums');
  };

  return (
    <>
      {loading ? (
        <div>{t('loading')}</div> 
      ) : (
        <div className="read">
          <div className="read-back-btn">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={goBack}
            >
              {t('back')} {/* Превод за бутона */}
            </button>
          </div>
          <section>
            <h1 className="read-title">{articleTitle}</h1>
            <div className="read-sections">
              {sectionArr.map((section, index) => (
                <div key={index} className="read-section">
                  <h2 className="read-section-title">{section.title}</h2>
                  <p className="read-section-text">{section.content}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ReadHtml;
