import { authAPI } from "../apis/authAPI";

export const tokenExist = async () => {
  const res = await authAPI.getMe().catch()
  if (res)
    return (true)
  return (false)
};
