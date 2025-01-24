import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";
import './BB.css';

export const BB = () => {
    // деструктуризація теми = виклик контексту
    const {theme} = useContext(ThemeContext)

    return (
        <div className={theme}>
                theme = {theme}
        </div>
    );
};