import React from "react"
import { Link } from "react-router-dom"
function Navbarra(){
    return(
        <nav>
            <Link to="/">home</Link>
            <Link to="/contato">contato</Link>
        </nav>
    )
}
export default Navbarra