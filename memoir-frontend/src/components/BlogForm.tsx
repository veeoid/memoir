// components/BlogForm.tsx
import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { API_URL } from '../services/api';

// Define the structure of your blog post data
interface BlogPostData {
  title: string;
  content: string;
  image_url?: string; // Optional image URL
}

const BlogForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const postData: BlogPostData = { title, content, image_url: imageURL };
      await axios.post(`${API_URL}posts/`, postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Handle success (e.g., redirecting or showing a message)
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <input type="text" value={imageURL} onChange={e => setImageURL(e.target.value)} />
      <button type="submit">Post</button>
    </form>
  );
};

export default BlogForm;
