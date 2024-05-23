// import { useSearchParams } from "react-router-dom"
import { useParams } from "react-router-dom"
const Article =()=>{
    // searchParams传参
    // const [params] = useSearchParams()
    // const name =params.get('name')
    // const id =params.get('id')

    // params传参
    const params = useParams()
    const id =params.id
    const name =params.name
    return (
        <div>
            我是文章页
            -{name}-{id}
        </div>
    )
}
export default Article