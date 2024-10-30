"use client";
import { localStorageService } from "@/app/_ultis/localStorageService";
import * as React from "react";
import { fetchLogin } from "../_api/auth/service";

export interface AuthContext {
  isAuthenticated: boolean;
  token: string | null;
  infoUser: Account | null;
  setLogin: (token: string, infoUser: Account)=>void;
  setLogout: ()=>void;
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
    localStorageService.get<string>(
      localStorageService.LOCAL_STORAGE_KEYS.ACCESS_TOKEN
    ) || null;
  const infoUserToken =
    localStorageService.get<Account>(
      localStorageService.LOCAL_STORAGE_KEYS.INFO_USER
    ) || null;

  const [token, setToken] = React.useState<string | null>(accessTokenLocal);
  const [infoUser, setInfoUser] = React.useState<Account | null>(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    setToken(accessTokenLocal);
    setInfoUser(infoUserToken);
    setIsAuthenticated(!!token);
  }, []);

  const setLogin = async (token: string, infoUser: Account) => {
    if(!token){
      return
    }
    localStorageService.set(
      localStorageService.LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
      token
    );
    setToken(token);
    if(!infoUser){
      return
    }
    localStorageService.set(
      localStorageService.LOCAL_STORAGE_KEYS.INFO_USER,
      JSON.stringify(infoUser)
    );
    setInfoUser(infoUser);
    setIsAuthenticated(!!token);
  };

  const setLogout = async () => {
    setToken(null);
    setInfoUser(null);
    setIsAuthenticated(false);
    localStorageService.clearAll();
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
