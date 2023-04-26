import { customAxios } from "../../lib/customAxios";
import { documentListQuery } from "../types";

export const mainAPI = {
  getTags: (expired: string) => {
    const Query: string = "?expired=" + expired; 
    return customAxios().get("/category" + Query);
  },
  getDocList: (docListQuery: documentListQuery) => {
    const Query: string =
      "?categoryId=" +
      docListQuery.categoryId +
      "&listSize=" +
      docListQuery.listSize +
      "&listIndex=" +
      docListQuery.listIndex +
      "&myPost=" +
      docListQuery.myPost +
      "&myVote=" +
      docListQuery.myVote;
    return customAxios().get("/document" + Query);
  },
};
