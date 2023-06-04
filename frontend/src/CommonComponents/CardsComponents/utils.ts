import { documentListQuery } from "../../Main/types";
import { responsiveVariable } from "../../Main/types";

export const getShownCardsNum = (responsiveVar: responsiveVariable) => {
  if (responsiveVar.isFiveCards) return 5;
  if (responsiveVar.isFourCards) return 4;
  if (responsiveVar.isThreeCards) return 3;
  if (responsiveVar.isTwoCards) return 2;
  return 1;
};

export const myPostListQuery: documentListQuery = {
  categoryId: "0",
  listSize: "5",
  myPost: "true",
  myVote: "false",
};
export const myVoteListQuery: documentListQuery = {
  categoryId: "0",
  listSize: "5",
  myPost: "false",
  myVote: "true",
};

export const documentApiQuery = (selectedTag: string, myPost: string, myVote: string) => {
  const resultQuery:documentListQuery = {
    categoryId: selectedTag,
    listSize: "5",
    myPost: myPost,
    myVote: myVote
  }
  return (resultQuery)
};
