import { createBrowserRouter } from "react-router-dom";
import Main from "../../main/Main";
import Category from "../../pages/category/Category";
import Home from "../../pages/Home/Home";
import Login from "../../pages/login/Login";
import News from "../../pages/news/News";
import Register from "../../pages/register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader:()=>fetch(`http://localhost:5000/news`),
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader:({params})=>fetch(`http://localhost:5000/catagory/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
                
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])