"use client";

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchLikesDislikes, incrementDislike, incrementLike} from "@/store/likesSlice/likesSlice";
import LikeHeart from "@/app/likeHeart/likeHeart.js";
import axios from "axios";
import DisLikeheart from "@/app/dislikeHeart/disLikeHTML.jsx";

const LikeHTML = ({id}) => {
  console.log("pesho", id);
  let likesData = [];
  const {likes, dislikes} = useSelector(state => state.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  let content;
  const dispatch = useDispatch();
  const status = useSelector((state) => state.likes.status);
  const error = useSelector((state) => state.likes.error);
// Create a new URLSearchParams object
  const params = new URLSearchParams({
    "id": id
  });
  const storeData = useSelector((state) => {
    likesData = state.likes;
  });
  useEffect(() => {
    getTodos();
  }, [status]);
  const getTodos = () => {
    if (status === "idle") {
      dispatch(fetchLikesDislikes(params));
    } else if (status === "loading") {
      content = <div>Loading...</div>;
    } else if (status === "succeeded") {
      console.log("pesho", likesData);

    } else if (status === "failed") {
      content = <div>{error}</div>;
    } else {
      console.log("peshoDARTA", status, data);
    }
  };
  const handleLike = async () => {
    dispatch(incrementLike());
    setIsLiked(true);
    try {
      await axios.post("/api/like", {likes: likes, id: id});
    } catch (error) {
      console.error("Error liking the article", error);
    }
  };
  const handleDislike = async () => {
    dispatch(incrementDislike());
    setIsDisliked(true);
    try {
      await axios.post("/api/dislike", {dislikes: dislikes, id: id});
    } catch (error) {
      console.error("Error disliking the article", error);
    }
  };
  return (
    <div>
      {
        likesData.isLoading ? <div><h1>Loading........</h1></div> :
          <div className="likeDislikeBtn">
            <button className="removeBgrBorder" onClick={handleLike} disabled={isLiked || isDisliked}>
              <LikeHeart/>
              <span>{likesData.data.likes}</span>
            </button>
            {/*<button onClick={handleLike} disabled={isLiked || isDisliked}>👍 Харесвам <span>{likesData.data.likes}</span>*/}
            {/*</button>*/}
            <button className="removeBgrBorder" onClick={handleDislike} disabled={isLiked || isDisliked}>
              <DisLikeheart/>
              <span>{likesData.data.dislikes}</span>
            </button>
            {/*<button onClick={handleDislike} disabled={isLiked || isDisliked}>👎 Не*/}
            {/*  харесвам <span>{likesData.data.dislikes}</span></button>*/}
          </div>
      }
    </div>
  );
};

export default LikeHTML;
