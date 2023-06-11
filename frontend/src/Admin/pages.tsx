import { AdminContainer } from "./styles/styledComponents";
import SelectedCategoryInfo from "./components/SelectedCategoryInfo";
import AdminCategoryList from "./components/AdminCategoryList";

const Admin = () => {
  return (
    <AdminContainer>
      <AdminCategoryList />
      <SelectedCategoryInfo />
    </AdminContainer>
  );
};

export default Admin;
