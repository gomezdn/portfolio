import React from "react"
import Header from "./Header"
import Main from "./Main"
import Tabs from "./Tabs"

function App() {

    React.useEffect(() => {
        document.getElementById("app").style.scale = 1    
    })
    
    const [mainContent, setMainContent] = React.useState(Tabs.projects)
    return (
        <div className="app" id="app">
            <Header updateContent={setMainContent}/>
            <Main content={mainContent}/>
        </div>
    )
}

export default App
