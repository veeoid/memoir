import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import the useAuth hook
import './SignInSignUp.css';

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth(); // Get signIn function from the context

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    if (email && password) {
      try {
        // Assuming signIn is an async function that returns a promise
        await signIn(email, password); // Pass email and password to signIn
        navigate('/'); // Navigate to the homepage on successful sign-in
      } catch (error) {
        // Handle sign-in failure (e.g., display an error message)
        console.error('Sign-in failed:', error);
      }
    } else {
      // Handle case where email or password is not provided
      console.error('Sign-in failed: Please enter your email and password');
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the sign-up page
  };

  return (
    <div className="auth-page-background">
      <div className="auth-container">
        <div className="auth-form-container">
          {/* Social media sign-in buttons */}
          <div className="auth-social-sign-in">
            <button>Facebook</button>
            <button>Google</button>
            <button>LinkedIn</button>
          </div>
          
          {/* Sign-in form */}
          <form className="auth-form" onSubmit={handleSignIn}>
            <input name="email" type="email" placeholder="Email" required />
            <input name="password" type="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
          </form>
          
          <a href="/forgot-password" className="auth-forgot-password">Forgot your password?</a>
        </div>
        
        <div className="auth-welcome-container">
          <h2>Hello, Friend!</h2>
          <p>Enter your personal details and start your journey with us</p>
          <button onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
