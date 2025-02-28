
import { Pagination, ResponseApi, ResponseError } from "@/app/_types/response";
import { queryKey } from "@/app/_ultis/constant";
import { QueryKey, useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { uploadImageAWS } from "./service";

export const useUploadImage = (
    options?: UseMutationOptions<
		string,
		Error,
		FormData
	>
) => {
    return useMutation<
		string,
		Error,
		FormData
	>({
		mutationFn: async (input:FormData) => await uploadImageAWS(input),
		...options,
	} as UseMutationOptions<
		string,
		Error,
		FormData
	>)
}