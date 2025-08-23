import { useContext } from "react"
import { UserContext } from "../../App"

function CHILD3(){

    const user = useContext(UserContext)

    return (
        <>
        <div>

            hello
        </div>
        <h3>{user.name}</h3>
        </>
    )
}
export default CHILD3