import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogPostById } from "../services/api"; // Ensure this API call is correctly implemented
import { BlogPost } from "../types";
import "./BlogPage.css"; // Ensure this CSS file exists and is correctly linked

const BlogPage: React.FC = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await getBlogPostById(Number(id));
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadPost();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="blog-page-container">
      <h1 className="blog-title">{post.title}</h1>
      {post.image_url && (
        <img
          src={post.image_url}
          alt={post.title}
          className="blog-post-image"
        />
      )}
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogPage;
