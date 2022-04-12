import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import About from "./Pages/Home/About/About";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import NavTop from "./Pages/Shared/NavTop/NavTop";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <NavTop/>
      <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/home" element={<Home/>}>
      </Route>
      <Route path="/about" element={<About/>}>
      </Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
