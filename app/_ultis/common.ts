import dayjs, { Dayjs } from "dayjs";
import { ResponseError } from "../_types/response";

export function handleResponseError (responseError: ResponseError){
    const errorInfo: { [key: string]: string } = {}
    if(responseError.statusCode === 400){
        console.log(responseError);
        
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


export function formatDayjsToString(date: Dayjs | null){
    if(!date){
        return undefined
    }
    try{
        const formattedDate = dayjs(date);
        return formattedDate.format("DD/MM/YYYY")
    }catch(error){
        console.log(error);
        return undefined
    }
}

export function upperCaseString(str: string){
    if(str){
        return str.toUpperCase()
    }
}