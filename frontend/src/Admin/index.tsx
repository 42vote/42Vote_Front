import { useTags } from "../Main/customHooks/useTags";
import Admin from "./pages";

const AdminIndex = () => {
  const { isLoading } = useTags("all");
  return <>{isLoading ? null : <Admin />}</>;
};

export default AdminIndex;
