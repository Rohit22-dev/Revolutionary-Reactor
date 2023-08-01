// page.tsx
import React from "react";
import Products from "@/components/Products";
import Navbar from "@/components/Navbar";
import { UserProvider } from "@/components/UserContext";

const Page = () => {
  return (
    <UserProvider>
      <div className="w-screen h-screen flex flex-col">
        <Navbar />
        <Products />
      </div>
    </UserProvider>
  );
};

export default Page;
