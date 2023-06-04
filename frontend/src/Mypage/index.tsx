import React from "react";
import MyPage from "./page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AbsolutedDiv } from "../Main/styles/styleComponents";

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
      <AbsolutedDiv>
        <MyPage />
      </AbsolutedDiv>
    </QueryClientProvider>
  );
};

export default MyPageIndex;
