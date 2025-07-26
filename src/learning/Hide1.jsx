import { useState } from "react"


function Hide1(){

    const [car,newcar]=useState("i20")

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

    return(
        <>
        <h1>hello</h1>
        <h1>{car}</h1>
        <button onClick={()=>CAR(newcar)}>click to </button>


        </>


    )

}
export default Hide1