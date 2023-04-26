import { useQuery } from "@tanstack/react-query";
import { cards, cards2 } from "../demoData";
import { mainAPI } from "../apis/mainAPI";
import { documentListQuery, documentListRes } from "../types";
import { AxiosResponse } from "axios";

export const useCards = (documentListQuery: documentListQuery) =>
  useQuery(["cards", documentListQuery.categoryId], () => mainAPI.getDocList(documentListQuery), {
    select: (data: AxiosResponse<documentListRes[]>) => {
      return data.data;
    }
  });


  // useQuery(["tags"], () => mainAPI.getTags("false"), {
  //   select: (data: AxiosResponse<categoryRes[]>) => {
  //     return data.data;
  //   },
  // });