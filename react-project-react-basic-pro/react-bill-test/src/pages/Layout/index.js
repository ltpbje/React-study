import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getBillList } from "@/store/modules/billStore"

const Layout=()=>{
    const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(getBillList())
    },[])
    return(
        <div>
            <Outlet></Outlet>
            我是Layout
            {/* 测试全局生效样式 */}
            <Button color="primary">测试全局样式</Button>
            <div className="purple">
                <Button color="primary">测试局部样式</Button>
            </div>
        </div>
    
    )
}

export default Layout