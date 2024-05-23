import { createBrowserRouter } from "react-router-dom";
import Article from '../page/Article/index'
import Login from '../page/Login/index'

const router =createBrowserRouter([
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
