'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './cardAquariums.scss';
import { useDispatch, useSelector } from 'react-redux';
import images from '../../../assets/images/image';
import { fetchArticles } from '@/store/getAllArticles/getAllArticlesSlice';

const CardAquariumsHTML = () => {
 const dispatch = useDispatch();
 const status = useSelector((state) => state.articles.status);
 const error = useSelector((state) => state.articles.error);
 useEffect(() => {
  articlesData();
 }, [status]);
 const router = useRouter();
 let cardInfo;
 const [showInfo, setShowInfo] = useState(false);
 let content;
 const articlesInfo = useSelector((state) => state.articles.data);
 const redirectPage = (header, content, date, time, images, todoId) => {
  // Добавете query parameters към URL
  router.push('/');
 };
 let img = images;
 const handleClick = (id) => {
  // const {id} = router.query;
  // Проверете дали използвате низове за query параметрите
  router.push('/ReadArticles' + `/?id=${id}`);
 };
 const handleClickShowText = (id) => {
  for (let i = 0; i < articlesInfo.length; i++) {
   if (id === articlesInfo[i].todoId) {
    setShowInfo( !showInfo);
   }
  }
 };
 const sections = [
  {
   backgroundImage: 'https://www.yankodesign.com/images/design_news/2019/07/desk-setups-that-maximize-productivity-part-2/Desk-Setup_12.jpg',
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
 let i = 0;

 const articlesData = () => {
  if (status === 'idle') {
   dispatch(fetchArticles());
  } else if (status === 'loading') {
   content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
   /* empty */
  } else if (status === 'failed') {
   content = <div>{error}</div>;
  }
 };
 return (
  <Suspense fallback={<div>Loading...</div>}>
   {
    articlesInfo.isLoading ?
     <div>Loading</div> :
     <div>
      <section
       className="flex flex-col  justify-center items-center ">
       <div
        className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
        <div>
         <h1>Animated images on hover</h1>
         <p className="text-balance">Hover over the
          images to see the animation.</p>
        </div>
       </div>

       <div className="flex flex-wrap mx-auto mt-6 border-t pt-12">
        {
         articlesInfo.map((article, index) => {
          return (
           <div className="blog-card">
            <div className="meta">
             <div className="photo" style={{ backgroundImage: `url(${sections[index]?.backgroundImage || img[7].url.src})` }}
             ></div>
             <ul className="details">
              <li className="author"><a href="#">{article.title}</a></li>
              <li className="date">Aug. 24, 2015</li>
              <li className="tags">
               <ul>
                <li><a href="#">{index}</a></li>
                <li><a href="#">Code</a></li>
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
               </ul>
              </li>
             </ul>
            </div>
            <div className="description">
             <h1>Learning to Code</h1>
             <h2>Opening a door to the future</h2>
             <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              eum dolorum architecto obcaecati enim dicta praesentium, quam
              nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
             <p className="read-more">
              <a href="#">Read More</a>
             </p>
            </div>
           </div>

          );
         })
        }

       </div>
      </section>

     </div>

   }
  </Suspense>
 );
};

export default CardAquariumsHTML;
