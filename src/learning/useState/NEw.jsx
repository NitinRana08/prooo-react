import { useState, useEffect } from "react"
function NEw() {
    const [count, setCount] = useState(0)
    const [first, setFirst] = useState(0)

    useEffect(() => {
        alert("hola ji")

    }, [])

    useEffect(() => {
        alert("count btn ko chedaaaaa!!!!!")

    }, [count])

    useEffect(() => {
        alert("first ko chedaaaaa!!!!!")

    }, [first])




    return (
        <>
            <div>

                <div>hola</div>
                <h1>here is the :{count}</h1>

                <button onClick={() => setCount(count + 1)}>count btn </button>
            </div>
        </>
    )
}
export default NEw