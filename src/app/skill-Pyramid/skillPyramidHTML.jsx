'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaDatabase, FaCloud } from 'react-icons/fa';
import './skillPyramid.scss';
import LoaderHTML from "@/app/loader/LoaderHTML";
import {useTranslation} from "react-i18next";
let lang = localStorage.getItem("i18nextLng");

const skills = [
    [{ name: 'HTML', category: 'old' }],
    [
        { name: 'CSS', category: 'old' },
        { name: 'JavaScript', category: 'old' },
    ],
    [
        { name: 'SCSS', category: 'old' },
        { name: 'ReactJS', category: 'old' },
        { name: 'AngularJS', category: 'old' }
    ],
    [
        { name: 'Gulp', category: 'old' },
        { name: 'Github', category: 'old' },
        { name: 'Angular', category: 'old' },
        { name: 'NextJS', category: 'new' },
    ],
    [
        { name: 'Redux', category: 'old' },
        { name: 'Express', category: 'old' },
        { name: 'Docker', category: 'new' },
        { name: 'RxJS', category: 'old' },
        { name: 'dbeaver', category: 'old' },
    ],
    [
        { name: 'Postman', category: 'old' },
        { name: 'PostgreSQL', category: 'new' },
        { name: 'RTK', category: 'old' },
        { name: 'Firebase', category: 'new' },
        { name: 'Vue - 2', category: 'new' },
        { name: '🤔💭', category: 'new' },
    ],
];

const skillDescriptions = {
    HTML: lang === 'bg' ? 'Основен език за изграждане на уеб страници.' : 'Basic language for building web pages.',
    CSS: lang === 'bg' ? 'Език за стилизиране на уеб страници.' : 'Language for styling web' +
' pages.',
    JavaScript: lang === 'bg' ? 'Основен език за уеб разработка.' : 'Primary language for' +
' web development.',
    React: lang === 'bg' ? 'Библиотека за изграждане на интерфейси.' :  'Library for building interfaces.',
    Angular: lang === 'bg' ? 'Фреймуърк за уеб приложения.' : 'Framework for web applications.',
    'Node.js': lang === 'bg' ? 'Сървърна среда за изпълнение на JavaScript.' : 'Server environment for running JavaScript.',
    Redux: lang === 'bg' ? 'Управление на състоянието в React.' : 'State management in React.',
    PostgreSQL: lang === 'bg' ? 'Релационна база данни с отворен код.' : 'Open-source relational database.',
    Docker: lang === 'bg' ? 'Контейнеризация на приложения.' : 'Application containerization.',
    RxJS: lang === 'bg' ? 'Библиотека за реактивно програмиране.' : 'Library for reactive programming.',
    NextJS: lang === 'bg' ? 'Фреймуърк за React с SSR и SSG.' :  'Framework for React with SSR and SSG.',
    Express: lang === 'bg' ?  'Минималистичен бекенд фреймуърк за Node.js.' : 'Minimalist backend framework for Node.js.',
    Firebase: lang === 'bg' ?  'Платформа за бекенд услуги от Google.' : 'Backend services platform by Google.',
    SCSS: lang === 'bg' ?  'Разширение на CSS с допълнителни възможности.' : 'Extension of CSS with additional features.',
    'AngularJS': lang === 'bg' ?  'Първата версия на Angular за уеб' +
        ' приложения.' : 'Task automation tool in web development.',
    Gulp: lang === 'bg' ?  'Инструмент за автоматизация на задачи в уеб' +
        ' разработката.' : 'Task automation tool in web development.',
    Github: lang === 'bg' ?  'Платформа за управление на кодови репозитории.' : 'Platform for code repository management.',
    Postman: lang === 'bg' ?  'Инструмент за тестване и разработка на' +
        ' API-та.' : 'Tool for API testing and development.',
    RTK: lang === 'bg' ?  'Redux Toolkit - подобрена версия на Redux.' : 'Redux Toolkit - an improved version of Redux.',
    'VueJS - 2': lang === 'bg' ?  'Втората версия на Vue.js за уеб' +
        ' разработка.' : 'The second version of Vue.js for web development.',
    dbeaver: lang === 'bg' ?  'Инструмент за управление на бази данни.' : 'Database management tool.',
    '🤔💭': lang === 'bg' ?  'Предстои да бъде открито! 😉' : 'To be discovered! 😉'
};

