import { useEffect, useState, useRef } from "react"

function UseRefOne() {
    w



    const [count, setCount] = useState(0)
    let a = useRef(0)
    useEffect(() => {
        a.current = a.current + 1
        console.log(`the value is ${a.current}...`)
    })




    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click me to update </button>
            <h2>hi
                
            </h2>
        </>
    )
}
export default UseRefOne