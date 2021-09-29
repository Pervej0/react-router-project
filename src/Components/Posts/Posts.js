import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    axios(url).then((res) => setPosts(res.data.slice(0, 30)));
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};

export default Posts;
