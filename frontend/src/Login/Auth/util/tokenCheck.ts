
export const tokenCheck = ():boolean => {
    if (sessionStorage.getItem("token"))
        return true;
    return false;
}