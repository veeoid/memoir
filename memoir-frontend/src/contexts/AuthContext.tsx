// contexts/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

interface User {
  email?: string;
  username?: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    // Your existing signIn logic
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/dj-rest-auth/login/",
        { email, password }
      );
      localStorage.setItem("authToken", response.data.token);
      await fetchAndUpdateUser();
    } catch (error) {
      console.error("Sign-in error", error);
    }
  };

  const signOut = () => {
    // Your existing signOut logic
    localStorage.removeItem("authToken");
    setUser(null);
  };

  const fetchAndUpdateUser = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/user/details/",
        {
          // Corrected URL
          headers: {
            Authorization: `Token ${localStorage.getItem("authToken")}`,
          },
        }
      );
      setUser({ email: response.data.email, username: response.data.username });
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      fetchAndUpdateUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext; // Add this export statement

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
