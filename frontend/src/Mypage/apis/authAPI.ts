import { customAxios } from "../../Lib/customAxios";
import { AxiosResponse } from "axios";
import { getUserMeRes } from "../types";

export const userAPI = {
  getUserMe: async () => {
    const res: AxiosResponse<getUserMeRes> = await customAxios().get("/user/me").catch();
    return res;
  },
};
