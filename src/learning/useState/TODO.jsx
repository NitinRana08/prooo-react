import { useState } from "react"



const TODO =()=>{
    const [count,setCount]=useState(0)
    function add(){
        setCount(count+1)

    }

    return(
        <>
        <div>
            <button onClick={add}>increment</button></div>
        <div>
            count:{count}
        </div>
        </>
    )
}
export default TODO