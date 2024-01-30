// In CreateBlogPage.tsx

import React from 'react';
import BlogForm from '../components/BlogForm';

const CreateBlogPage: React.FC = () => {
  return (
    <div>
      <h2>Create a Blog Post</h2>
      <BlogForm />
    </div>
  );
};

export default CreateBlogPage;
