import React, { ChangeEvent, FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import "./SignInSignUp.css";

// Define the structure for your form's state
interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Define the structure for error responses, adjust based on your API
interface ErrorResponse {
  detail?: string;
}

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpFormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      // Make sure to adjust the URL and the body to match your backend
      const response = await axios.post(
        "http://127.0.0.1:8000/api/blog/register/",
        {
          username: formData.username, // Adjust if your backend expects a different field
          email: formData.email,
          password: formData.password,
        }
      );

      // Handle response or navigate
      navigate("/signin");
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      // Adjust error handling based on your API's response structure
      setError(
        axiosError.response?.data.detail ||
          "An error occurred during registration."
      );
    }
  };

  const handleSignInClick = () => {
    navigate("/signin");
  };

  return (
    <div className="auth-page-background">
      <div className="auth-container">
        <div className="auth-form-container">
          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit">Sign Up</button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
        <div className="auth-welcome-container">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please login with your personal info</p>
          <button onClick={handleSignInClick}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
