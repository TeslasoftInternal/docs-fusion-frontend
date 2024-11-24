import React, {useState} from 'react';
import './CSS/DocFusionAI.css'
import SideBar from "../Components/SideBar/SideBar";
import Chat from "../Components/Chat/Chat";
import {runApi} from "../Services/Api";

const DocFusionAI = ({func}) => {

    const [userMessages, setUserMessages] = useState(localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : []);
    const [file, setFile] = useState([])
    const [loading, setLoading] = useState(false)

    const pushMessage = (message) => {
        let mx = {
            type: "user",
            message: message
        }

        if (func.type === "analyze") {
            mx.message = message
        } else if (func.type === "summarize") {
            mx.message = "Summarize the following text."
        } else if (func.type === "translate") {
            mx.message = "Translate to the following language: " + message
        } else if (func.type === "categorize") {
            mx.message = "Automatically categorize the document based on its content."
        } else if (func.type === "optimize") {
            mx.message = "Conduct a thorough review to correct grammar, spelling, and punctuation errors, enhance structure, and flag passive voice, jargon, or repetitive phrases."
        } else if (func.type === "highlight") {
            mx.message = "Highlight the most important sentences or paragraphs in the document."
        } else if (func.type === "email") {
            mx.message = "Generate Professional Email according to the following instructions: " + message
        }

        setUserMessages([...userMessages, mx])
        sendMessages([...userMessages, mx])
        localStorage.setItem("messages", JSON.stringify([...userMessages, mx]))
    }

    const pushMessageAsBot = (user, message) => {
        const msgs = [{type: "user", message: user}, {type: "ai", message: message}]
        setUserMessages([...userMessages, ...msgs])
        localStorage.setItem("messages", JSON.stringify([...userMessages, ...msgs]))
    }

    const clearChat = () => {
        setUserMessages([])
        localStorage.setItem("messages", JSON.stringify([]))
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