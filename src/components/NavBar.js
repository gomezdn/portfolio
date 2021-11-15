import React from "react"
import Tabs from "./Tabs"


function NavBar(props) {

    return (
        <div className="navBar">
            <div className="navBarTabs">
                <button className="tabButton"
                        onClick={ () => {
                            props.updateContent(Tabs.aboutMe)
                        }}
                        type="button">About me
                </button>
               
                <button className="tabButton"
                        onClick={ () => {
                            props.updateContent(Tabs.projects)
                        }}
                        type="button">Projects
                </button>
            </div>
            
            <div className="navBarLinks">
                <a href={props.git} target="_blank">Github</a>
                <a href={props.linkedin} target="_blank">LinkedIn</a>
            </div>
        </div>
    )
}

export default NavBar