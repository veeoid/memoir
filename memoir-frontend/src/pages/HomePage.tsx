import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Make sure to include this CSS file

// ... other imports if necessary

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Replace with your actual blog posts fetched from an API
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      description: "Description for Blog Post 1",
      imageUrl: "/path-to-image-1.jpg",
    },
    {
      id: 2,
      title: "Blog Post 2",
      description: "Description for Blog Post 2",
      imageUrl: "/path-to-image-2.jpg",
    },
    // ... more blog posts
  ];

  // Function to navigate to a blog post
  const goToBlogPost = (postId: number) => {
    navigate(`/blogpost/${postId}`);
  };

  return (
    <div className="home-page">
      <section className="hero">
      <h1>Welcome to Our Blog</h1>
        <p>Explore a variety of topics and insights.</p>
      </section>
      <section className="blog-listing">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post-summary" onClick={() => goToBlogPost(post.id)}>
            <img src={post.imageUrl} alt={post.title} className="blog-post-image" />
            <div className="blog-post-info">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
