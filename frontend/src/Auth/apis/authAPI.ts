import { customAxios } from "../../Lib/customAxios";
import { AxiosResponse } from "axios";

interface getMeRes {
  intraId: string;
  coalition: string;
  wallet: number;
  isAdmin: boolean;
}

export const authAPI = {
  getMe: async () => {
    const res: AxiosResponse<getMeRes> = await customAxios().get("/user/me");
    return {MyData: res.data};
  },
};
