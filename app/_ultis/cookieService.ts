const COOKIE_KEYS = {
    ACCESS_TOKEN: 'ACCESS_TOKEN',
    INFO_USER: 'INFO_USER',
  };
  
  // Hàm để lấy dữ liệu từ cookie
  const get = <T>(key: string): T | undefined => {
    if (typeof document !== 'undefined') {
      const cookieString = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${key}=`));
      if (cookieString) {
        const value = cookieString.split('=')[1];
        try {
          return value ? JSON.parse(decodeURIComponent(value)) : undefined;
        } catch {
          return (value as unknown as T) || undefined;
        }
      }
    }
  };
  
  // Hàm để lưu dữ liệu vào cookie
  const set = (key: string, value: any, days = 7): void => {
    if (typeof document !== 'undefined') {
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      document.cookie = `${key}=${encodeURIComponent(
        JSON.stringify(value)
      )}; expires=${expires}; path=/`;
    }
  };
  
  // Hàm để xóa tất cả các cookie được định nghĩa trong COOKIE_KEYS
  const clearAll = (): void => {
    if (typeof document !== 'undefined') {
      Object.values(COOKIE_KEYS).forEach((key) => {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
      });
    }
  };
  
  export const cookieService = {
    COOKIE_KEYS,
    get,
    set,
    clearAll,
  };
  