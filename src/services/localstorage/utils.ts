import { LocalStorageKey } from 'services/localstorage/types'

export const getObjectLocalStorage = <T>(key: LocalStorageKey): T | null => {
  try {
    const value = localStorage.getItem(key)
    if (value === null) {
      return null
    }
    return JSON.parse(value) as T
  } catch (err) {
    return null
  }
}

export const getStringLocalStorage = (key: LocalStorageKey): string | null => {
  try {
    return localStorage.getItem(key)
  } catch (err) {
    return null
  }
}

export const removeLocalStorage = (key: LocalStorageKey): void => {
  localStorage.removeItem(key)
}

export const setStringLocalStorage = (
  key: LocalStorageKey,
  value: string
): void => {
  localStorage.setItem(key, value)
}

export const setObjectLocalStorage = (
  key: LocalStorageKey,
  value: unknown
): void => {
  localStorage.setItem(key, JSON.stringify(value))
}
