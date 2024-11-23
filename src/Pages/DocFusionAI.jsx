import React from 'react';
import './CSS/DocFusionAI.css'
import SideBar from "../Components/SideBar/SideBar";
import Chat from "../Components/Chat/Chat";

const DocFusionAI = () => {

    return(
        <div className="docFusionAI">
            <SideBar/>
            <Chat/>
        </div>
    )
}

export default DocFusionAI;