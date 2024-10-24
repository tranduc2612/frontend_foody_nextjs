const LOCAL_STORAGE_KEYS = {
    ACCESS_TOKEN: "ACCESS_TOKEN",
    INFO_TOKEN: "INFO_TOKEN",
}
const get = <T>(key: string): T | undefined => {
	if (typeof window !== 'undefined' && localStorage) {
		const rs = localStorage.getItem(key)
		try {
			// attempt to return parsed object
			return rs ? JSON.parse(rs) : undefined
		} catch {
			// return default as string otherwise
			return (rs as T) || undefined
		}
	}
}

const set = (key: string, value?: string): void => {
	if (typeof window !== 'undefined' && localStorage) {
		localStorage.setItem(key, value ?? '')
	}
}
const clearAll = (): void => {
	if (window && localStorage) {
		localStorage.clear()
	}
}

export const localStorageService = {
	LOCAL_STORAGE_KEYS,
	get,
	set,
	clearAll,
}