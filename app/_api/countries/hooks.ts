import { Pagination, ResponseApi, ResponseError } from "@/app/_types/response";
import { queryKey } from "@/app/_ultis/constant";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetchListCountries } from "./service";

export const useGetListCountries = (
    input?: any,
    options?: UseQueryOptions<
    ResponseApi<Country[]>,
    ResponseError,
    ResponseApi<Country[]>,
    QueryKey
    >,
) => {
    const queryOptions: UseQueryOptions<
        ResponseApi<Country[]>,
        ResponseError,
        ResponseApi<Country[]>,
        QueryKey
    > = {
        queryKey: [queryKey.RECIPES.GET_LIST_COUNTRIES,input],
        queryFn: async () => fetchListCountries(),
       ...options,
    }
    return useQuery<ResponseApi<Country[]>,ResponseError>(queryOptions)
}