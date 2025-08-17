import { useEffect, useState } from "react"
import { useRef } from "react";

function NEW1() {



    const [count, setCount] = useState(0)
    let val = useRef(1)

    function handleIncrement() {

        val.current = val.current + 1;
        console.log('helo', val.current)


        setCount(count + 1)
    }


    useEffect(() => {
        console.log("main re render honga baar baar kya kr lega tu");

    })// <- here is the reason

    let changeKrdo = useRef()
    const changeKarRahaHon = () => {

        changeKrdo.current.style.backgroundColor = 'orange'


    }
    return (
        <>
            <div>
                <button ref={changeKrdo} onClick={handleIncrement}>increment</button>
                <br />
                <div>
                    count: {count}
                </div>

            </div>
            <button onClick={changeKarRahaHon}>change the color of the first button...</button>
        </>
    )
}
export default NEW1