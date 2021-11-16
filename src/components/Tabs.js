import React from "react"
import ProjectDiv from "./ProjectDiv"
import {Links, Images, Descriptions} from "./Resources"


const Tabs = {
    projects : 
        <div className="projectsTab contentTab">
            <ProjectDiv
                demo={Links.sketchDemo}
                imgSrc={Images.sketch}
                title="Etch a sketch"
                description={Descriptions.sketch}
                repo={Links.sketchRepo}
            />
            <ProjectDiv
                demo={Links.calculatorDemo}
                imgSrc={Images.calculator}
                title="Just another calculator"
                description={Descriptions.calculator}
                repo={Links.calculatorRepo}
            />
            <ProjectDiv
                demo={Links.libraryDemo}
                imgSrc={Images.library}
                title="Library app"
                description={Descriptions.library}
                repo={Links.libraryRepo}
            />
            <ProjectDiv
                demo={Links.tictactoeDemo}
                imgSrc={Images.tictactoe}
                title="Tic tac toe"
                description={Descriptions.tictactoe}
                repo={Links.tictactoeRepo}
            />
            <ProjectDiv
                demo={Links.rockpaperDemo}
                imgSrc={Images.rockpaper}
                title="Rock, paper, scissors!"
                description={Descriptions.rockpaper}
                repo={Links.rockpaperRepo}
            />
        </div>,
    
    aboutMe :
    <div className="aboutMeTab contentTab">
        <p className="aboutMeText">{Descriptions.aboutMe}</p>
    </div>
}


export default Tabs