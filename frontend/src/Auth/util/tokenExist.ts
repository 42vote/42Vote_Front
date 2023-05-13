import Cookies from "js-cookie";

export const tokenExist = () => {
  const rtoken = Cookies.get('rtoken')
  if (rtoken === undefined)
    return false;
  return (true);
};
