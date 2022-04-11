import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import NavTop from "./Pages/Shared/NavTop/NavTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavTop/>
      <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/home" element={<Home/>}>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
