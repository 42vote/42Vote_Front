import { AxiosResponse } from "axios";
import { customAxios } from "../../Lib/customAxios";
import {
  documentListQuery,
  documentListRes,
} from "../types";

export const mainAPI = {
  getTags: async (expired: string) => {
    const Query: string = "?expired=" + expired;
    return await customAxios().get("/category" + Query);
  },
  getDocList: async (
    docListQuery: documentListQuery,
    pageParam: number
  ) => {
    const Query: string =
      "?categoryId=" +
      docListQuery.categoryId +
      "&listSize=" +
      docListQuery.listSize +
      "&listIndex=" +
      pageParam +
      "&myPost=" +
      docListQuery.myPost +
      "&myVote=" +
      docListQuery.myVote;
    const res: AxiosResponse<documentListRes[]> = await customAxios().get(
      "/document" + Query
    );
    return { cardArrary: res.data, currentPage: pageParam };
  },
  getDocSize: async (categoryId: string) => {
    const res = await customAxios().get("/category/size/" + categoryId);
    return res.data;
  },
};
