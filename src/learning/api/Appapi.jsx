import { useEffect, useState } from 'react'
import { getPosts } from './index'
import PostCard from './componentt/PostCard'

function Appapi(){

    const [data,setData] = useState(null)

    useEffect(()=>{
        getPosts().then((posts)=>{
            console.log(posts)
            setData(posts)  // update state
        })
    },[])

    return(
        <>
        <h2>hola ji</h2>

        {data ? data.map((e)=> <PostCard  title={e.title} body={e.body} />) : <p>No Data :/</p> }
  
        </>
    )
}
export default Appapi
