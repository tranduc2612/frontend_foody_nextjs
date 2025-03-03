import client from "@/app/_axios";
import { ResponseApi } from "@/app/_types/response";

export const fetchListSeasons = async (): Promise<ResponseApi<Season[]>> => {
  const recipes = client<ResponseApi<Season[]>>(`/common/list-season`, {
    method: "GET",
  });
  return recipes;
};
