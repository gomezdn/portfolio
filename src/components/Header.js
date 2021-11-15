import React from "react"
import NavBar from "./NavBar"
import {Links} from "./Resources"

function Header(props) {
    return (
        <div className="header">
            <h1 className="headerTitle">GÓMEZ</h1>
            <NavBar updateContent={props.updateContent} git={Links.github} linkedin={Links.linkedin}/>
        </div>
    )
}

export default Header