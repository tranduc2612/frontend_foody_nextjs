export interface ResponseApi<T>{
    message: string,
    data: T,
    error?: ResponseError;
}

export interface ResponseError extends Error{
    errors: ErrorField[]
    message: string
    statusCode: number
}

export interface ErrorField{
    field: string,
    errors: string[]
}