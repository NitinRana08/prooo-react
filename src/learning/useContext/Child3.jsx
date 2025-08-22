import { useContext } from "react";
import { UserContext } from "../App"; // or wherever you created UserContext

function Child3() {
    const user = useContext(UserContext);  // ✅ use the actual context

    return (
        <>
            <div>
                data: {user.name}
            </div>
            <h1>hola</h1>
        </>
    );
}

export default Child3;
