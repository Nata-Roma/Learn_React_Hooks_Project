import React, { useState } from "react";

const CreatePost = ({ user, posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [] = useState('');

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const contentChange = (e) => {
    setContent(e.target.value);
  };

  const submitNewPost = (e) => {
    e.preventDefault();
    const newPost = { title, content, author: user };
    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  return (
    <form style={{ border: "1px solid black" }} onSubmit={submitNewPost}>
      <h3>Create post</h3>
      <div>
        Author: <b>{user}</b>
      </div>
      <br />
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={titleChange}
        />
      </div>
      <br />
      <textarea value={content} onChange={contentChange} />
      <input type="submit" value="Create" />
      <br />
      <br />
    </form>
  );
};

export default CreatePost;
