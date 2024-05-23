import { Link, Outlet } from "react-router-dom"

const Layout=()=>{
    return(
        <div>
           我是一级路由layout组件 
           <br/>
           <Link to='/board'>面板</Link>
           <br/>
           <Link to='/about'>关于</Link>
           {/* 配置二级路由的出口 */}
           <Outlet></Outlet>
        </div>
    )
}
export default Layout