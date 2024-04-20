import './App.css'
import About from './components/about/About'
import { Contact } from './components/form/Contact'
import Home from './components/landing-page/Home'
import { Proccess } from './components/process/Process'


function App() {
  return (
    <>
      <Home />
      <About />
      <Proccess />
      <Contact />
    </>
  )
}

export default App
