import React, { useState } from "react";
import CreatePost from "./create-post";
import Posts from "./posts";

import "./styles.css";
import UserBlock from "./user-block";

const App = () => {
  const defaultPosts = [
    { title: "First", content: "bla-bla-bla", author: "Myself" },
    { title: "Second", content: "bla-bla", author: "Myself" }
  ];
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState(defaultPosts);

  return (
    <div className="App">
      <UserBlock setUser={setUser} user={user} />
      <br />
      {user && <CreatePost user={user} setPosts={setPosts} posts={posts} />}
      <br />
      {user && <Posts posts={posts} />}
    </div>
  );
};

export default App;
