"use client";

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchLikesDislikes} from "@/store/likesSlice/likesSlice";
const LikeHTML = ({id}) => {
  console.log("pesho", id);
  let cardIdInfo = [];
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  let err = "";
  let content;
  const dispatch = useDispatch();
  const status = useSelector((state) => state.likes.status);
  const error = useSelector((state) => state.likes.error);
// Create a new URLSearchParams object
const params = new URLSearchParams({
  'id': id
});
  const storeData = useSelector((state) => {
    cardIdInfo = state.todo;
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
      console.log("pesho", cardIdInfo);

    } else if (status === "failed") {
      content = <div>{error}</div>;
    } else {
      console.log("peshoDARTA", status, data);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Property Details</h1>
      {property && (
        <pre>{JSON.stringify(property, null, 2)}</pre>
      )}
    </div>
  );
};

export default LikeHTML;
