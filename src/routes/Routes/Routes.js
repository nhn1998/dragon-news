import { createBrowserRouter } from "react-router-dom";
import Main from "../../main/Main";
import Category from "../../pages/category/Category";
import Home from "../../pages/Home/Home";
import News from "../../pages/news/News";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                element: <News></News>
            }
        ]
    }
])