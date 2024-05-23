import { createBrowserRouter } from "react-router-dom";
import Article from '../page/Article/index'
import Login from '../page/Login/index'
import Layout from "../page/Layout";
import About from "../page/About";
import Board from "../page/Board";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'About',
                element:<About></About>
            },
            {
                path:'Board',
                element:<Board></Board>
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/article/:id/:name',
        element:<Article></Article>
    }
])
export default router
