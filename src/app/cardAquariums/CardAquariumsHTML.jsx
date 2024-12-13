"use client";

import React, {Suspense, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import "./cardAquariums.scss";
import {useDispatch, useSelector} from "react-redux";

import {
    fetchArticles
} from "@/store/getAllArticles/getAllArticlesSlice";

const CardAquariumsHTML = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.articles.status);
    const error = useSelector((state) => state.articles.error);
    useEffect(() => {
        articlesData();
    }, [status]);
    const router = useRouter();
    let cardInfo;const [showInfo, setShowInfo] = useState(false);
    let content;
    const articlesInfo = useSelector((state) => state.articles.data);
    const redirectPage = (header, content, date, time, images, todoId) => {
        // Добавете query parameters към URL
        router.push("/");
    };
    const handleClick = (id) => {
        // const {id} = router.query;
        // Проверете дали използвате низове за query параметрите
        router.push("/ReadArticles" + `/?id=${id}`);
    };
    const handleClickShowText = (id) => {
        for (let i = 0; i < articlesInfo.length; i++) {
            if (id === articlesInfo[i].todoId) {
                setShowInfo(!showInfo);
            }
        }
    };
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
            <div
                className="height-auto flex-horizontal-container justify-content-space-evenly align-items-center flex-flow-row">
                {
                    articlesInfo.map((card, index) => {
                        return <div className="flex-item card-main">
                            <div className="py-4">
                                <div
                                    className="shadow-lg group container rounded-md bg-white  max-w-sm flex justify-center flex-vertical-container-raw items-center mx-auto content-div">
                                    <div>
                                        <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                            <span
                                                className="block text-lg text-gray-800 font-bold tracking-wide">{card.title}</span>
                                            <span
                                                className="block text-lg text-gray-800 font-bold tracking-wide">{card.create_article_date}</span>
                                            {/*<span*/}
                                            {/*    className="block text-gray-600 text-sm">{card.description.substring(0, 150) + " ..."}</span>*/}
                                        </div>
                                    </div>
                                    <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                                        <div className="pt-8 text-center">
                                            <button
                                                className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg"
                                                onClick={() => handleClick(card.id)}>Прочети повече
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </Suspense>
    )
}

            export default CardAquariumsHTML;
