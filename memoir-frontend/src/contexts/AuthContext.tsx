// contexts/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define a type for the user. Adjust according to your user model.
interface User {
  email: string;
  // Add other user properties as needed
}

// Define the shape of the context's data
interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

// Create the context with an initial value
const AuthContext = createContext<AuthContextType>(null!);

// AuthProvider component
interface AuthProviderProps {
  children: ReactNode; // This type allows any valid React child
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    // Implement your sign-in logic here
    setUser({ email }); // Assuming a successful sign-in
  };

  const signOut = () => {
    // Implement sign-out logic
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Optionally export AuthContext for direct access
export { AuthContext };