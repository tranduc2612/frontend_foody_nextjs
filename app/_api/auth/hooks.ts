import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query"
import { queryKey } from "@/app/_ultis/constant"
import { fetchLogin } from "./service"

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
        queryFn: async () => {
            // Ensure fetchLogin returns an Account object
            const account: Account = await fetchLogin(input) 
            return account
        },
       ...options,
    }
    return useQuery<Account,Error>(queryOptions)
}