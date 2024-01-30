// pages/HomePage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogPosts } from "../services/api";
import { BlogPost } from "../types";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const goToBlogPost = (postId: number) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Our Blog</h1>
        <p>Explore a variety of topics and insights.</p>
      </section>
      <section className="blog-listing">
        {/* Inside your .map function in the HomePage component */}
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="blog-post-summary"
            onClick={() => goToBlogPost(post.id)}
          >
            <img
              src={post.image_url || "default-placeholder.png"}
              alt={post.title}
            />
            <div className="blog-post-info">
              {/* Make the title a hyperlink */}
              <a href={`/blog/${post.id}`} className="blog-post-title">
                {post.title}
              </a>
              {/* Add description or date */}
              {/* <p className="blog-post-date">{post.date}</p> */}
            </div>
          </div>
        ))}
      </section>
      <div className="home-footer">
        <div className="footer-content">
          <h2>ABOUT US</h2>
          <p>Description of your blog or company.</p>
          <nav>
            <a href="/about">About</a>
            <a href="/contact">Contact Us</a>
            {/* Add more links as needed */}
          </nav>
        </div>
        <div className="footer-social-media">
          <h2>FOLLOW US</h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
