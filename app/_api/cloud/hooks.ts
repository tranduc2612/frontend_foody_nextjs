
import { Pagination, ResponseApi, ResponseError } from "@/app/_types/response";
import { queryKey } from "@/app/_ultis/constant";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { uploadImageAWS } from "./service";

export const useUploadImage = (
    input: Blob,
    options?: UseQueryOptions<
    ResponseApi<string>,
    ResponseError,
    ResponseApi<string>,
    QueryKey
    >,
) => {
    const queryOptions: UseQueryOptions<
        ResponseApi<string>,
        ResponseError,
        ResponseApi<string>,
        QueryKey
    > = {
        queryKey: [queryKey.CLOUD.UPLOAD_IMAGE,input],
        queryFn: async () => uploadImageAWS(input),
       ...options,
    }
    return useQuery<ResponseApi<string>,ResponseError>(queryOptions)
}