import React from "react";
import './Chat.css'
import chatIcon from '../NavBar/T-logo.png'
import userIcon from '../NavBar/account.png'
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm";

const Chat = ({userMessages, clearChat}) => {

    return (
        <div className="Chat">
            <button className="btn-clear material-symbols-outlined" onClick={() => {
                clearChat()
            }}>close</button>
            <div className="message">
                {
                    userMessages !== undefined && userMessages != null ? userMessages.map((message, idx) => (
                        <div key={idx.toString()} className={message.type === "user" ? "user-message" : "ai-message"}>
                            <div className="icon-div">
                                <img src={message.type === "user" ? userIcon : chatIcon} alt="user icon"/>
                            </div>
                            <div>
                                <Markdown remarkPlugins={[remarkGfm]}>{message.message}</Markdown>
                            </div>
                        </div>
                    )) : null
                }
            </div>
        </div>
    )
}

export default Chat;