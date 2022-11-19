import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import SignUP from "../Pages/SignUp/SignUP";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";

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
                    return fetch(`http://localhost:5000/services/${params.id}`);
                },
                element:<ViewDetails></ViewDetails>
            }

        ]
    }
])

export default router;