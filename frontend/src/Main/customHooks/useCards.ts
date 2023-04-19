import { useQuery } from "@tanstack/react-query";
import { cards, cards2 } from "../demoData";

export const useCards = (tags: string[] | unknown, page: number) =>
  useQuery([{ tags } + "cards"], () => {
    //fetching & merging cards
    if (page === 1) return cards2;
    else return cards;
  });
