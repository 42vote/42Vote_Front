import { useQuery } from "@tanstack/react-query";
import { userAPI } from "../apis/authAPI";
import { AxiosResponse } from "axios";
import { getUserMeRes } from "../types";

export const useUser = () =>
  useQuery(["user"], () => userAPI.getUserMe(), {
    select: (data: AxiosResponse<getUserMeRes>) => {
      return data.data;
    },
  });
