
import { useEffect, useState, useRef } from "react"
const NEW2 = () => {

    const [count, setCount] = useState(0)

    let a = useRef(0)
    useEffect(() => {

        a.current = a.current + 1
        console.log(`nitin ${a.current}...`);

    })


    return (
        <>


            <button onClick={() => setCount(count + 1)}>c</button>
            {count}
            <br />




        </>
    )

}

export default NEW2
