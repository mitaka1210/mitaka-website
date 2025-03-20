import LikeHeart from "@/app/likeHeart/likeHeart";
import DisLikeheart from "@/app/dislikeHeart/disLikeHTML";
import {useDispatch, useSelector} from "react-redux";
import {useRouter, useSearchParams} from "next/navigation";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {
    useGetArticleLikesQuery,
    useLikeArticleMutation
} from "@/store/api/likesSlice";
import {fetchArticles} from "@/store/getArticles/getArticlesSlice";
import LoaderHTML from "@/app/loader/LoaderHTML";

const ReadHtml = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const { t } = useTranslation();
    const [id, setId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [articleTitle, setArticleTitle] = useState("");
    const [sectionArr, setSectionArr] = useState([]);
    const [progress, setProgress] = useState(0);
    const [showNext, setShowNext] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [likeArticle] = useLikeArticleMutation();

    useEffect(() => {
        const queryId = searchParams.get("id");
        if (queryId) {
            setId(queryId);
        }
    }, [searchParams]);

    useEffect(() => {
        if (id) {
            dispatch(fetchArticles());
        }
    }, [dispatch, id]);

    const { data, isLoading } = useGetArticleLikesQuery(id, { skip: !id });

    useEffect(() => {
        if (data) {
            setLikeCount(Number(data.likes) || 0);
            setDislikeCount(Number(data.dislikes) || 0);
        }
    }, [data]);

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
        }
    }, [status, articlesInfo, id]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
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
        if (isLiked || isDisliked) return;
        setIsLiked(true);
        setLikeCount((prev) => prev + 1);

        try {
            await likeArticle({ articleId: id, type: "like" }).unwrap();
        } catch (err) {
            console.error("🔴 Like failed:", err);
            setLikeCount((prev) => prev - 1);
            setIsLiked(false);
        }
    };

    const handleDislike = async () => {
        if (isLiked || isDisliked) return;
        setIsDisliked(true);
        setDislikeCount((prev) => prev + 1);

        try {
            await likeArticle({ articleId: id, type: "dislike" }).unwrap();
        } catch (err) {
            console.error("🔴 Dislike failed:", err);
            setDislikeCount((prev) => prev - 1);
            setIsDisliked(false);
        }
    };

    if (!id) return null;
    if (loading || isLoading) return <LoaderHTML />;

    return (
        <div className="read" style={{ fontFamily: "Arial, sans-serif", background: "linear-gradient(to bottom, #006994, #003f5c)", minHeight: "100vh", padding: "20px" }}>
            <div className="progress-container" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "4px", background: "#ddd", zIndex: 1000 }}>
                <div className="progress-bar" style={{ height: "4px", background: "#fc2e5a", width: `${progress}%`, transition: "width 0.3s ease-in-out" }}></div>
            </div>
            <div className="read-back-btn">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={goBack}>
                    {t("back")}
                </button>
            </div>
            <section>
                <h2 className="read-title text-align-center">{articleTitle}</h2>
                <hr className="add-line-after-header" />
                <div className="read-sections" style={{ maxWidth: "800px", margin: "50px auto", background: "rgba(255, 255, 255, 0.3)", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", backdropFilter: "blur(10px)" }}>
                    {sectionArr.map((section, index) => (
                        <div key={index} className="read-section">
                            <h2 className="read-section-title" style={{ fontSize: "28px", textAlign: "center", color: "#fff" }}>{index + 1}.{section.title}</h2>
                            <p className="read-section-text">{section.content}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <div className="likeDislikeBtn flex-horizontal-container justify-content-center">
                    <button className="removeBgrBorder" onClick={handleLike} disabled={isLiked || isDisliked}>
                        <LikeHeart likeIt={isLiked}/>
                        <p>{likeCount}</p>
                    </button>
                    <button className="removeBgrBorder" onClick={handleDislike} disabled={isLiked || isDisliked}>
                        <DisLikeheart />
                        <p className="dislike-number">{dislikeCount}</p>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ReadHtml;
