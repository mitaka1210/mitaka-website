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
  const [progress, setProgress] = useState(0);
  const [showNext, setShowNext] = useState(false);

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
        progressArticle();
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
const progressArticle = () => {
  const handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progressValue = (scrollTop / scrollHeight) * 100;
    setProgress(progressValue);
    setShowNext(progressValue > 90);
};

window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}
  return (
    <>
      {loading ? (
        <div>{t('loading')}</div> 
      ) : (
        <div className="read" style={{ fontFamily: "Arial, sans-serif", background: "linear-gradient(to bottom, #006994, #003f5c)", minHeight: "100vh", padding: "20px" }}>
           <div className="progress-container" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "4px", background: "#ddd", zIndex: 1000 }}>
                <div className="progress-bar" style={{ height: "4px", background: "#ffcc00", width: `${progress}%`, transition: "width 0.3s ease-in-out" }}></div>
            </div>
          <div className="read-back-btn">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={goBack}
            >
              {t('back')} {/* Превод за бутона */}
            </button>
          </div>
          <section>
            <h2 className="read-title text-align-center">{articleTitle}</h2>
            <hr className='add-line-after-header'/>
            <div className="read-sections" style={{ maxWidth: "800px", margin: "50px auto", background: "rgba(255, 255, 255, 0.3)", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", backdropFilter: "blur(10px)" }}>
              {sectionArr.map((section, index) => (
                <div key={index} className="read-section">
                  <h2 className="read-section-title" style={{ fontSize: "28px", textAlign: "center", color: "#fff" }}>{index + 1}.{section.title}</h2>
                  <span className="read-section-text">{section.content}</span>
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
