import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsList from "../components/PostsList";
import PostForm from "../components/PostForm";

const PostsManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/edit/:id" element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PostsManager;
