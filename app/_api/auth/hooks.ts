
import { ResponseApi } from "@/app/_types/response";
import { fetchLogin } from "./service"

interface Error {
    name: string;
    message: string;
    stack?: string;
}

// export const useLogin = (
//     input: LoginPayload,
//     options?: UseQueryOptions<
//     Account,
//     Error,
//     Account,
//     QueryKey
//     >,
// ) => {
//     const queryOptions: UseQueryOptions<
//         Account,
//         Error,
//         Account,
//         QueryKey
//     > = {
//         queryKey: [queryKey.AUTH.LOGIN,input],
//         queryFn: async () => await fetchLogin(input),
//         enabled: false, // Không tự động chạy query
//         retry: false,
//        ...options,
//     }
//     return useQuery<Account,Error>(queryOptions)
// }

import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export const useLogin = (
	options?: UseMutationOptions<
		ResponseApi<Account>,
		Error,
		LoginPayload
	>,
) => {
	return useMutation<
		ResponseApi<Account>,
		Error,
		LoginPayload
	>({
		mutationFn: async (input:LoginPayload) => await fetchLogin(input),
		...options,
	} as UseMutationOptions<
		ResponseApi<Account>,
		Error,
		LoginPayload
	>)
}
