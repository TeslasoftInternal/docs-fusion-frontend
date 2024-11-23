import React, {useState} from 'react';
import './CSS/DocFusionAI.css'
import SideBar from "../Components/SideBar/SideBar";
import Chat from "../Components/Chat/Chat";

const DocFusionAI = ({func}) => {

    const [userMessage, setUserMessage] = useState('');

    return(
        <div className="docFusionAI">
            <SideBar func={func} setUserMessage={setUserMessage}/>
            <Chat func={func} userMessage={userMessage}/>
        </div>
    )
}

export default DocFusionAI;