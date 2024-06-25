import { useState, useEffect } from "react";

type StorageKey = {
    keyName: string;
    defaultValue: any;
}

interface User {
  id: string;
  username: string;
  email: string;
}

export interface UserStorage extends StorageKey {
    keyName: "user";
    defaultValue: User | null;
}

// @ts-ignore
export const useLocalStorage = (key: StorageKey): StorageKey["defaultValue"] => {
  const { keyName, defaultValue } = key;

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  // @ts-ignore
  const setValue = (newValue: any) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
