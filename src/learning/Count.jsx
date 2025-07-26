import { useState } from "react"
function Count() {

    const [count_zero, newcount] = useState(0)
    //  const addcount=()=>{
    //     newcount(count_zero+1)
    //  }

    const [zero, rev] = useState(0)


    return (
        <>
            <div>hello</div>
            <h1>aamir log neeche click kare {count_zero}</h1>
            <button onClick={() => newcount(count_zero + 1)}>click</button>
            <div>
                <h1>here is the reverse one..</h1>
                <h1>{zero}</h1>
                <button onClick={()=>rev(zero - 1)}>click to reverse the number</button>



            </div>


        </>


    )
}

export default Count