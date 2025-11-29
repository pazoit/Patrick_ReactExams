// import React, { useEffect, useState } from "react";
// import {
//   fetchPosts,
//   createPost,
//   updatePost,
//   deletePost,
//   fetchPostById,
//   clearSelectedPost,
// } from "../Redux/postsslice";
// import { useDispatch, useSelector } from "react-redux";

// const Postsmanager = () => {
//   const dispatch = useDispatch();

//   const { posts, loading, selectedPost } = useSelector((state) => state.posts);

//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, []);

  
//   useEffect(() => {
//     if (selectedPost) {
//       setTitle(selectedPost.title);
//       setBody(selectedPost.body);
//     } else {
//       setTitle("");
//       setBody("");
//     }
//   }, [selectedPost]);

//   const handleCreate = () => {
//     dispatch(createPost({ title, body }));
//     resetForm();
//   };

//   const handleUpdate = () => {
//     dispatch(updatePost({ id: selectedPost.id, data: { title, body } }));
//     resetForm();
//   };

//   const resetForm = () => {
//     setTitle("");
//     setBody("");
//     dispatch(clearSelectedPost());
//   };

//   return (
//     <div className="flex flex-col">
//         <h1 className="text-3xl font-bold mb-6 text-[#44afc3]">Posts Manager</h1>
//         <div className="max-w-3xl mx-auto p-6 bg-[#44afc3] border-red-400 border flex flex-col justify-center">
      
//       <div className="bg-[#44afc3] p-5 rounded shadow mb-6">
//         <h2 className="text-xl font-bold mb-4">
//           {selectedPost ? "Update Post" : "Create Post"}
//         </h2>

//         <input
//           className="w-full border p-2 rounded mb-3"
//           placeholder="Title..."
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <textarea
//           className="w-full border p-2 rounded mb-3"
//           placeholder="Body..."
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//         />

//         <button
//           onClick={selectedPost ? handleUpdate : handleCreate}
//           className="bg-yellow-400 text-white px-4 py-2 rounded mr-3"
//         >
//           {selectedPost ? "Save Changes" : "Add Post"}
//         </button>

//         {selectedPost && (
//           <button
//             onClick={resetForm}
//             className="bg-gray-400 text-white px-4 py-2 rounded"
//           >
//             Cancel
//           </button>
//         )}
//       </div>

    
//       {loading && <p className="text-center text-lg">Loading...</p>}

    
//       {!loading &&
//         posts.map((p) => (
//           <div
//             key={p.id}
//             className="bg-gray-100 p-4 rounded shadow mb-4 flex justify-between"
//           >
//             <div>
//               <h3 className="text-lg font-bold">{p.title}</h3>
//               <p>{p.body}</p>
//             </div>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => dispatch(fetchPostById(p.id))}
//                 className="bg-yellow-400 px-3 py-1 rounded"
//               >
//                 Edit
//               </button>

//               <button
//                 onClick={() => dispatch(deletePost(p.id))}
//                 className="bg-red-600 text-white px-3 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//     </div>
//     </div>
    
//   );
// };

// export default Postsmanager;
