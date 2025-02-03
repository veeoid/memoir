// SignInPage.tsx
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./SignInSignUp.css";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    await signIn(email, password);
    navigate("/"); // Navigate to the homepage or dashboard on successful sign-in
  };

  const handleSignUpClick = () => navigate("/signup");

  return (
    <div className="auth-page-background">
      <div className="auth-container">
        {/* Form and UI elements */}
      </div>
    </div>
  );
};

export default SignInPage;
