import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import EditReview from "../Pages/Review/EditReview/EditReview";
import Review from "../Pages/Review/Review";
import AddService from "../Pages/Services/AddService";
import Services from "../Pages/Services/Services";
import SignUP from "../Pages/SignUp/SignUP";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUP></SignUP>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/services/:id',
                loader: ({params}) =>{
                    return fetch(`https://photogallery-server-site.vercel.app/services/${params.id}`);
                },
                element:<ViewDetails></ViewDetails>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><Review></Review></PrivateRoute>
            },
            {
                path: '/editReview/:id',
                loader: ({params})=> {
                    return fetch(`https://photogallery-server-site.vercel.app/reviews/${params.id}`)
                },
                element: <EditReview></EditReview>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }

        ]
    }
])

export default router;