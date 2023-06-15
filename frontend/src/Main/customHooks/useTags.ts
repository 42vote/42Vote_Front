import { useQuery } from "@tanstack/react-query";
import { mainAPI } from "../apis/mainAPI";
import { AxiosResponse } from "axios";
import { categoryRes } from "../../Types/common";

export const useTags = (expired: string) =>
  useQuery(["tags"], () => mainAPI.getTags(expired), {
    select: (data: AxiosResponse<categoryRes[]>) => {
      return data.data;
    },
  });
