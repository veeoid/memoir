// services/api.ts
import axios from 'axios';

export const API_URL = 'http://127.0.0.1:8000/api/blog/';

// Function to get a single blog post by ID
export const getBlogPostById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}posts/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get all blog posts
export const getBlogPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}posts/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
