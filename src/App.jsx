import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Technologies from './components/Technologies'
import ProjectsAlt from './components/ProjectsAlt'

function App() {

  return (
    <div>
      <Sidenav /> 
      <Main />
      <Technologies />
      {/* <ProjectsAlt /> */}
      <Projects />
      <Contact />
    </div>
  )
}

export default App
