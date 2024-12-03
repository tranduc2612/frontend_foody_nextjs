"use client";
import { localStorageService } from "@/app/_ultis/localStorageService";
import * as React from "react";
import { cookieService } from "../_ultis/cookieService";

export interface AuthContext {
  isAuthenticated: boolean;
  token: string | null;
  infoUser: Account | null;
  setLogin: (token: string, infoUser: Account)=>boolean;
  setLogout: ()=>boolean;
}

const AuthContext = React.createContext<AuthContext | null>(null);
const BASE_USER = {
  id: 0,
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  token: "",
  accessToken: "",
  refreshToken: "",
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const accessTokenLocal =
    cookieService.get<string>(
      cookieService.COOKIE_KEYS.ACCESS_TOKEN
    ) || null;
  const infoUserToken =
    cookieService.get<Account>(
      cookieService.COOKIE_KEYS.INFO_USER
    ) || null;

  const [token, setToken] = React.useState<string | null>(accessTokenLocal);
  const [infoUser, setInfoUser] = React.useState<Account | null>(infoUserToken);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  

  React.useEffect(() => {
    setToken(accessTokenLocal);
    setInfoUser(infoUserToken);
    setIsAuthenticated(!!token);
  }, []);

  const setLogin = (token: string, infoUser: Account): boolean => {
    if(!token){
      return false
    }
    // localStorageService.set(
    //   localStorageService.LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
    //   token
    // );
    cookieService.set(cookieService.COOKIE_KEYS.ACCESS_TOKEN,token,7)
    setToken(token);
    if(!infoUser){
      return false
    }
    // localStorageService.set(
    //   localStorageService.LOCAL_STORAGE_KEYS.INFO_USER,
    //   JSON.stringify(infoUser)
    // );
    cookieService.set(cookieService.COOKIE_KEYS.INFO_USER,infoUser,7)

    setInfoUser(infoUser);
    setIsAuthenticated(!!token);

    return true;
  };

  const setLogout = () => {
    setToken(null);
    setInfoUser(null);
    setIsAuthenticated(false);
    // localStorageService.clearAll();
    cookieService.clearAll()

    return true
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, infoUser, setLogin, setLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
