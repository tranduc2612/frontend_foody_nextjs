import { ResponseError } from "../_types/response";

export function handleResponseError (responseError: ResponseError){
    const errorInfo: { [key: string]: string } = {}
    if(responseError.statusCode === 400){
        if(responseError.errors?.length > 0){
            responseError.errors.forEach(error=>{
            if (error.field) {
                errorInfo[error.field] = error.errors[0];
            }
            })
        }
    }
    return errorInfo
}