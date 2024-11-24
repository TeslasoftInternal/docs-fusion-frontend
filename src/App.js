import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import DocFusionAI from "./Pages/DocFusionAI"
import { useState } from "react";
import {prompts} from "./Components/NavBar/prompts";

function App() {
    const [func, setFunc] = useState(prompts[0]);
    const [previewOpened, setPreviewOpened] = useState(false);

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar setPreviewOpened={setPreviewOpened} setFunc={setFunc} />
                <Routes>
                    <Route path="/" element={<DocFusionAI previewOpened={previewOpened} func={func}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
