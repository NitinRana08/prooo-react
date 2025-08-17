import { useEffect, useState } from "react"

function TODO() {

    const [count, setCount] = useState(0)

    function handleIncrement() {
        setCount(count + 1)
    }
    useEffect(() => {
        console.log("main re render honga baar baar kya kr lega tu");

    })// <- here is the reason

    return (
        <>
            <div>
                <button onClick={handleIncrement}>increment</button>
                <br />
                <div>
                    count: {count}
                </div>

            </div>
        </>
    )
}
export default TODO