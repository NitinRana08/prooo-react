import { useState } from "react"

function IfElse() {

    const [count, newcount] = useState(0)

    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>newcount(count+1)}>click to change</button>
            {
                count == 0 ? <h1>counted 1</h1> : null
            }
        </>


    )

}
export default IfElse