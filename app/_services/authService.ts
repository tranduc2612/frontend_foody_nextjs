import axios from "axios"
import { localStorageService } from "@/app/_ultis/localStorageService";

const authService = {
    async refreshToken(){
        try {
            const accessToken = localStorageService.get<string>(
                localStorageService.LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
            )
            const token = await axios.post('https://dummyjson.com/auth/refresh',{
                body: JSON.stringify({
                refreshToken: accessToken,
                expiresInMins: 30, // optional, defaults to 60
              })})

              return token
            
        } catch (error) {
            
        }
    },

    async logout(){
        localStorageService.clearAll()
    }


}

export default authService;