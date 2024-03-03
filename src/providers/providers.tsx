"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
<ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />

      {children}
    </QueryClientProvider>
      </ChakraProvider>
  );
}