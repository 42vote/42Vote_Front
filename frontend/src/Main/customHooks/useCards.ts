import { useQuery } from "@tanstack/react-query";
import { cards } from "../demoData";

export const useCards = (tags: string[] | unknown) =>
  useQuery(["cards"], () => {
    //fetching & merging cards
    return cards;
  });
