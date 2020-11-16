import React, { useContext, useState } from 'react';
import { StateContext } from './contexts';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  // const [] = useState('');

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const contentChange = (e) => {
    setContent(e.target.value);
  };

  const submitNewPost = (e) => {
    e.preventDefault();
    // const newPost = { title, content, author: user };
    dispatch({ type: 'CREATE_POST', title, content, author: user });
    setTitle('');
    setContent('');
  };

  return (
    <form style={{ border: '1px solid black' }} onSubmit={submitNewPost}>
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
