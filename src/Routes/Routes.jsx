import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Bookings from "../Page/Bookings/Bookings";
import BookService from "../Page/BookSevice/BookSevice";

import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/Signup/SignUp";
import PrivateRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/booking",
                element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
            },
            {
                path: "/booking/:id",
                element: <PrivateRoutes><BookService></BookService></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
]);

export default router;
