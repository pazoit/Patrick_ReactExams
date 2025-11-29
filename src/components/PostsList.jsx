import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data.slice(0, 10));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });

    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold">Posts List</h1>

        <Link
          to="/create"
          className="bg-[linear-gradient(to_bottom,hsl(293,100%,63%),hsl(264,100%,61%))] text-white px-4 py-2 rounded"
        >
          Add Post
        </Link>
      </div>

      {posts.map((post) => (
        <div
          key={post.id}
          className="p-4 bg-gray-100 rounded shadow mb-4 flex justify-between"
        >
          <div>
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p>{post.body}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              to={`/edit/${post.id}`}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </Link>

            <button
              onClick={() => deletePost(post.id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
