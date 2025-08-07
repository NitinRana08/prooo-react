import { useState } from "react"

function IFELSE() {


    const [count, setCount] = useState(0)
    return (
        
        <>
            <div>
                <h1>hola</h1>
                <h2>{count}</h2>

                {
                    count == 0 ? <h2>nitin rana</h2>:null
                }
                <button onClick={()=>setCount(count+1)}>counter</button>

                    </div>
     
        </>
            )
           
}


            export default IFELSE