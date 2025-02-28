import client from "@/app/_axios"
import { Pagination, ResponseApi, ResponseError } from "@/app/_types/response"
export const fetchListCountries = async (): Promise<ResponseApi<Country[]>> => {
    const recipes = client<ResponseApi<Country[]>>(`/common/list-countries`, {
        method: 'GET'
    })
    return recipes
}