import { createBrowserRouter } from "react-router-dom";
// import { createHashRouter} from "react-router-dom";
import Article from '../page/Article/index'
import Login from '../page/Login/index'
import Layout from "../page/Layout";
import About from "../page/About";
import Board from "../page/Board";
import NotFound from "../page/NotFound";

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
                // 设置为默认二级路由一级路由访问的时候，它也能得到渲染
                index:true,
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
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])
export default router
