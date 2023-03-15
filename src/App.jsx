import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { CiApple } from "react-icons/ci";
//import components
import { Navegator } from "./components/nav";
import { Home } from "./components/home";
import { Movies } from "./components/movies";
import { Tv } from "./components/tv";
import { WebEnd } from "./components/footer";
//import components react
import { Routes , Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navegator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
      </Routes>
      <WebEnd/>
    </div>
  );
}

export default App;
