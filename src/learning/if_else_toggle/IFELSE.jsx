import { useState } from "react"

function IFELSE(){
    const [count,setCount]=useState(0)


    const a= "apple"
    if(a=="apple"){
         console.log("if wala")
    }else{
       console.log("else wala")
    }
    return(
        <>
        <div>

               
               {/* <button onClick={()=>setCount(count+1)} >click to remove </button>
            { 
                count==0?<h1>yes count value is zero 0</h1>:
                <h1>another number 1,2,3,3</h1>
           
            }
            <h3>{count}</h3> */}

            {
                a=="apple"? <h2>yes apple it is</h2>: <h2>na na</h2>
               
            }
             <h2>hello</h2>
        </div>
        </>
    )
}
export default IFELSE