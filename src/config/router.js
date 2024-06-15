import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Signin from '../Views/Signin/login'
import Signup from '../Views/Signup/register'
import Dashboard from '../Views/Dashboard/index'
import AddPost from '../Views/AddPost/index'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Signin />,
    },

    {
        path: "/register",
        element: <Signup />,
    },

    {
        path: "/dashboard",
        element: <Dashboard />,
    },

    {
        path: "/addPost",
        element: <AddPost />,
    },
]);

function Router() {
    return <RouterProvider router={router} />
}

export default Router;