import RockpaperImage from "/assets/images/rockpaper.png"
import LibraryImage from "/assets/images/library.png"
import SketchImage from "/assets/images/sketch.png"
import TictactoeImage from "/assets/images/tictactoe.png"
import CalculatorImage from "/assets/images/calculator.png"
import React from "react"

const Descriptions = {
    tictactoe : `A simple 2 player (non AI) Tic Tac Toe game, made using HTML, vanilla JavaScript and CSS. 
    You can replay against each other as many times as you want.`,
    calculator : `A calculator designed in vanilla JavaScript, CSS and HTML. Capable of doing several arithmetic 
    calculations at once.`,
    rockpaper : `A Rock, Paper, Scissors game where you play the best of five games against the computer. 
    Made using HTML, vanilla JS and CSS.`,
    library : `A library app where you can add books to your collection, a short description, their number 
    of pages, and whether you read it or not. Made only using vanilla Js, HTML and CSS.`,
    sketch : `An etch-a-sketch mimic made in HTML, vanilla JavaScript and CSS. You can select different colors 
    to paint on it, erase the content as you wish and change the board size.`,

    aboutMe : <p>Hi there! I'm <span className="keyword">Darío</span> Gómez, a junior web 
    developer from <span className="keyword">Buenos Aires, Argentina</span>. 
    I'm really keen on technology, <span className="keyword"> programming</span>, arts and aesthetics in general; I enjoy both
    the working logic behind a good looking interface, and the implementation of the interface itself.
    I'm currently learning <span className="keyword">React</span> taking online courses and practicing on my own, after going
    through a pretty serious learning and practice of vanilla <span className="keyword">JavaScript</span>, <span className="keyword"> 
    HTML</span> and 
    <span className="keyword"> CSS</span> styling. At the same time, I'm going to university where I'm studying for a programming 
    degree, so I'm building a solid theoretical background while I learn by doing.
    My interests also comprehend music, photography, films, nature, science, and learning about everything. If you
    feel interested in hiring me please just contact me, I'd be very pleased to meet you!</p>,
}

const Links = {
    tictactoeDemo : "https://gomezdn.github.io/tic-tac-toe/",
    calculatorDemo : "https://gomezdn.github.io/calculator/",
    sketchDemo : "https://gomezdn.github.io/etch-a-sketch/",
    libraryDemo : "https://gomezdn.github.io/library/",
    rockpaperDemo : "https://gomezdn.github.io/rock-paper-scissors/",

    tictactoeRepo : "https://github.com/gomezdn/tic-tac-toe/",
    calculatorRepo : "https://github.com/gomezdn/calculator/",
    sketchRepo : "https://github.com/gomezdn/etch-a-sketch/",
    libraryRepo : "https://github.com/gomezdn/library/",
    rockpaperRepo : "https://github.com/gomezdn/rock-paper-scissors/",

    linkedin : "https://www.linkedin.com",
    github : "https://github.com/gomezdn",
    
}

const Images = {
    rockpaper : RockpaperImage,
    library : LibraryImage,
    sketch : SketchImage,
    tictactoe : TictactoeImage,
    calculator : CalculatorImage    
}
export { Descriptions, Links, Images }
