import React from "react"

import RockpaperImage from "/assets/images/rockpaper.png"
import LibraryImage from "/assets/images/library.png"
import SketchImage from "/assets/images/sketch.png"
import TictactoeImage from "/assets/images/tictactoe.png"
import CalculatorImage from "/assets/images/calculator.png"
import GirfsearchImage from "/assets/images/gifsearch.png"
import MoviesImage from "/assets/images/movies.png"

const Descriptions = {

    movies : {
      english : `Website for searching movies or tv series that requests the API from The Movie Database, displaying their relevant info as well actors's or directors's.
                 Made with React and Typescript. Chakra UI for styles.`,
      spanish : `Sitio donde buscar películas o series consultando la API de The Movie Database, pudiendo ver el detalle de las mismas así como el de actores y directores.
                 Hecho con React y Typescript, y Chakra UI para estilos.`
    },
    gifsearch : {
        english : `A gif search app made with React, consulting the Tenor API that responds with a list of gifs
        based on a search term. It also has a paginator and search suggestions as you type in.`,
        spanish : `Un buscador de gifs hecho en React que consulta la API de Tenor la cual devuelve una lista de gifs en base
        a la búsqueda ingresada. Tiene un paginador que despliega 10 conjuntos de gifs diferentes y sugerencias
        de búsqueda a medida que se escribe en el input.`
    },
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
          <>  
            <p>
                Hi there! I'm <span className="keyword">Darío</span> Gómez, a junior web 
                developer from <span className="keyword">Buenos Aires, Argentina</span>.
            </p>
            <br/>
            <p>
              I specialize in <span className="keyword">ReactJS</span> and the ecosystem around <span className="keyword">Javascript</span>.

            </p>
            <br/>
            <p>
                I enjoy both the logic behind a good looking interface, and the implementation of the interface itself,
                so I'm currently learning <span className="keyword">NodeJS</span> in order to be able to develop applications
                integrally. At the same time, I'm going to university where I'm studying for a Computer Science degree,
                so I'm building a solid theoretical background while I learn by doing.
            </p>
          </>,
        spanish : 
          <>  
            <p>
                ¡Buenas! Me llamo <span className="keyword">Darío</span> Gómez y soy un desarrollador web 
                 de <span className="keyword">Buenos Aires, Argentina</span>.
            </p>
            <br/>
            <p> 
                Me especializo en <span className="keyword">ReactJS</span> y el ecosistema en torno a <span className="keyword">Javascript</span>.
            </p>
            <br/>
            <p>    
                Me interesan y disfruto tanto la lógica que subyace debajo de una interfaz atractiva, como la implementación de
                la interfaz en sí. Por lo que actualmente me encuentro aprendiendo <span className="keyword">NodeJs</span> y conceptos de
                backend para poder desarrollar aplicaciones web integralmente. A su vez, me encuentro cursando la Licenciatura
                en Informática en la Universidad Nacional de Quilmes, por lo que, además de aprender a través de la práctica,
                voy incorporando fundamentos teóricos que le den sustento a la misma.
            </p>
          </>
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
    moviesDemo : "https://movies-gomezdn.vercel.app/",
    gifsearchDemo : "https://gomezdn.github.io/gif-search/",
    tictactoeDemo : "https://gomezdn.github.io/tic-tac-toe/",
    calculatorDemo : "https://gomezdn.github.io/calculator/",
    sketchDemo : "https://gomezdn.github.io/etch-a-sketch/",
    libraryDemo : "https://gomezdn.github.io/library/",
    rockpaperDemo : "https://gomezdn.github.io/rock-paper-scissors/",

    moviesRepo : "https://github.com/gomezdn/movies",
    gifsearchRepo : "https://github.com/gomezdn/gif-search/",
    tictactoeRepo : "https://github.com/gomezdn/tic-tac-toe/",
    calculatorRepo : "https://github.com/gomezdn/calculator/",
    sketchRepo : "https://github.com/gomezdn/etch-a-sketch/",
    libraryRepo : "https://github.com/gomezdn/library/",
    rockpaperRepo : "https://github.com/gomezdn/rock-paper-scissors/",

    linkedin : "https://www.linkedin.com/in/gomezdn",
    github : "https://github.com/gomezdn",
    
}

const Images = {
    movies : MoviesImage,
    gifsearch : GirfsearchImage,
    rockpaper : RockpaperImage,
    library : LibraryImage,
    sketch : SketchImage,
    tictactoe : TictactoeImage,
    calculator : CalculatorImage    
}

export { Descriptions, Links, Images, SectionTitles }
