import { useState } from "react"
import Eg from "./Eg"


function HideShow() {


    const [display, setDisplay] = useState(1)
    const [comDisplay,setCOMdisplay]= useState(1)


    return (

        <>
            <div>
                <h1>HOLA</h1>
                <button onClick={() => setDisplay(!display)}>toggle</button>
                {
                    display ? <h1>my name is nitin</h1> : null
                }

                
                {
                    comDisplay ? <Eg /> : null
                }


            </div>
        </>

    )
}
export default HideShow