import { useEffect, useState, useRef } from "react"

function UseRefOne() {




    const [count, setCount] = useState(0)
    const a = 0
    useEffect(() => {
        a=a+1
        console.log(`the value is ${a}...`)
    })




    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click me to update </button>

        </>
    )
}
export default UseRefOne