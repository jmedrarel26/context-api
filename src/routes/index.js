import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../views/Home";
import Four0Four from "../views/404";
import PokeDetail from "../views/PokeDetail"
import ScrollToTop from "../components/ScrollToTop";

export default function Routeses() {
  
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="home" element ={<Home/>} exact />
        <Route path="*" element = {<Four0Four/>}/>
        <Route path="pokemon/:id" element = {<PokeDetail/>}/>
      </Routes>
    </Router>
  );
}