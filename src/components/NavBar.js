import React from "react"
import {SectionTitles} from "./Resources"
import {projectsTab, aboutMeTab} from "./Tabs"

function NavBar(props) {

    return (
        <div className="navBar">
            <div className="navBarTabs">
                <button className="tabButton"
                        onClick={ () => {
                            props.updateContent(projectsTab(props.language))
                        }}
                        type="button">{SectionTitles.projects[props.language]}
                </button>

                <button className="tabButton"
                        onClick={ () => {
                            props.updateContent(aboutMeTab(props.language))
                        }}
                        type="button">{SectionTitles.aboutMe[props.language]}
                </button>
            </div>
            
            <div className="navBarLinks">
                <a href={props.git} target="_blank">Github</a>
                <a href={props.linkedin} target="_blank">LinkedIn</a>
            </div>

            <div>
                <select className="languageSelect" onChange={e => {
                    props.updateLanguage(e.target.value)
                    props.updateContent(projectsTab(e.target.value))
                }}>
                    <option value="spanish" selected>Spanish</option>
                    <option value="english">English</option>
                </select>
            </div>
        </div>
    )
}

export default NavBar