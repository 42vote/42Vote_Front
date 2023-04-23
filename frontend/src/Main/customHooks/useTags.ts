import { useQuery } from "@tanstack/react-query";
import { tags } from "../demoData";

export const useTags = () =>
  useQuery(["tags"], () => {
    //fetching tags
    return tags;
  });
