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

    // Ensure proper typing and null checking
    const email = formData.get('email');
    const password = formData.get('password');

    if (typeof email === 'string' && typeof password === 'string' && email && password) {
      // Assuming successful authentication for now
      signIn(email);  // Update global state with the user's name
      navigate('/'); // Navigate to the homepage after successful sign-in
    } else {
      // Handle sign-in failure
      console.error('Sign-in failed: Invalid credentials');
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
