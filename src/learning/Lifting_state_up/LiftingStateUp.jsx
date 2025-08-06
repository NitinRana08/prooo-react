import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";
import { useState } from "react";

function LiftingStateUp() {
      const [user, setUser] = useState("")
    return (

        <>
        
            <AddUser  setUserPro={setUser}/>
            <DisplayUser userPro={user} />
            <div>
                {/* <p>my name is nitn </p> */}
            </div>
        </>
    )
}
export default LiftingStateUp;


