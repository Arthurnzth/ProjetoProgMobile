export const storageGet = (key) => localStorage.getItem(key);
export const storageSave = (key, value) => localStorage.setItem(key, value);
export const storageRemove = (key) => localStorage.removeItem(key);
