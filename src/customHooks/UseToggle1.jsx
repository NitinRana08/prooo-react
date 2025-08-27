import { useState } from "react"
import customToggle1 from "./customToggle1"

function UseToggle1(){

    const [value ,toggleValue]=customToggle1(1)
    console.log("val______" , value);
    
    return(
        <>
        <button onClick={toggleValue}>toggle heading</button>
        <button>hide heading</button>
        <button>show heading</button>


        {
            value?<h1>custom hook in react js</h1>:null
        }
        </>
    )
}
export default UseToggle1