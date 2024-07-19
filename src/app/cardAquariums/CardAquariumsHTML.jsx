"use client";

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import "./cardAquariums.scss";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodo} from "@/store/todoSlice/todoSlice";
import {DataState} from "@/app/interfaceTS/getCardInfoTS";

const CardAquariumsHTML = () => {

  const router = useRouter();
  let todoId = 1000;
  let cardInfo = DataState;
  const dispatch = useDispatch();
  const status = useSelector((state) => state.todo.status);
  const error = useSelector((state) => state.todo.error);
  let err = "";
  let content;
  let cardAquariums = [
    {
      images: "https://images.unsplash.com/photo-1667680139900-44882fc7b625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      header: "Mitaka",
      date: "2021-09-02",
      description: "Mitaka is a city located in the western portion of Tokyo Metropolis, Japan. It is a part of the Tama Area of Tokyo. As of 1 February 2016, the city had an estimated population of 189,168, and a population density of 11,520 persons per km². Its total area is 16.42 square kilometres.",
    }
  ];


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
                <h2>{card.header}</h2>
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
