import { Navigate, Outlet } from "react-router-dom";
import { tokenExist } from "../util/tokenExist";

const ProtectRoute = (): React.ReactElement | null => {
    if (tokenExist() === false) {
        alert('다시 로그인 해주세요.');
        return <Navigate to ="/"/>
    }
    return <Outlet/>
};

export default ProtectRoute;