import {createBrowserRouter} from "react-router";
import {UsersPage} from "../pages/usersPage/UsersPage.tsx";
import {PostsPage} from "../pages/postsPage/PostsPage.tsx";
import {CommentsPage} from "../pages/commentsPage/CommentsPage.tsx";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {ComplexPage} from "../pages/complexPage/ComplexPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'complex', element: <ComplexPage/>}
        ]
    },
]);