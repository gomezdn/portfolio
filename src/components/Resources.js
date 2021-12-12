import RockpaperImage from "/assets/images/rockpaper.png"
import LibraryImage from "/assets/images/library.png"
import SketchImage from "/assets/images/sketch.png"
import TictactoeImage from "/assets/images/tictactoe.png"
import CalculatorImage from "/assets/images/calculator.png"
import React from "react"

const Descriptions = {

    tictactoe : {
        english :  `A simple 2 player (non AI) Tic Tac Toe game, made using HTML, vanilla JavaScript and CSS. 
        You can replay against each other as many times as you want.`,
        spanish : `Un simple Tatetí de dos jugadores (sin AI), hecho con HTML, JavaScript vainilla y CSS.`,
    },
    calculator : {
        english : `A simple calculator designed in vanilla JavaScript, CSS and HTML, capable of
        accumulate one calculation after other without losing the value.`,
        spanish : `Una sencilla calculadora hecha en JavaScript vainilla, CSS y HTML. Se pueden
        borrar dígitos, realizar un cálculo tras otro acumulando los valores y resetearla.`
    },
    rockpaper : {
        english : `A Rock, Paper, Scissors game where you play the best of five games against the computer. 
        Made using HTML, vanilla JS and CSS.`,
        spanish : `Un juego de Piedra, Papel o Tijera donde se juega el mejor de 5 contra el CPU. Hecho en JS, HTML y CSS.`
    },
    library : {
        english : `A library app where you can add books to your collection, a short description, their number 
        of pages, and whether you read it or not. Made only using vanilla Js, HTML and CSS.`,
        spanish : `Una app simulando una biblioteca donde se pueden añadir y eliminar libros, además de marcar si fueron leídos o no. Hecha
        con JS vainilla, HTML y CSS.`
    },
    sketch : {
        english : `An etch-a-sketch mimic made in HTML, vanilla JavaScript and CSS. You can select different colors 
        to paint on it, erase the content as you wish and change the board size.`,
        spanish : `Una pizarra mágica (etch-a-sketch) hecha en JavaScript vainilla, HTML y CSS. Se pueden elegir diferentes colores para dibujar, un
        borrador para ir eliminando lo ya dibujado y elegir la cantidad de celdas del tablero.`
    },

    aboutMe : {
        english :  
            <p>
                Hi there! I'm <span className="keyword">Darío</span> Gómez, a junior web 
                developer from <span className="keyword">Buenos Aires, Argentina</span>. 
                I'm really keen on technology, <span className="keyword"> programming</span>, arts and aesthetics in general; I enjoy both
                the working logic behind a good looking interface, and the implementation of the interface itself.
                I'm currently learning <span className="keyword">React</span> taking online courses and practicing on my own, after going
                through a pretty serious learning and practice of vanilla <span className="keyword">JavaScript</span>, <span className="keyword"> 
                HTML</span> and 
                <span className="keyword"> CSS</span> styling. At the same time, I'm going to university where I'm studying for a programming 
                degree, so I'm building a solid theoretical background while I learn by doing.
                My interests also comprehend music, photography, films, nature, science, and learning about everything. If you
                feel interested in hiring me please just contact me, I'd be very pleased to meet you!
            </p>,
        spanish : 
            <p>
                ¡Buenas! Me llamo <span className="keyword">Darío</span> Gómez y soy un desarrollador web junior
                de <span className="keyword">Buenos Aires, Argentina</span>. 
                Me encanta la tecnología, la <span className="keyword">programación</span>, el diseño y la estética en general;
                me interesan y disfruto tanto la lógica que subyace debajo de una interfaz atractiva, como la implementación de la interfaz en sí.
                Actualmente me encuentro aprendiendo <span className="keyword">React</span> a través de cursos online y de manera autodidacta,
                después de haber atravesado un aprendizaje intenso de <span className="keyword">JavaScript</span>, <span className="keyword"> 
                HTML</span> y<span className="keyword"> CSS</span>, practicando a diario. A su vez,
                me encuentro cursando la Licenciatura en Informática en la Universidad Nacional de Quilmes, por
                lo que, además de aprender a través de la práctica, voy incorporando fundamentos teóricos que le den sustento a la misma.
                Mis intereses también abarcan la música, la fotografía, el cine, la naturaleza, las ciencias, entre otras cosas.
                Si estás interesado en trabajar conmigo, no dudes en contactarme ¡Estaré encantado de conocerte!
            </p> 
    }
}

const SectionTitles = {
    aboutMe : {
        english : `About me`,
        spanish : `Acerca de mí`
    },
    projects : {
        english : `Projects`,
        spanish : `Proyectos`
    }
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
export { Descriptions, Links, Images, SectionTitles}
