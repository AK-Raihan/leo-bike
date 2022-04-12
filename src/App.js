import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Contexts/AuthProvider";
import About from "./Pages/Home/About/About";
import Contact from "./Pages/Home/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Products from "./Pages/Services/Products/Products";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import NavTop from "./Pages/Shared/NavTop/NavTop";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <AuthProvider>
      <NavTop/>
      <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/home" element={<Home/>}>
      </Route>
      <Route path="/about" element={<About/>}>
      </Route>
      <Route path="/contact" element={<Contact/>}>
      </Route>
      <Route path="/products" element={<Products/>}>
      </Route>
      <Route path="/login" element={<Login/>}>
      </Route>
      <Route path="/register" element={<Register/>}>
      </Route>
    </Routes>
    <Footer/>
      </AuthProvider>
      
  </BrowserRouter>
    </div>
  );
}

export default App;
