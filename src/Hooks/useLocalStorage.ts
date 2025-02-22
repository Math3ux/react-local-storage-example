import { useState } from 'react'

interface IUseLocalStorage<T> {
    key: string
    initialValue: T
}

export const useLocalStorage = <T>({key, initialValue}: IUseLocalStorage<T>) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error)
            return initialValue
        }
    })

    const setValue = (value: T) => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    }


    return [storedValue, setValue] as const;
}
