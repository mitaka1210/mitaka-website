"use client";

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import "./cardAquariums.scss";
import {useDispatch, useSelector} from "react-redux";
import {DataState} from "@/app/interfaceTS/getCardInfoTS";
import {fetchTodo} from "@/store/todoSlice/todoSlice.js";

const CardAquariumsHTML = () => {

  const router = useRouter();
  let todoId = 1000;
  let cardInfo = DataState;
  const dispatch = useDispatch();
  const [showInfo, setShowInfo] = useState(false);
  const status = useSelector((state) => state.todo.status);
  const error = useSelector((state) => state.todo.error);
  let err = "";
  let content;


  const [data, setData] = useState(null);
  useEffect(() => {
    getTodos();
  }, [status]);
  const storeData = useSelector((state) => {
    cardInfo = state.todo;
  });
  const redirectPage = (header, content, date, time, images, todoId) => {
    // Добавете query parameters към URL
    router.push("/");
  };
  const getTodos = () => {
    if (status === "idle") {
      dispatch(fetchTodo());
    } else if (status === "loading") {
      content = <div>Loading...</div>;
    } else if (status === "succeeded") {
      console.log("pesho", cardInfo);
    } else if (status === "failed") {
      content = <div>{error}</div>;
    } else {
      console.log("peshoDARTA", status, data);
    }
  };
  const handleClick = (id) => {
    // const {id} = router.query;
    // Проверете дали използвате низове за query параметрите
    router.push("/ReadArticles" + `/?id=${id}`);
  };
  const handleClickShowText = (id) => {
    for (let i = 0; i < cardInfo.data.length; i++) {
      if (id === cardInfo.data[i].todoId) {
        setShowInfo(!showInfo);
      }
    }
  };
  return (
    <div className="card-main">
      {
        cardInfo.data.map((card, index) => {
          return <div className="container-card" key={index}>
            <div className="card">
              <div className="image-wrapper">
                <img alt="traveller"
                     src={card.images === null ? mitaka : card.images}/>
              </div>
              <div className="content">
                <h6>{card.header}</h6>
                <h5>{card.date}</h5>
                <p>{card.description.substring(0, 150) + " ..."}</p>
              </div>
              <button className="card-read"
                      onClick={() => handleClick(card.todoId)}> Прочети
                повече
              </button>
              {/*<button className="card-read"*/}
              {/*        onClick={() => redirectPage(card.header, card.description, "07/18/2024", "12:00:55", card.images, todoId)}> Прочети*/}
              {/*  повече*/}
              {/*</button>*/}
            </div>
          </div>;
        })
      }
    </div>
  );
};

export default CardAquariumsHTML;
