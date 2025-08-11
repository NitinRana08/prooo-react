import { useState } from "react"

function FORM() {
     const [Fname,setFname]=useState("")
        const [Lname,setLname]=useState("")
        const [password,setPassword]=useState("")


        



        const handleInputChange=(comeData)=>{
            setFname(comeData.target.value)
            setLname(comeData.target.value)
            setPassword(comeData.target.value)


        }
    



    return (
    <>

        <div>
            <h1>fill</h1>
            <form >
                <h1>
                <label htmlFor="">first name: </label><input type="text" value={Fname} onChange={handleInputChange} />
                <br />
                <label htmlFor="">last name: </label><input type="text" value={Lname} onChange={handleInputChange}/>
                <br />
                <label htmlFor="">password: </label><input type="text" value={password} onChange={handleInputChange}/>
                <br />
                <button>submit</button>
                </h1>
            </form>
        </div>

    </>
)





}

export default FORM