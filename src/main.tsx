import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {MainLayout} from "./layouts/MainLayout.tsx";
import {UsersPage} from "./pages/UsersPage.tsx";
import {CartPage} from "./pages/CartPage.tsx";


const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>, children:[
                    {path:':id/carts', element: <CartPage/>}
                ]}
        ]
    },
])

createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>)
