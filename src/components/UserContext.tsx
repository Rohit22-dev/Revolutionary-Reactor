'use client'
import React, { createContext, useState } from "react";

type UserContextValue = {
  category: string | null;
  setCategory: React.Dispatch<React.SetStateAction<string | null>>;
};

export const UserContext = createContext<UserContextValue | null>(null);

type UserProviderProps = {
  children: React.ReactNode; // Add the children prop to the type definition
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [category, setCategory] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ category, setCategory }}>
      {children}
    </UserContext.Provider>
  );
};
