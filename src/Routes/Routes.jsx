import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import LogIn from "../pages/LogIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/blog", element: <Blog /> },
            { path: "/login", element: <LogIn /> }
        ]
    },
]);

export default router