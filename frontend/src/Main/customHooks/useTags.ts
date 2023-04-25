import { useQuery } from "@tanstack/react-query";
import { mainAPI } from "../apis/mainAPI";
import { AxiosResponse } from "axios";
import { tags } from "../demoData";
import { categoryRes } from "../types";

export const useTags = () =>
  useQuery(["tags"], () => mainAPI.getTags("false"), {
    select: (data: AxiosResponse<categoryRes[]>) => {
      return data.data;
    },
  });

// export const useTags = () =>
//   useQuery(["tags"], () => {
//     return tags
//   });
