import "./App.css";
import About from "./components/about/About";
import { Padding_64 } from "./components/common/Containers";
import { Contact } from "./components/form/Contact";
import Home from "./components/landing-page/Home";
import { Proccess } from "./components/process/Process";

function App() {
  return (
    <Padding_64>
      <Home />
      <About />
      <Proccess />
      <Contact />
    </Padding_64>
  );
}

export default App;
