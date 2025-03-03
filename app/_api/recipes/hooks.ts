import { Pagination, ResponseApi, ResponseError } from "@/app/_types/response";
import {
  QueryKey,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import {
  fetchCreateRecipes,
  fetchListRecipes,
  fetchListRecipeTypes,
} from "./service";
import { queryKey } from "@/app/_ultis/constant";

export const useGetListRecipes = (
  input: GetRecipesPayload,
  options?: UseQueryOptions<
    ResponseApi<Pagination<Recipes[]>>,
    ResponseError,
    ResponseApi<Pagination<Recipes[]>>,
    QueryKey
  >,
) => {
  const queryOptions: UseQueryOptions<
    ResponseApi<Pagination<Recipes[]>>,
    ResponseError,
    ResponseApi<Pagination<Recipes[]>>,
    QueryKey
  > = {
    queryKey: [queryKey.RECIPES.GET_LIST, input],
    queryFn: async () => fetchListRecipes(input),
    ...options,
  };
  return useQuery<ResponseApi<Pagination<Recipes[]>>, ResponseError>(
    queryOptions,
  );
};

export const useGetListRecipeTypes = (
  input?: any,
  options?: UseQueryOptions<
    ResponseApi<RecipesType[]>,
    ResponseError,
    ResponseApi<RecipesType[]>,
    QueryKey
  >,
) => {
  const queryOptions: UseQueryOptions<
    ResponseApi<RecipesType[]>,
    ResponseError,
    ResponseApi<RecipesType[]>,
    QueryKey
  > = {
    queryKey: [queryKey.RECIPES.GET_LIST, input],
    queryFn: async () => fetchListRecipeTypes(),
    ...options,
  };
  return useQuery<ResponseApi<RecipesType[]>, ResponseError>(queryOptions);
};

export const useCreateRecipe = (
  options?: UseMutationOptions<ResponseApi<Recipes>, Error, RecipesPayload>,
) => {
  return useMutation<ResponseApi<Recipes>, Error, RecipesPayload>({
    mutationFn: async (input: RecipesPayload) =>
      await fetchCreateRecipes(input),
    ...options,
  } as UseMutationOptions<ResponseApi<Recipes>, Error, RecipesPayload>);
};
