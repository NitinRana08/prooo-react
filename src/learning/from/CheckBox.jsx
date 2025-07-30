import { useState } from "react"

function CheckBox(){

    const [gender,setgender]=useState('')

    return(
        <>
       <div>
        <form action="">

            <input type="radio" onChange={(event)=>setgender(event.target.value)} value={"Male"} name="sex" id="male"/>
            <label htmlFor="male">Male</label>

            <input type="radio" onChange={(event)=>setgender(event.target.value)} value={"Female"} name="sex" id="female"/>
            <label htmlFor="female">Female</label>

            <h2>Selected Gender:{gender}</h2>

        </form>
       </div>
        </>

    )
}

export default CheckBox