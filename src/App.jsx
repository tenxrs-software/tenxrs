import "./App.css";
import About from "./components/about/About";
import { Padding_24 } from "./components/common/Containers";
import { Contact } from "./components/form/Contact";
import Home from "./components/landing-page/Home";
import { Proccess } from "./components/process/Process";

function App() {
  return (
    <>
      <Home />
      <Padding_24>
        <About />
        <Proccess />
        <Contact />
      </Padding_24>
    </>
  );
}

export default App;
