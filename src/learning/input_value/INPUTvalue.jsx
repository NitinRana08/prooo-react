import { useState } from "react"

function INPUTvalue(){


    const [val,setVal]=useState("sharad rana")
    return(
        <>
        <h1>hello</h1>
        <input type="text" onChange={(event)=>setVal(event.target.value)} placeholder="naam daal"/>
        <h1>{val}</h1>
        <button onClick={()=>setVal("")}>click to remove item</button>

        
        
        </>
        
    )
}
export default INPUTvalue
