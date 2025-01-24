import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";

export const AA = () => {
    // деструктуризація зміни теми = виклик контексту
    const {changeTheme} = useContext(ThemeContext);
    // хендлери для світлої і темної теми
    const handlerLight = () => {
        changeTheme('light')
    };
    const handlerDark = () => {
        changeTheme('dark')
    };
    return (
        <div> AA
            <button onClick={handlerLight}>light</button>
            <button onClick={handlerDark}>Dark</button>
        </div>
    );
};