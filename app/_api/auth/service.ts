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