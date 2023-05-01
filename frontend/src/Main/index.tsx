import MainPage from "./page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    }
  }
});

const MainIndex: React.FC = () => {
  const token = localStorage.getItem('token');
  if (token === "undefined" || !token){
    return <Navigate to="/" replace />
  }
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
};

export default MainIndex;
