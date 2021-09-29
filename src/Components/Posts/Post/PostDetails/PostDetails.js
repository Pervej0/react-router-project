import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PostDetails = () => {
  const [postDetails, setPostDetails] = useState([]);
  const { postId } = useParams({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    axios(url).then((res) => setPostDetails(res.data));
  }, []);
  const { id, title, body } = postDetails;
  return (
    <div className="container border p-4 my-5">
      <p className="text-dark fw-bold">Id: {id}</p>
      <h4 className="text-primary">{title}</h4>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
