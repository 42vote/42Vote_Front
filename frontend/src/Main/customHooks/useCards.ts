import { useInfiniteQuery } from "@tanstack/react-query";
import { mainAPI } from "../apis/mainAPI";
import { documentListQuery } from "../types";

export const useCards = (documentListQuery: documentListQuery) => {
  const {
    data: getCards,
    isSuccess: getCardsIsSuccess,
    hasNextPage: getNextPageIsPossible,
    fetchNextPage: getNextPage,
  } = useInfiniteQuery(
    ["cardsInfin", documentListQuery.categoryId],
    ({ pageParam = 0 }) => mainAPI.getDocList(documentListQuery, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.currentPage < 2) return lastPage.currentPage + 1;
        return undefined;
      },
      getPreviousPageParam: (firstPage, allPages) => {
        if (firstPage.currentPage > 0) return firstPage.currentPage - 1;
        return undefined;
      },
    }
  );
  return { getCards, getCardsIsSuccess, getNextPageIsPossible, getNextPage };
};
