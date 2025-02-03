import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate("/");
  };
  const handleCreate = () => {
    navigate("/create-blog"); // Navigate to the create blog page
  };
  const goToProfile = () => {
    navigate("/user-profile");
  };

  return (
    <nav className="navbar">
      {/* Assume you have a logo or brand name here */}
      <Link to="/" className="navbar-brand">
        Memoir
      </Link>

      <div className="navbar-content">
        {user && (
          <button onClick={handleCreate} className="navbar-create">
            Create
          </button>
        )}
        {user ? (
          <div className="navbar-user">
            <button
              className="navbar-user-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {user.email || "User"}{" "}
              {/* Fallback to 'User' if name is not available */}
            </button>
            {isDropdownOpen && (
              <div className="navbar-dropdown">
                <ul>
                  <li>
                    {/* <Link to="/profile">Profile</Link> */}
                    <button onClick={goToProfile}>Profile</button>
                  </li>
                  <li>
                    <Link to="/settings">Settings</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="navbar-buttons">
            <Link to="/signin" className="navbar-link">
              Sign In
            </Link>
            <Link to="/signup" className="navbar-link">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
