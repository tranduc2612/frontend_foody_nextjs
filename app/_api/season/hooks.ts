import { ResponseApi, ResponseError } from "@/app/_types/response";
import { queryKey } from "@/app/_ultis/constant";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetchListSeasons } from "./service";

export const useGetListSeasons = (
  input?: any,
  options?: UseQueryOptions<
    ResponseApi<Season[]>,
    ResponseError,
    ResponseApi<Season[]>,
    QueryKey
  >,
) => {
  const queryOptions: UseQueryOptions<
    ResponseApi<Season[]>,
    ResponseError,
    ResponseApi<Season[]>,
    QueryKey
  > = {
    queryKey: [queryKey.RECIPES.GET_LIST_SEASON, input],
    queryFn: async () => fetchListSeasons(),
    ...options,
  };
  return useQuery<ResponseApi<Season[]>, ResponseError>(queryOptions);
};
