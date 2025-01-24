import {createContext} from "react";

// типізація
type ContextValueType = {
    theme: string,
    changeTheme: (theme: string) => void
}

//дефолтне значення
const defaultValue: ContextValueType = {
    theme: 'light',
    changeTheme: (theme: string) => {
        console.log(theme)
    }
};

// створення контексту <типізація> (дефолтне значення)
export const ThemeContext = createContext<ContextValueType>(defaultValue)