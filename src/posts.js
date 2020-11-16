import React, { useContext } from 'react';
import { StateContext } from './contexts';
import Post from './post';

const Posts = () => {
  const { state } = useContext(StateContext);
  const { posts } = state;
  return (
    <div>
      {posts.map((post, index) => (
        <Post {...post} key={`post-${index}`} />
      ))}
    </div>
  );
};

export default Posts;
