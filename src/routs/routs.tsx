import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../components/layouts/MainLayout.tsx";
import {UsersPage} from "../components/pages/UsersPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>}
        ]
    },
])