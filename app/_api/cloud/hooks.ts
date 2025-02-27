
import { Pagination, ResponseApi, ResponseError } from "@/app/_types/response";
import { queryKey } from "@/app/_ultis/constant";
import { QueryKey, useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { uploadImageAWS } from "./service";

export const useUploadImage = (
    options?: UseMutationOptions<
		ResponseApi<String>,
		Error,
		FormData
	>
) => {
    return useMutation<
		ResponseApi<String>,
		Error,
		FormData
	>({
		mutationFn: async (input:FormData) => await uploadImageAWS(input),
		...options,
	} as UseMutationOptions<
		ResponseApi<String>,
		Error,
		FormData
	>)
}