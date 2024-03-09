"use client"
import React from "react";
import EventLayout from "@/layout/BaseLayout";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return <EventLayout >{children}</EventLayout>;
};

export default layout;