"use client";

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchLikesDislikes, incrementDislike, incrementLike} from "@/store/likesSlice/likesSlice";
import {useSearchParams} from "next/navigation";

const LikeHTML = ({id}) => {
  const searchParams = useSearchParams();
  const {likes, dislikes} = useSelector(state => state.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const status = useSelector((state) => state.likes.status);
  const error = useSelector((state) => state.likes.error);
  const dispatch = useDispatch();
  // const id = searchParams.get("id");
  let content;
  let likesData = {};
  let todoId = 0;
  useEffect(() => {
    findLikesDislikeCurrentPage(id);
  }, [1]);
  const dataLikesDislikes = useSelector((state) => {
    likesData = state.likes;
  });
  const findLikesDislikeCurrentPage = (id) => {
    if (status === "idle") {
      dispatch(fetchLikesDislikes(id));
    } else if (status === "loading") {
      content = <div>Loading...</div>;
    } else if (status === "succeeded") {
    } else if (status === "failed") {
      content = <div>{error}</div>;
    }
  };
  const handleLike = async () => {
    dispatch(incrementLike());
    setIsLiked(true);
    try {
      await axios.post("http://localhost:5000/api/like", {likes, todoId});
    } catch (error) {
      console.error("Error liking the article", error);
    }
  };
  const handleDislike = async () => {
    dispatch(incrementDislike());
    setIsDisliked(true);
    try {
      await axios.post("http://localhost:5000/api/dislike", {dislikes, todoId});
    } catch (error) {
      console.error("Error disliking the article", error);
    }
  };
  return (
    <div>
      <h2>Like</h2>
    </div>
  );
};

export default LikeHTML;
