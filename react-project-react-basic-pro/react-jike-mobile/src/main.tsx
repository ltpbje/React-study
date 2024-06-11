import ReactDOM from 'react-dom/client'
import './index.css'
// 导入provider
import { RouterProvider } from 'react-router-dom'
// 导入router
import { router } from './router'

// 测试接口

import { fetchChannelAPI } from './apis/list'

fetchChannelAPI().then((res)=>{
    console.log(res.data.data.channels)
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
