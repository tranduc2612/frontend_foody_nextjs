"use client";
import * as React from "react";
import { localStorageService } from "@/app/_ultis/localStorageService";
import { fetchLogin } from "@/app/_api/auth/service";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export interface AuthContext {
  isAuthenticated: boolean;
  logout: () => Promise<void>;
  token: string | null;
}

const AuthContext = React.createContext<AuthContext | null>(null);
const queryClient = new QueryClient();

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = React.useState<string | null>(
    localStorageService.get<string>(
      localStorageService.LOCAL_STORAGE_KEYS.ACCESS_TOKEN
    ) || null
  );
  const isAuthenticated = !!token;

  const logout = React.useCallback(async () => {
    // await sleep(250)
    //call api
    localStorageService.clearAll();
    setToken(null);
  }, []);

  React.useEffect(() => {
    setToken(
      localStorageService.get<string>(
        localStorageService.LOCAL_STORAGE_KEYS.ACCESS_TOKEN
      ) || null
    );
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, logout }}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
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
