"use client";

import { createContext, useEffect, useState } from "react";
import Products from "@/components/Products";
import Navbar from "../components/Navbar";

// Define the type for the context value
type UserContextValue = {
  category: string | null;
  setCategory: React.Dispatch<React.SetStateAction<string | null>>;
};

// Create the UserContext
export const UserContext = createContext<UserContextValue | null>(null);

export default function Home() {
  const [category, setCategory] = useState<string | null>(null);
  

  return (
    <UserContext.Provider value={{ category, setCategory }}>
      <div className="w-screen h-screen flex flex-col">
        <Navbar />
        <Products />
      </div>
    </UserContext.Provider>
  );
}
