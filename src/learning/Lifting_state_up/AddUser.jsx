import { useState } from "react"

function AddUser({setUserPro}) {
  
    

    return (
        <>
            {/* <h1>This is AddUser.jsx</h1> */}
            {/* <h2>{user}</h2> */}
            <input type="text"  onChange={(event) => setUserPro(event.target.value)} placeholder="enter" />
            <br />
            {/* <button>submit</button> */}
            <hr />
        </>
    )
}
export default AddUser