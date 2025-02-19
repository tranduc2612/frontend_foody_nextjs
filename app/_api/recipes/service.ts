import client from "@/app/_axios"
import { Pagination, ResponseApi, ResponseError } from "@/app/_types/response"

export const fetchListRecipes = async (input: GetRecipesPayload): Promise<ResponseApi<Pagination<Recipes[]>>> => {
    const recipes = client<ResponseApi<Pagination<Recipes[]>>>(`/recipes/list?pageIndex=${Number(input.pageIndex)}&pageCount=${Number(input.pageCount)}`, {
        method: 'GET'
    })
    return recipes
}