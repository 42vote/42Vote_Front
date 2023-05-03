import Cookies from "js-cookie"; 

export const useTokenExist = () => {
    const token = Cookies.get('token');
    if (token === "undefined" || !token)
        return false;
    return true;
}