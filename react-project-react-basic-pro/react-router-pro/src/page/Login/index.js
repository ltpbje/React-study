import { Link,useNavigate } from "react-router-dom"
const Login =()=>{
    const navigate =useNavigate()
    return(
     <div>
        我是登录页
        {/* 声明式导航 */}
        <Link to='/article'>跳转到文章页</Link>
        {/* 编程式导航 */}
        <button onClick={()=>navigate('/article')}>跳转到文章页</button>
    </div>

    )
}
export default Login