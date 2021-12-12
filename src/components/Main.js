import React from "react"

function Main(props) {
    
    React.useEffect(() => {
        let tab = document.querySelectorAll(".contentTab")
        tab.forEach(tab => {
            tab.style.scale = 1
        })
            
    })

    return props.content
}


export default Main

