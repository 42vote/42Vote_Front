import { authAPI } from "../apis/authAPI";

export const tokenExist = async () => {
  try {
    await authAPI.getUserMe()
  } catch {
    return (false);
  }
  return (true);
};