const services = [
    {
        title: 'Web Development',
        icon: <FaCode />,
        details: ['Frontend', 'Modern Frameworks', 'Responsive Design'],
    },
    {
        title: 'App Development',
        icon: <FaLaptopCode />,
        details: ['Cross-platform', 'PWA & Native', 'Performance Optimization'],
    },
    // {
    //     title: 'Database Management',
    //     icon: <FaDatabase />,
    //     details: ['SQL & NoSQL', 'Optimization', 'Data Security'],
    // },
    // {
    //     title: 'Cloud Solutions',
    //     icon: <FaCloud />,
    //     details: ['Deployment', 'Scalability', 'Serverless Architecture'],
    // },
];

export default function SkillPyramid() {
    const {t} = useTranslation();
    const [visibleRows, setVisibleRows] = useState(0);
    const [lan, setlan] = useState('bg');
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [showServices, setShowServices] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Симулираме зареждане (например от API или изображения)
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [lang]);
    useEffect(() => {
        let reduceInterval;
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const clientHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;

            const scrolledPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

            if (scrolledPercentage >= 10 && !hasTriggered) {
                setShowServices(true);
                setHasTriggered(true);
            }


            if (scrollTop === 0) {
                // Плавно намаляване до 1
                clearInterval(reduceInterval);
                reduceInterval = setInterval(() => {
                    setVisibleRows((prev) => {
                        if (prev > 1) return prev - 1;
                        clearInterval(reduceInterval);
                        return 1;
                    });
                }, 150); // Контролира скоростта на прибиране
            } else {
                clearInterval(reduceInterval);
                if (scrolledPercentage >= 3) {
                    setVisibleRows((prev) => (prev < skills.length ? prev + 1 : prev));
                } else if (scrollTop < lastScrollTop) {
                    setVisibleRows((prev) => Math.max(prev - 1, 1));
                }
            }

            setLastScrollTop(scrollTop);
        };
        setlan(lang);
        console.log("pesho", lang);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop, hasTriggered, lang]); // Добавям `hasTriggered`, за да
    // избегнем излишни обновявания
    if (loading) {
        return <LoaderHTML />;
    }
    const testClick = () => {
        let newLang  = localStorage.getItem("i18nextLng");
        lang = newLang
        console.log("pesho new", lang);
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
            <h2 className="">{t("mySkills")}</h2>

               <div  className="flex flex-col items-center">
                   {skills.slice(0, visibleRows).map((row, index) => (
                       <motion.div
                           key={index}
                           className="flex gap-4 mt-2"
                           initial={{ opacity: 0, y: -20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.6, delay: index * 0.2, ease: "easeInOut" }}
                       >
                           {row.map((skill) => (
                               <motion.div
                                   key={skill.name}
                                   className={`px-4 py-2 rounded-lg shadow-lg cursor-pointer transition-transform ${skill.category === 'old' ? 'bg-gray-500' : 'bg-blue-600'
                                   }`}
                                   whileHover={{ scale: 1.1 }}
                                   onClick={() => setSelectedSkill(skill.name)}
                               >
                                   {skill.name}
                               </motion.div>
                           ))}
                       </motion.div>
                   ))}
               </div>
               {selectedSkill && (
                   <motion.div
                       className="mt-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg w-1/2 text-center relative"
                       initial={{ opacity: 0, y: -10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.3 }}
                   >
                       <button
                           className="absolute top-2 right-2 bg-red-600 px-3 py-1 rounded-full text-sm"
                           onClick={() => setSelectedSkill(null)}
                       >
                           Затвори {lang}
                       </button>
                       <h2 className="text-lg font-bold">{selectedSkill}</h2>
                       <p className="mt-2 text-gray-300" onClick={testClick()}>
                           {skillDescriptions[selectedSkill]}
                       </p>
                   </motion.div>
               )}
            {/* Services Section */}
            {showServices && (
                <><h2 className="margin-top-45 remove-margin-bottom">{t("myServices")}</h2>
                    <div
                        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 services">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800 p-16 rounded-xl shadow-lg text-center flex flex-col items-center card"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                            >
                                <div className="text-4xl mb-4 text-blue-400">{service.icon}</div>
                                <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                                <ul className="text-gray-400">
                                    {service.details.map((detail, i) => (
                                        <li key={i} className="mb-1 change-font-size-li">&raquo; {detail}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
