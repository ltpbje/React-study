import { Outlet } from "react-router-dom"

const Layout=()=>{
    return(
        <div>
            <Outlet></Outlet>
            我是Layout
        </div>
    
    )
}

export default Layout