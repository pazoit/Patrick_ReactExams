import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// =============== ASYNC THUNKS ===============

// Fetch all posts
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const res = await fetch(BASE_URL);
    return res.json();
  }
);

// Fetch single post by ID
export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    return res.json();
  }
);

// Create a new post
export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post) => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    return res.json();
  }
);

// Update post
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ id, data }) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  }
);

// Delete post
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id) => {
    await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    return id;
  }
);

// =============== SLICE ===============
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
    selectedPost: null,
  },

  reducers: {
    clearSelectedPost: (state) => {
      state.selectedPost = null;
    },
  },

  extraReducers: (builder) => {
    builder

      
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.slice(0, 10);
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load posts";
      })

    
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPost = action.payload;
      })
      .addCase(fetchPostById.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch post details";
      })

      
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      })

    
      .addCase(updatePost.fulfilled, (state, action) => {
        state.posts = state.posts.map((p) =>
          p.id === action.payload.id ? action.payload : p
        );
      })

      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((p) => p.id !== action.payload);
      });
  },
});

export const { clearSelectedPost } = postsSlice.actions;
export default postsSlice.reducer;
