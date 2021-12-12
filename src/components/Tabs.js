import React from "react"
import ProjectDiv from "./ProjectDiv"
import {Links, Images, Descriptions} from "./Resources"


function projectsTab(lang) {
    return (
        <div className="projectsTab contentTab">
            <ProjectDiv
                demo={Links.sketchDemo}
                imgSrc={Images.sketch}
                title="Etch a sketch"
                description={Descriptions.sketch[lang]}
                repo={Links.sketchRepo}
            />
            <ProjectDiv
                demo={Links.calculatorDemo}
                imgSrc={Images.calculator}
                title="Calculator"
                description={Descriptions.calculator[lang]}
                repo={Links.calculatorRepo}
            />
            <ProjectDiv
                demo={Links.libraryDemo}
                imgSrc={Images.library}
                title="Library app"
                description={Descriptions.library[lang]}
                repo={Links.libraryRepo}
            />
            <ProjectDiv
                demo={Links.tictactoeDemo}
                imgSrc={Images.tictactoe}
                title="Tic tac toe"
                description={Descriptions.tictactoe[lang]}
                repo={Links.tictactoeRepo}
            />
            <ProjectDiv
                demo={Links.rockpaperDemo}
                imgSrc={Images.rockpaper}
                title="Rock, paper, scissors!"
                description={Descriptions.rockpaper[lang]}
                repo={Links.rockpaperRepo}
            />
        </div>
    )
}

function aboutMeTab(lang) {
    return (
        <div className="aboutMeTab contentTab">
            <p className="aboutMeText">{Descriptions.aboutMe[lang]}</p>
        </div>
    )
}


export {aboutMeTab, projectsTab}