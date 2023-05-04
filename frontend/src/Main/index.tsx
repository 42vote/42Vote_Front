import MainPage from "./page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    }
  }
});

const MainIndex: React.FC = () => {
  const token = Cookies.get('token');
  if (token === "undefined" || !token){
    window.alert(token);
    // return <Navigate to="/" replace />
  }
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  );
};

export default MainIndex;
