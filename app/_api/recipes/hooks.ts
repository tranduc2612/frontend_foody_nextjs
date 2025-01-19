import { Pagination, ResponseApi, ResponseError } from "@/app/_types/response";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetchListRecipes } from "./service";
import { queryKey } from "@/app/_ultis/constant";

export const useGetListRecipes = (
    input: GetRecipesPayload,
    options?: UseQueryOptions<
    ResponseApi<Pagination<Recipes>>,
    ResponseError,
    ResponseApi<Pagination<Recipes>>,
    QueryKey
    >,
) => {
    const queryOptions: UseQueryOptions<
        ResponseApi<Pagination<Recipes>>,
        ResponseError,
        ResponseApi<Pagination<Recipes>>,
        QueryKey
    > = {
        queryKey: [queryKey.RECIPES.GET_LIST,input],
        queryFn: async () => fetchListRecipes(input),
       ...options,
    }
    return useQuery<ResponseApi<Pagination<Recipes>>,ResponseError>(queryOptions)
}