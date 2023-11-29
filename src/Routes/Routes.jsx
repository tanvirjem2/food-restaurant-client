import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/blog", element: <Blog /> }
        ]
    },
]);

export default router