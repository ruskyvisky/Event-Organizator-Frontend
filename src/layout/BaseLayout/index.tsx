"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/NavBar/navbar";
type Props = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: Props) => {

  return (
  <>       <Navbar/>
          {children}
          </>

     
  );
};

export default BaseLayout;