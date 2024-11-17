import client from "@/app/_axios";
import { ResponseApi, ResponseError } from "@/app/_types/response";

export const fetchLogin = async (data: LoginPayload): Promise<ResponseApi<Account> | ResponseError> => {
    const tokenInfo = await client<ResponseApi<Account> | ResponseError>('/auth/login', {
        method: 'POST',
        data
    })
    return tokenInfo
}

export const fetchRegister = async (data: RegisterPayload): Promise<ResponseApi<Account> | ResponseError> => {
    const tokenInfo = await client<ResponseApi<Account> | ResponseError>('/auth/register', {
        method: 'POST',
        data
    })
    return tokenInfo
}

export const refreshToken = async () => {
    try {
        // const accessToken = localStorageService.get<string>(
        //     localStorageService.LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
        // )
        // const token = await axios.post('https://dummyjson.com/auth/refresh',{
        //     body: JSON.stringify({
        //     refreshToken: accessToken,
        //     expiresInMins: 30, // optional, defaults to 60
        //   })})

        //   return token
        
    } catch (error) {
        
    }
}

export const logout = async () => {
    // localStorageService.clearAll()
}