import {Menu} from "../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className="m-4">
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};