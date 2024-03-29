import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import AllFoods from "../Home/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import FoodPurchase from "../pages/FoodPurchase";
import Purchasing from "../pages/Purchasing";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/blog", element: <Blog /> },
            { path: "/login", element: <LogIn /> },
            { path: "/signUp", element: <SignUp /> },
            { path: "/allFoods", element: <AllFoods /> },
            {
                path: "/details/:id",
                element: <PrivateRoute><FoodDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-restaurant-server.vercel.app/foods/${params.id}`)
            },
            {
                path: "/purchase/:id",
                element: <FoodPurchase></FoodPurchase>,
                loader: ({ params }) => fetch(`https://food-restaurant-server.vercel.app/foods/${params.id}`)
            },
            {
                path: "purchasing",
                element: <PrivateRoute><Purchasing /></PrivateRoute>
            }
        ]
    },
]);

export default router