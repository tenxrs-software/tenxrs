import "./App.css";
import About from "./components/about/About";
import { Center, Padding_64 } from "./components/common/Containers";
import { Contact } from "./components/form/Contact";
import Home from "./components/landing-page/Home";
import { Proccess } from "./components/process/Process";
import Nav from "./components/nav/Nav";


function App() {
  return (
    <>
    <Nav />
      <Padding_64>
        <Home />
        <About />
        <Proccess />
        <Contact />
      </Padding_64>
        
    </>
  );
}

export default App;
