import axios, { AxiosRequestConfig } from "axios";
import { localStorageService } from "@/app/_ultis/localStorageService";
import config from "@/app/_ultis/config";
import {jwtDecode} from 'jwt-decode';
import { refreshToken, logout } from "@/app/_api/auth/service";
axios.defaults.baseURL = config.apiUrl

const client = async <T>(
    endpoint: string,
    requestConfig: AxiosRequestConfig,
) => {
    const accessToken = localStorageService.get<string>(
        localStorageService.LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
    )

    const getHttpMethod = (data: string, method: string) => {
        if (method) return method
        if (data) return 'POST'
        return 'GET'
    }    

    axios.defaults.headers.common['Authorization'] =
        accessToken ? `Bearer ${accessToken}` : undefined

    if (accessToken) {
        const decodedToken = jwtDecode(accessToken) as { iat: number, exp: number }

        const timeDifferenceInSeconds = (decodedToken.exp * 1000 - decodedToken.iat * 1000) / 1000;

        if (decodedToken && timeDifferenceInSeconds > (60 * 60)) {
            await refreshToken()
        }
    }

    return axios<T>(endpoint, {
        method: getHttpMethod(requestConfig.data, requestConfig.method ?? ''),
        data: requestConfig.data,
        params: requestConfig.params,
    })
        .then(response => {
            if (response.status === 401) {
                return Promise.reject(new Error('Please re-authenticate.'))
            }
            return response.data
        })
        .catch(async error => {
            if (error.response.status === 401) {
                //refresh token, if failed, logout
                try {
                    await refreshToken()
                } catch (error) {
                    logout()
                }
            }
            if (error.response) {
                return Promise.reject(error.response.data)
            } else if (error.request) {
                return Promise.reject(error.request)
            } else {
                return Promise.reject(error.message)
            }
        })
}

export default client