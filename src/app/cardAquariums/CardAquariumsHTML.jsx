"use client";

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import "./cardAquariums.scss";
import {useDispatch, useSelector} from "react-redux";

import {fetchTodo} from "@/store/todoSlice/todoSlice.js";

const CardAquariumsHTML = () => {

    const router = useRouter();
    let todoId = 1000;
    let cardInfo;
    const dispatch = useDispatch();
    const [showInfo, setShowInfo] = useState(false);
    const status = useSelector((state) => state.todo.status);
    const error = useSelector((state) => state.todo.error);
    let err = "";
    let content;


    const [data, setData] = useState(null);
    useEffect(() => {
        dispatch(fetchTodo());

    }, [1]);
    const storeData = useSelector((state) => {
        cardInfo = state.todo;
    });
    const redirectPage = (header, content, date, time, images, todoId) => {
        // Добавете query parameters към URL
        router.push("/");
    };
    const getTodos = () => {
        if (status === "idle") {
            console.log("pesho start",);
            dispatch(fetchTodo());
        } else if (status === "loading") {
            content = <div>Loading...</div>;
        } else if (status === "succeeded") {
        } else if (status === "failed") {
            content = <div>{error}</div>;
        } else {
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
        <div
            className="height-auto flex-horizontal-container justify-content-space-evenly align-items-center flex-flow-row">
            {
                cardInfo.data.map((card, index) => {
                    return <div className="flex-item card-main">
                        <div className="py-4">
                            <div
                                className="shadow-lg group container rounded-md bg-white  max-w-sm flex justify-center flex-vertical-container-raw items-center mx-auto content-div">
                                <div className="image-wrapper">
                                    <img alt="traveller"
                                         src={card.images === null ? mitaka : card.images}/>
                                </div>
                                <div>
                                    <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                                        <span
                                            className="block text-lg text-gray-800 font-bold tracking-wide">{card.header}</span>
                                        <span
                                            className="block text-lg text-gray-800 font-bold tracking-wide">{card.date}</span>
                                        <span
                                            className="block text-gray-600 text-sm">{card.description.substring(0, 150) + " ..."}</span>
                                    </div>
                                </div>
                                <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                                    <div className="pt-8 text-center">
                                        <button
                                            className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg"
                                            onClick={() => handleClick(card.todoId)}>Прочети повече
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        // <div>
        //     {
        //       cardInfo.data.map((card, index) => {
        //         return <div className="container-card" key={index}>
        //           <div className="card">
        //             <div className="image-wrapper">
        //               <img alt="traveller"
        //                    src={card.images === null ? mitaka : card.images}/>
        //             </div>
        //             <div className="content">
        //               <h6>{card.header}</h6>
        //               <h5>{card.date}</h5>
        //               <p>{card.description.substring(0, 150) + " ..."}</p>
        //             </div>
        //             <button className="card-read"
        //                     onClick={() => handleClick(card.todoId)}> Прочети
        //               повече
        //             </button>
        //             {/*<button className="card-read"*/}
        //             {/*        onClick={() => redirectPage(card.header, card.description, "07/18/2024", "12:00:55", card.images, todoId)}> Прочети*/}
        //             {/*  повече*/}
        //             {/*</button>*/}
        //           </div>
        //         </div>;
        //       })
        //     }
        // </div>
    );
};

export default CardAquariumsHTML;
