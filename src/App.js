import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import DocFusionAI from "./Pages/DocFusionAI"

function App() {
    return (
        <div className="App">
            <BrowserRouter>

                <NavBar/>

                <Routes>
                    <Route path="/" element={<DocFusionAI/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
