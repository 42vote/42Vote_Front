import { customAxios, downloadAxios } from "../../Lib/customAxios";
import { CategoryOptions } from "../types";

export const getCategoryInfo = async (categoryId: number) => {
  if (categoryId) {
    const res = await customAxios().get("/category/" + categoryId);
    return res.data;
  } else return null;
};

export const postCreateCategory = (option: CategoryOptions) => {
  return customAxios().post("/category", {
    title: option.title,
    voteStart: option.voteStart!.format("YYYY-MM-DDT23:59:59Z"),
    voteExpire: option.voteEnd!.format("YYYY-MM-DDT23:59:59Z"),
    docStart: option.tagStart!.format("YYYY-MM-DDT23:59:59Z"),
    docExpire: option.tagEnd!.format("YYYY-MM-DDT23:59:59Z"),
    whitelistOnly: option.allow,
    whitelist: option.allow === true ? option.whiteList : [],
    goal: Number(option.goal),
    anonymousVote: option.anony,
    multipleVote: option.multiple
  });
};

export const closeCategoryReq = (categoryId: number) => {
  return customAxios().patch("/category/expire/" + categoryId);
}

export const deleteCategoryReq = (categoryId: number) => {
  return customAxios().delete("/category/" + categoryId);
};

export const patchCategory = (option: CategoryOptions, categoryId: number) => {
  return customAxios().patch("/category/" + categoryId, {
    title: option.title,
    voteStart: option.voteStart!.format("YYYY-MM-DDT23:59:59Z"),
    voteExpire: option.voteEnd!.format("YYYY-MM-DDT23:59:59Z"),
    docStart: option.tagStart!.format("YYYY-MM-DDT23:59:59Z"),
    docExpire: option.tagEnd!.format("YYYY-MM-DDT23:59:59Z"),
    whitelistOnly: option.allow,
    whitelist: option.whiteList,
    goal: Number(option.goal)
  });
};

export const patchCategoryOrder = async (sort: number, categoryId: string) => {
  try {
    await customAxios().patch("/category/" + categoryId, {
      sort: sort,
    });
  } catch (e: any) {
    console.log(e);
  }
};

export const getExistUser = (name: string) => {
  return customAxios().get('/user/find/' + name);
}

export const downloadCSV = async (categoryId: string) => {
    try {
        const res = await downloadAxios().get("/stat/excel/category/" + categoryId);
        return (res.data);
    } catch (e:any) {
        console.log(e);
    }
};
