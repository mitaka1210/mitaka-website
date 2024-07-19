"use client";
import React, {useEffect} from "react";
import {useSearchParams} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodo} from "@/store/todoSlice/todoSlice";
import LikeHTML from "@/app/Like/LikeHTML";

const ReadHtml = () => {
  const [show, setShow] = React.useState(false);
  const searchParams = useSearchParams();
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
      console.log("pesho", cardIdInfo);
      showDataForId();
    } else if (status === "failed") {
      content = <div>{error}</div>;
    } else {
      console.log("peshoDARTA", status, data);
    }
  };
  const showDataForId = () => {
    cardIdInfo.data.find((item) => {
      if (item.todoId === Number(id)) {
        findCard.push(item);
        console.log("pesho", findCard);
      }
    });
  };
  return (
    <div className="read">
      {
        cardIdInfo ? <div>
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
