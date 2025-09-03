import { useEffect } from 'react'
import {getPosts} from './index'

function Appapi(){

    const [data,setData] = useState(null)

    useEffect(()=>{
        getPosts().then((posts)=>console.log(posts))
    },[])

    return(
        <>
        <h2>hola ji</h2>
  
        </>
    )
}
export default Appapi