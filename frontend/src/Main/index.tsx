import MainPage from "./page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AbsolutedDiv } from "./styles/styleComponents";
import FixedTop from "../Etc/FixedTop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});

const MainIndex: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AbsolutedDiv>
        <MainPage />
      </AbsolutedDiv>
    </QueryClientProvider>
  );
};

export default MainIndex;
