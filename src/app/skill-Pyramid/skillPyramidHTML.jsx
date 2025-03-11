'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaDatabase, FaCloud } from 'react-icons/fa';
import './skillPyramid.scss';
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
    HTML: 'Основен език за изграждане на уеб страници.',
    CSS: 'Език за стилизиране на уеб страници.',
    JavaScript: 'Основен език за уеб разработка.',
    React: 'Библиотека за изграждане на интерфейси.',
    Angular: 'Фреймуърк за уеб приложения.',
    'Node.js': 'Сървърна среда за изпълнение на JavaScript.',
    Redux: 'Управление на състоянието в React.',
    PostgreSQL: 'Релационна база данни с отворен код.',
    Docker: 'Контейнеризация на приложения.',
    RxJS: 'Библиотека за реактивно програмиране.',
    NextJS: 'Фреймуърк за React с SSR и SSG.',
    Express: 'Минималистичен бекенд фреймуърк за Node.js.',
    Firebase: 'Платформа за бекенд услуги от Google.',
    SCSS: 'Разширение на CSS с допълнителни възможности.',
    'AngularJS': 'Първата версия на Angular за уеб приложения.',
    Gulp: 'Инструмент за автоматизация на задачи в уеб разработката.',
    Github: 'Платформа за управление на кодови репозитории.',
    NestJS: 'Фреймуърк за създаване на сървърни приложения с TypeScript.',
    MongoDB: 'NoSQL база данни, базирана на документи.',
    Postman: 'Инструмент за тестване и разработка на API-та.',
    RTK: 'Redux Toolkit - подобрена версия на Redux.',
    'Vue - 2': 'Втората версия на Vue.js за уеб разработка.',
    dbeaver: 'Инструмент за управление на бази данни.',
    '🤔💭': 'Предстои да бъде открито! 😉'
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
    const [visibleRows, setVisibleRows] = useState(0);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [showServices, setShowServices] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollPosition = scrollTop + window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;
            const pageHeight = document.documentElement.scrollHeight;
            const clientHeight = window.innerHeight;
            const scrolledPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
            if (scrolledPercentage >= 20) {
                if (hasTriggered) return;
                else
                setShowServices(true);
                setHasTriggered(true);
            }

            if (scrollPosition >= pageHeight - 200) {
                setVisibleRows((prev) => Math.min(prev + 1, skills.length));
            } else if (scrollTop < lastScrollTop) {
                setVisibleRows((prev) => Math.max(prev - 1,1));
            }
            setLastScrollTop(scrollTop);
            console.log("pesho", scrollPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
            <h2 className="">Моите умения</h2>

               <div style={{height: 270+ 'px'}} className="flex flex-col items-center">
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
                           Затвори
                       </button>
                       <h2 className="text-lg font-bold">{selectedSkill}</h2>
                       <p className="mt-2 text-gray-300">
                           {skillDescriptions[selectedSkill]}
                       </p>
                   </motion.div>
               )}
            {/* Services Section */}
            {showServices && (
                <><h2 className="margin-top-45 remove-margin-bottom">Моите Услуги</h2>
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
