import  Year  from"@/pages/Year"
import Layout  from"@/pages/Layout"
import Month from "@/pages/Month"
import New from "@/pages/New"
import {createBrowserRouter}  from "react-router-dom"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                index:true,
                element:<Month></Month>
            },
            {
                path:'year',
                element:<Year></Year>
            }
        ]
    },
    {
        path:'/new',
        element:<New></New>
    }

])

export default router