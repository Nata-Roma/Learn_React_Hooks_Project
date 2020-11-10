import React from "react";
import Post from "./post";

const Posts = ({ posts = [] }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post {...post} key={`post-${index}`} />
      ))}
    </div>
  );
};

export default Posts;
