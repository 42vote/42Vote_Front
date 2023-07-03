import { useInfiniteQuery } from "@tanstack/react-query";
import { mainAPI } from "../apis/mainAPI";
import { documentListQuery } from "../types";

export const useCards = (
  documentListQuery: documentListQuery,
  docSize: number
) => {
  const {
    data: getCards,
    isSuccess: getCardsIsSuccess,
    hasNextPage: getNextPageIsPossible,
    fetchNextPage: getNextPage,
  } = useInfiniteQuery(
    ["cardsInfin", documentListQuery],
    ({ pageParam = 0 }) => mainAPI.getDocList(documentListQuery, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.currentPage < docSize) return lastPage.currentPage + 1;
        return undefined;
      },
    }
  );
  return { getCards, getCardsIsSuccess, getNextPageIsPossible, getNextPage };
};
