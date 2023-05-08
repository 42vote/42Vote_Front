import React from "react";
import MyPage from "./page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

const MyPageIndex: React.FC = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
        <MyPage/>
    </QueryClientProvider>
  );
};

export default MyPageIndex;
