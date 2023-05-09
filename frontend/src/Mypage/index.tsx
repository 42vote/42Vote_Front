import React from "react";
import MyPage from "./page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AbsolutedDiv } from "../Main/styles/styleComponents";
import FixedTop from "../Etc/FixedTop";

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
      <FixedTop />
      <AbsolutedDiv>
        <MyPage />
      </AbsolutedDiv>
    </QueryClientProvider>
  );
};

export default MyPageIndex;
