// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"; // Import AuthProvider
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/NavBar";
import CreateBlogPage from "./components/CreateBlogPage"; // Import the CreateBlogPage component
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <AuthProvider>
      {" "}
      {/* Wrap your routes in AuthProvider */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/create-blog" element={<CreateBlogPage />} />
          <Route path="/blogpost/:id" element={<BlogPage />} />
          <Route path="/user-profile" element={<ProfilePage />} />
          {/* ... other routes ... */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
