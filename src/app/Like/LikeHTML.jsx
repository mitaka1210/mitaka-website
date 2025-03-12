"use client";

import React, {useEffect, useState} from "react";
import LoaderHTML from "@/app/loader/LoaderHTML";
import LikeHeart from "@/app/likeHeart/likeHeart";
import DisLikeheart from "@/app/dislikeHeart/disLikeHTML";

const LikeHTML = ({like}) => {
  console.log("pesho", like);
  const [loading, setLoading] = useState(true);
    let likesData = {
      likes: like.likes,
      dislikes: like.dislikes,
  };
  useEffect(() => {
      likesData = like;
      setLoading(false);
  }, [like]);

  const handleLike = async () => {

  };
  const handleDislike = async () => {

  };
  const [color, setColor] = useState("white"); // Начален цвят на SVG пътя

  const handleClick = () => {
    // Промяна на цвета при клик
    setColor(color === "black" ? "blue" : "red");
  };
    if (!like) return null;
    if (loading) return <LoaderHTML />;
  return (
    <div>
        <h5>Like page</h5>
        <div className="likeDislikeBtn">
            <button className="removeBgrBorder" onClick={handleLike}>
                <LikeHeart onClick={handleClick}/>
                {/*<p>{likesData?.likes ?? 0}</p>*/}
            </button>
            {/*<button onClick={handleLike} disabled={isLiked || isDisliked}>👍 Харесвам <span>{likesData.data.likes}</span>*/}
            {/*</button>*/}
            <button className="removeBgrBorder" onClick={handleDislike}>
                <DisLikeheart/>
                {/*<p>{likesData?.dislikes ?? 0}</p>*/}
            </button>
            {/*<button onClick={handleDislike} disabled={isLiked || isDisliked}>👎 Не*/}
            {/*  харесвам <span>{likesData.data.dislikes}</span></button>*/}
        </div>
    </div>
  );
};

export default LikeHTML;
