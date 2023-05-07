import Cookies from "js-cookie";

export const tokenExist = () => {
  const token = Cookies.get('token')
  if (token === undefined)
    return false;
  return (true);
};
