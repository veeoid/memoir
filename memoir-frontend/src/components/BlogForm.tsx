// components/BlogForm.tsx
import React, { useState, FormEvent } from "react";
import axios from "axios";
import { API_URL } from "../services/api";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"; // Update with the correct path to your AuthContext
import "./BlogForm.css";

// Define the structure of your blog post data
interface BlogPostData {
  title: string;
  content: string;
  image?: File | null; // Image file
}

const BlogForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const authContext = useContext(AuthContext);
  const user = authContext ? authContext.user : null;
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !content) {
      alert("Please fill in all fields.");
      return;
    }
    // FormData to handle file upload
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    // Inside handleSubmit
    if (image) {
      formData.append("image", image, image.name); // Make sure the key matches your model field
    }

    try {
      await axios.post(`${API_URL}posts/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Clear the form fields
      setTitle("");
      setContent("");
      setImage(null);
      alert("Blog post created successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create blog post.");
    }
  };
  if (!user) {
    return (
      <div className="blog-form">
        <h2>You must be signed in to create a post.</h2>
        {/* Render sign-in/sign-up buttons or a message */}
      </div>
    );
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div className="blog-form">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <label>Image</label>
        <input type="file" onChange={handleImageChange} accept="image/*" />

        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default BlogForm;
