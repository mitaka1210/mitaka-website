"use client";
import React, {useEffect} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodo} from "@/store/todoSlice/todoSlice";
import LikeHTML from "@/app/Like/LikeHTML";
import {resetState} from "@/store/likesSlice/likesSlice.js";

const ReadHtml = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.todo.status);
  const error = useSelector((state) => state.todo.error);
  let err = "";
  let content;
  const id = searchParams.get("id");
  let cardIdInfo = [];
  let findCard = [];
  const storeData = useSelector((state) => {
    cardIdInfo = state.todo;
  });
  useEffect(() => {
    getTodos();
  }, [status]);
  const getTodos = () => {
    if (status === "idle") {
      dispatch(fetchTodo());
    } else if (status === "loading") {
      content = <div>Loading...</div>;
    } else if (status === "succeeded") {
      showDataForId();
    } else if (status === "failed") {
      content = <div>{error}</div>;
    } else {
    }
  };
  const showDataForId = () => {
    cardIdInfo.data.find((item) => {
      if (item.todoId === Number(id)) {
        findCard.push(item);
      }
    });
  };
  const goBack = () => {
    dispatch(resetState());
    router.push("/cardAquariums"); // Връщане назад с 1 стъпка в историята
  };
  return (
    <div className="read">
      {
        cardIdInfo ? <div>
          <div className="read-back-btn">
            <button className="btn btn-outline-secondary" onClick={goBack}>back</button>
          </div>
          <div>
            {
              cardIdInfo.data.map((article, index) => {
                if (article.todoId === Number(id)) {
                  return <div key={index}>
                    <article>
                      <div className="article-image-container">
                        <img src={article.images} alt="read"/>
                      </div>
                      <div className="content-container">
                        <h3 className="article-title">{article.header}</h3>
                        <p
                          className="article-content">{article.description}</p>
                      </div>
                    </article>
                    <LikeHTML id={article.todoId}/>
                    {/*<hr className="add-line"/>*/}
                    {/*<LeaveComments articleId={todoId}/>*/}
                    {/*<AddComment articleId={todoId}/>*/}
                    {/*<div>*/}
                    {/*  <SocialShare url={url} title={header} description={content} images={images}/>*/}
                    {/*</div>*/}
                  </div>;
                }
              })
            }
          </div>
        </div> : "Loading..."
      }
    </div>
  );
};

export default ReadHtml;
