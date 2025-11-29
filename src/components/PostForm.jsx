import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const isEditing = Boolean(id);

  const fetchPost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    setTitle(data.title);
    setBody(data.body);
  };

  useEffect(() => {
    if (isEditing) fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `https://jsonplaceholder.typicode.com/posts/${id}`
      : `https://jsonplaceholder.typicode.com/posts`;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });

    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        {isEditing ? "Edit Post" : "Create Post"}
      </h1>

      <form onSubmit={handleSubmit} className="bg-white p-5 rounded shadow">
        <input
          type="text"
          className="w-full border p-2 rounded mb-3"
          placeholder="Post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border p-2 rounded mb-3"
          rows="4"
          placeholder="Post body..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          {isEditing ? "Save Changes" : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
