import { useState } from "react"


function Hide1() {

    const [car, newcar] = useState("i20")

    // const CAR=()=>{
    //     if(car=="i20"){
    //         newcar("thar")
    //     }
    //     else{
    //         newcar("i20")
    //     }
    // }
    const CAR = () => {
        newcar(car === "i20" ? "thar" : "i20");
    };
    
    const [display, setDisplay] = useState()


    return (
        <>
            <h1>hello</h1>
            <button onClick={()=>setDisplay(!display)}>hidding</button>
            {
                display? <h1>hide wala</h1> :null
            }



            <h1>{car}</h1>
            <button onClick={() => CAR(newcar)}>click to </button>
            


        </>


    )

}
export default Hide1