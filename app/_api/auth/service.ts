import client from "@/app/_axios";
import { localStorageService } from "@/app/_ultis/localStorageService";

export const fetchLogin = async (data: LoginPayload): Promise<Account> => {
    const tokenInfo = await client<Account>('/auth/login', {
        method: 'POST',
        data
    })
    if(tokenInfo){
        localStorageService.set(localStorageService.LOCAL_STORAGE_KEYS.ACCESS_TOKEN, tokenInfo.token)
    }else{
        localStorageService.clearAll();
    }

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