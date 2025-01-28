import {createBrowserRouter, RouteObject} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {UserPage} from "../pages/UserPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";

const routes: RouteObject[] = [
    {
        path: '', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
        ]
    }

];
export const router = createBrowserRouter(routes);
