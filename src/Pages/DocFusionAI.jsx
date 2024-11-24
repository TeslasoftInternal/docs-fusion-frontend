import React, {useState} from 'react';
import './CSS/DocFusionAI.css'
import SideBar from "../Components/SideBar/SideBar";
import Chat from "../Components/Chat/Chat";
import {runApi} from "../Services/Api";

const DocFusionAI = ({func}) => {

    const [userMessages, setUserMessages] = useState([]);
    const [file, setFile] = useState([])
    const [loading, setLoading] = useState(false)

    const pushMessage = (message) => {
        if (message.message.trim() === "") return
        setUserMessages([...userMessages, message])
        sendMessages([...userMessages, message])
    }

    const pushMessageAsBot = (user, message) => {
        const msgs = [{type: "user", message: user}, {type: "ai", message: message}]
        setUserMessages([...userMessages, ...msgs])
    }

    const clearChat = () => {
        setUserMessages([])
    }

    const sendMessages = (msgs) => {
        if (file === undefined || file.length === 0) {
            alert("Please upload a file.")
            return
        }

        let type = func.type;
        let param = JSON.stringify(msgs);

        setLoading(true)

        runApi(type, param, file).then((res) => {
            pushMessageAsBot(msgs[msgs.length - 1].message, res.message)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            pushMessageAsBot(msgs[msgs.length - 1].message, "An error occurred. Please try again: " + err)
            setLoading(false)
        });
    }

    return(
        <div className="docFusionAI">
            <SideBar loading={loading} setFiles={setFile} func={func} pushMessage={pushMessage}/>
            <Chat func={func} userMessages={userMessages} clearChat={clearChat}/>
        </div>
    )
}

export default DocFusionAI;