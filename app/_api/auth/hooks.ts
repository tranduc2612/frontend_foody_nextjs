import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query"
import { queryKey } from "@/app/_ultis/constant"
import { fetchLogin } from "./service"

interface Error {
    name: string;
    message: string;
    stack?: string;
}

export const useLogin = (
    input: LoginPayload,
    options?: UseQueryOptions<
    Account,
    Error,
    Account,
    QueryKey
    >,
) => {
    const queryOptions: UseQueryOptions<
        Account,
        Error,
        Account,
        QueryKey
    > = {
        queryKey: [queryKey.AUTH.LOGIN,input],
        queryFn: async () => await fetchLogin(input),
        enabled: false, // Không tự động chạy query
        retry: false,
       ...options,
    }
    return useQuery<Account,Error>(queryOptions)
}