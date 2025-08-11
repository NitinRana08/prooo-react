import { useState } from "react"
import FORM2 from "./FORM2"

function FORM() {


const [count,setCount]=useState(0)


    return (
        <>
        <FORM2 propsData={count}/>
        <button onClick={()=>setCount(count + 1)}>add count {count}</button>


        </>
    )





}

export default FORM