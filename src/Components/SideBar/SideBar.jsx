import React, {useEffect, useState} from "react";
import './SideBar.css'
import file_icon_not_chosen from './file.png'
import file_icon_chosen from './file1.png'
import {suggestions} from "./suggestions";

const SideBar = ({func, setUserMessage}) => {
    const [file, setFile] = React.useState([])
    const [userMessage, setLocalUserMessage] = useState('');
    return (
        <div className="SideBar">
            <input style={{
                display: 'none',
            }} id="fileinput" type={"file"} onChange={(e) => {
                setFile(e.target.files)
            }}/>

            <div onClick={() => {
                document.getElementById("fileinput").click();
            }} className={file.length === 0 ? "choose-file" : "chosen-file"}>
                <img
                    className="file-icon"
                    src={file.length === 0 ? file_icon_not_chosen : file_icon_chosen}
                    alt="File icon"
                />
                &nbsp;&nbsp;
                <p className="upload-file">{
                    file.length > 0 ? file[0].name : "Upload file"
                }</p>
            </div>

            <textarea
                className="user-input"
                placeholder={func.placeholder === undefined ? "Start typing..." : func.placeholder}
                value={userMessage}
                onChange={(e) => setLocalUserMessage(e.target.value)}>
            </textarea>
            <span className="send-button material-symbols-outlined"
                  onClick={() => {
                      setUserMessage(userMessage);
                      setLocalUserMessage('');
                  }}
            >send</span>

            <div className="suggestions">

                {suggestions.map((suggestion) => (
                    <div className="suggestion">
                        <p className="name">{suggestion.name}</p>
                        <p className="description">{suggestion.description}</p>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default SideBar;