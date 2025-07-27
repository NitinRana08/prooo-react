import { useState } from "react"
function Dog() {

    let [twoWheeler, onClicked_New_Wheeler_Bike] = useState("Activa 3G")
    const update = () => {
        // onClicked_New_Wheeler_Bike("classic 350")
        if(twoWheeler == ("Activa 3G")){
            onClicked_New_Wheeler_Bike("classic 350")
        }
        else{
            onClicked_New_Wheeler_Bike("Activa 3G");
            
        }


    }

return (
    <>
        <h1>hello</h1>
        <h1>{twoWheeler}</h1>
        <button onClick={update}>click to new 2 wheeler</button>
 
    </>


)
}

export default Dog