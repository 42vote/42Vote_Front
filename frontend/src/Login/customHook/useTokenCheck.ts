
export const useTokenExist = () => {
    const token = localStorage.getItem('token');
    if (token === "undefined" || !token)
        return false;
    return true;
}