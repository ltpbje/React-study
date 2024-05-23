import { Link,useNavigate } from "react-router-dom"
const Login =()=>{
    const navigate =useNavigate()
    return(
     <div>
        我是登录页
        {/* 声明式导航 */}
        <Link to='/article?id=1234&name=jack'>跳转到文章页</Link>
        {/* 编程式导航 */}
        <button onClick={()=>navigate('/article?id=1234&name=jack')}>searchParams传参</button>
        <button onClick={()=>navigate('/article/1002/jack')}>Params传参</button>
    </div>

    )
}
export default Login