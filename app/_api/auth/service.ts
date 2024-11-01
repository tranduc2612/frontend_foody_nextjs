import client from "@/app/_axios";
import { ResponseApi } from "@/app/_types/response";

export const fetchLogin = async (data: LoginPayload): Promise<ResponseApi<Account | null>> => {
    try {
        const tokenInfo = await client<Account>('/auth/login', {
            method: 'POST',
            data
        })
        return {
            message: 'success',
            data: tokenInfo
        }
    } catch (error) {
        return {
            message: 'error',
            data: null
        }
    }
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