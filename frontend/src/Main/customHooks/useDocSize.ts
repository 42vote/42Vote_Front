import { useQuery } from "@tanstack/react-query";
import { mainAPI } from "../apis/mainAPI";

export const useDocSize = (categoryId: string) =>
  useQuery(["DocSize", categoryId], () => mainAPI.getDocSize(categoryId));