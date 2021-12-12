import React from "react"
import Header from "./Header"
import Main from "./Main"
import {projectsTab} from "./Tabs"


function App() {

    React.useEffect(() => {
        document.getElementById("app").style.scale = 1    
    })

    const [language, setLanguage] = React.useState("spanish")
    const [mainContent, setMainContent] = React.useState(projectsTab(language))
    
    return (
        <div className="app" id="app">
            <Header updateContent={setMainContent}
                    updateLanguage={setLanguage}
                    language={language}
            />
            <Main 
                content={mainContent}
            />
        </div>
    )
}

export default App
