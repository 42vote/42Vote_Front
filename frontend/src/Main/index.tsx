import MainPage from "./page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    }
  }
});

const MainIndex: React.FC = () => {
  const tokenExist = Cookies.get('token') !== undefined ? true : false;
  if (!tokenExist)
    return <Navigate to="/" replace />

  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
};

export default MainIndex;
