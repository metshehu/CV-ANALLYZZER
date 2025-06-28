import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const users: User[] = [
  {
    email: "getuartpacarizi@gmail.com",
    password: "Getuart"
  },
  {
    email: "metshehu@gmail.com",
    password: "Meti"
  },
  {
    email: "nadidida@gmail.com",
    password: "Nadi"
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    return new Promise((resolve) => {
      const user = users.find(u => u.email === email && u.password === password);
      
      if (user) {
        setIsAuthenticated(true);
        resolve({ success: true, message: "Successfully signed in!" });
      } else {
        resolve({ success: false, message: "Invalid email or password" });
      }
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 