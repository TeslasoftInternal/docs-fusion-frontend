import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import DocFusionAI from "./Pages/DocFusionAI"
import {useState} from "react";

function App() {
    const [func, setFunc] = useState({});


    return (
        <div className="App">
            <BrowserRouter>

                <NavBar setFunc={setFunc} />

                <Routes>
                    <Route path="/" element={<DocFusionAI func={func}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
