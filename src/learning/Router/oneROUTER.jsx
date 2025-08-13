import React from "react"
import { Link } from "react-router-dom"


function OneROUTER() {
    return (
        <> <nav>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>about</li></Link>
            <Link to="/contact"><li>contact</li></Link>
            
        </nav>


        </>
    )
}
export default OneROUTER