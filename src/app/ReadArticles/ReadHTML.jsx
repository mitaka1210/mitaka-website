"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { fetchArticles } from "@/store/getArticles/getArticlesSlice";
import LoaderHTML from "@/app/loader/LoaderHTML";
import {
    articlesLikesDislikes,
    useGetArticleLikesQuery, useLikeArticleMutation
} from "@/store/api/likesSlice";
import LikeHTML from "@/app/Like/LikeHTML";
import LikeHeart from "@/app/likeHeart/likeHeart";
import DisLikeheart from "@/app/dislikeHeart/disLikeHTML";

const ReadHtml = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const { t } = useTranslation();

    const [id, setId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [like, setLike] = useState(null);
    const [sectionArr, setSectionArr] = useState([]);
    const [articleTitle, setArticleTitle] = useState("");
    const [progress, setProgress] = useState(0);
    const [showNext, setShowNext] = useState(false);
    const [color, setColor] = useState("white"); // Начален цвят на SVG пътя
    const [isBroken, setIsBroken] = useState(false);
    const [likeArticle] = useLikeArticleMutation();

    // Изчакваме id, преди да пуснем заявката
    useEffect(() => {
        const queryId = searchParams.get("id");
        if (queryId) {
            setId(queryId);
        }
    }, [searchParams]);

    // Взимаме информация за статиите
    useEffect(() => {
        if (id) {
            dispatch(fetchArticles());
        }
    }, [dispatch, id]);

    // Взимаме харесванията и проверяваме статията
    const { data, error, isLoading } = useGetArticleLikesQuery(id, {
        skip: !id, // Пропуска заявката, ако id не е готово
    });

    useEffect(() => {
        if (!id || !data) return;
        setLike(data);
    }, [data]);

    // Проверяваме дали статиите са заредени
    const articlesInfo = useSelector((state) => state.articles.data);
    const status = useSelector((state) => state.articles.status);

    useEffect(() => {
        if (!id || status !== "succeeded" || articlesInfo.length === 0) return;

        const sectionId = Number(id);
        const section = articlesInfo.find((s) => s.id === sectionId);

        if (section) {
            setArticleTitle(section.title);
            setSectionArr(section.sections);
            setLoading(false);
            console.log("pesho", like);
        }
    }, [status, articlesInfo, id]);

    // Прогрес бар при скролиране
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progressValue = (scrollTop / scrollHeight) * 100;
            setProgress(progressValue);
            setShowNext(progressValue > 90);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [id]);

    const goBack = () => {
        router.push("/cardAquariums");
    };
    const handleLike = async () => {
        try {
            await likeArticle({ articleId: id, type: "like" }).unwrap();
            console.log("✅ Like successful");
            console.log("pesho DATA",data);
        } catch (err) {
            console.error("🔴 Like failed:", err);
        }
    };

    const handleDislike = async () => {
        try {
            await likeArticle({ articleId: id, type: "dislike" }).unwrap();
            console.log("✅ Dislike successful");
            setIsBroken(true);
        } catch (err) {
            console.error("🔴 Dislike failed:", err);
        }
    };const handleClick = () => {
        // Промяна на цвета при клик
        setColor(color === "black" ? "blue" : "red");
    };
    if (!id) return null;
    if (loading || isLoading) return <LoaderHTML />;

    return (
        <div
            className="read"
            style={{
                fontFamily: "Arial, sans-serif",
                background: "linear-gradient(to bottom, #006994, #003f5c)",
                minHeight: "100vh",
                padding: "20px",
            }}
        >
            <div
                className="progress-container"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    background: "#ddd",
                    zIndex: 1000,
                }}
            >
                <div
                    className="progress-bar"
                    style={{
                        height: "4px",
                        background: "#ffcc00",
                        width: `${progress}%`,
                        transition: "width 0.3s ease-in-out",
                    }}
                ></div>
            </div>
            <div className="read-back-btn">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={goBack}
                >
                    {t("back")}
                </button>
            </div>
            <div>
                <p>{like?.dislikes ?? 0}</p>
                <p>{like?.likes ?? 0}</p>
            </div>
            <section>
                <h2 className="read-title text-align-center">{articleTitle}</h2>
                <hr className="add-line-after-header" />
                <div
                    className="read-sections"
                    style={{
                        maxWidth: "800px",
                        margin: "50px auto",
                        background: "rgba(255, 255, 255, 0.3)",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                        backdropFilter: "blur(10px)",
                    }}
                >
                    {sectionArr.map((section, index) => (
                        <div key={index} className="read-section">
                            <h2
                                className="read-section-title"
                                style={{ fontSize: "28px", textAlign: "center", color: "#fff" }}
                            >
                                {index + 1}.{section.title}
                            </h2>
                            <p className="read-section-text">{section.content}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <div className="likeDislikeBtn flex-horizontal-container justify-content-center">
                    <button className="removeBgrBorder" onClick={handleLike}>
                        <LikeHeart onClick={handleClick}/>
                        <p>{like?.likes ?? 0}</p>
                    </button>
                    {/*<button onClick={handleLike} disabled={isLiked || isDisliked}>👍 Харесвам <span>{likesData.data.likes}</span>*/}
                    {/*</button>*/}
                    <button className="removeBgrBorder" onClick={handleDislike}>
                        <DisLikeheart/>
                        <p>{like?.dislikes ?? 0}</p>
                    </button>
                    {/*<button onClick={handleDislike} disabled={isLiked || isDisliked}>👎 Не*/}
                    {/*  харесвам <span>{likesData.data.dislikes}</span></button>*/}
                </div>
                {/*<LikeHTML like={like}/>*/}
                {/*<hr className="add-line"/>*/}
                {/*<LeaveComments id={article.todoId}/>*/}
                {/*<AddComment id={article.todoId}/>*/}
            </section>
        </div>
    );
};

export default ReadHtml;
