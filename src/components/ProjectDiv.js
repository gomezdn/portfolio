import React from "react"

function ProjectDiv(props) {

    return (
        <div className="projectDiv">
            <img src={props.imgSrc} className="imgDiv"/>                   

            <div className="projectTextDiv">
                <h2 className="projectTitle">{props.title}</h2>
                <p className="projectDescription">{props.description}</p>
                <a href={props.repo} className="projectLink" target="_blank"> Link to repository </a>
                <a href={props.demo} className="projectLink" target="_blank">Live demo</a>
            </div>
        </div>
    )
}

export default ProjectDiv