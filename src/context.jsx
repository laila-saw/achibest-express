import { useEffect } from "react";
import { createContext, useReducer } from "react"

export const ThemeContext = createContext();

const INITIAL_STATE = { darkMode: JSON.parse(localStorage.getItem("theme")) || false };
const themeReducer = (state, action) => {
    switch (action.type) {
        case "LIGHT":
            return { darkMode: false };
        case "DARK":
            return { darkMode: true };
        default:
            return state;
    };
}
export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE)
    useEffect(() => {
        localStorage.setItem("theme",JSON.stringify(state.darkMode))
    }, [state.darkMode])
    
    return (
        <ThemeContext.Provider value={{ state, dispatch }} >
            {
                props.children
            }
        </ThemeContext.Provider>
    );
}


