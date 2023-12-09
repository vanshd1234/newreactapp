import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Packages from "./pages/Packages";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import "./assets/css/all.min.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap.min.css.map";
import "./assets/css/fontawsom-all.min.css";
import "./assets/css/style.css";
import "./assets/css/style.css.map";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route index element={<Login/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/packages" element={<Packages/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
