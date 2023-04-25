import { useQuery } from "@tanstack/react-query";
import { mainAPI } from "../apis/mainAPI";
import { AxiosResponse } from "axios";
import { tags } from "../demoData";

// export const useTags = () =>
//   useQuery(["tags"], () => mainAPI.getTags("false"), {
//     select: (data: AxiosResponse<string[]>) => {
//       console.log(data.data);
//       console.log(data);
//       console.log(typeof data.data);
//       return tags;
//     },
//   });

export const useTags = () =>
  useQuery(["tags"], () => {
    return tags
  });
