import './App.css';
import './styles/components/Footer.css'
import "./styles/components/Card.css"
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {Places} from "./pages/Places";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path={"/"} exact element={<Home/>}/>
                <Route path={"/places"} exact element={<Places/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
