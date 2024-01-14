import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInSignUp.css'; // Ensure this path is correct

function SignUpPage() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin'); // Navigate to the sign-in page
  };

  return (
    <div className="auth-page-background">
      <div className="auth-container">
        <div className="auth-form-container">
          {/* Sign-up form */}
          <form className="auth-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Sign Up</button>
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
}

export default SignUpPage;