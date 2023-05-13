import { AxiosResponse } from "axios";
import { customAxios } from "../../Lib/customAxios";
import { documentListQuery, documentListRes } from "../types";

const makeQuery = (category: string, targetString: string) => {
  if (targetString !== "") return category + "=" + targetString;
  return "";
};

export const mainAPI = {
  getTags: async (expired: string) => {
    const Query: string = "?expired=" + expired;
    return await customAxios().get("/category" + Query);
  },
  getDocList: async (docListQuery: documentListQuery, pageParam: number) => {
    const Query: string =
      "?" +
      makeQuery("categoryId", docListQuery.categoryId) +
      "&" +
      makeQuery("listSize", docListQuery.listSize) +
      "&" +
      makeQuery("listIndex", pageParam.toString()) +
      "&" +
      makeQuery("myPost", docListQuery.myPost) +
      "&" +
      makeQuery("myVote", docListQuery.myVote);
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
