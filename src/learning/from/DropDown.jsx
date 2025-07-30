import { useState } from "react"

function DropDown() {

    const [city,setCity]=useState("India")

    return (
        <>

            <h1>Select city</h1>
            <select onChange={(event)=>setCity(event.target.value)} defaultValue={"P"}>
                <option value="Noida">Noida</option>
                <option value="Delhi">Delhi</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>

            </select>
            
            <h2>Selected City: {city}</h2>
        </>

    )
}
export default DropDown