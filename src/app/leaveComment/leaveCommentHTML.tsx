import React, {useEffect} from "react";
import "./leaveComment.scss";
import {useDispatch, useSelector} from "react-redux";
import {getArticleComment} from "@/store/getCommentsForArticle/getCommentSlice";

const LeaveComments = ({id}) => {
    let content;
    const dispatch = useDispatch();
    const status = useSelector((state) => state.getComments.status);
    const error = useSelector((state) => state.getComments.error);
    const articleComment = useSelector((state) => state.getComments);
    const loading = useSelector((state) => state.getComments.status);
    // Create a new URLSearchParams object
    const params = new URLSearchParams({
        "id": id
    });
    useEffect(() => {
        getTodos();
    }, [status]);

    const getTodos = () => {
        if (status === "idle") {
            dispatch(getArticleComment(params));
        } else if (status === "loading") {
            content = <div>Loading...</div>;
        } else if (status === "succeeded") {
            console.log('succeeded', articleComment);
        } else if (status === "failed") {
            content = <div>{error}</div>;
        } else {
        }
    };
    return (
        <div>
            {
                (loading !== "succeeded") ? (
                    <div>Зареждане...</div>
                ) : (
                    <div>
                        {articleComment.data.length === 0 ? <h2>Няма коментари</h2> : <h2>Коментари:</h2>}
                        <div className="comments">
                            {articleComment.data.map((comment, index) => (
                                <div key={index}>
                                    <ul className="message-list">
                                        <li>
                                            <h3>{comment.name} каза:</h3>
                                            <h6>{new Date(comment.created_at).toLocaleDateString("en-US")} в {comment.time}</h6>
                                            <p>{comment.comments}</p>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default LeaveComments;
