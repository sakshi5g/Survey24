import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Survey from "./pages/Survey";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Question from "./pages/Question";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Appbar />
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/survey" element={<Survey />} />
                    <Route path="/survey/:id" element={< Question/>} />
                     <Route path="/about" element={<About />} />
                     <Route path="*" element={<h1>404 page not found error</h1>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;
