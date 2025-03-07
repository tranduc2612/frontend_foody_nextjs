import client from "@/app/_axios";
import { Pagination, ResponseApi } from "@/app/_types/response";

export const fetchListRecipes = async (
  input: GetRecipesPayload,
): Promise<ResponseApi<Pagination<Recipes[]>>> => {
  const recipes = client<ResponseApi<Pagination<Recipes[]>>>(
    `/recipes/list?pageIndex=${Number(input.pageIndex)}&pageCount=${Number(input.pageCount)}`,
    {
      method: "GET",
    },
  );
  return recipes;
};

export const fetchListRecipeTypes = async (): Promise<
  ResponseApi<RecipesType[]>
> => {
  const recipeTypes = client<ResponseApi<RecipesType[]>>(
    `/recipes/list-recipe-types`,
    {
      method: "GET",
    },
  );
  return recipeTypes;
};

export const fetchCreateRecipes = async (
  data: RecipesPayload,
): Promise<ResponseApi<Pagination<Recipes[]>>> => {
  const recipes = client<ResponseApi<Pagination<Recipes[]>>>(
    `/recipes/create`,
    {
      method: "POST",
      data,
    },
  );
  return recipes;
};
