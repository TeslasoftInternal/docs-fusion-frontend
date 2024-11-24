import React, {useEffect} from "react";
import './SideBar.css'
import file_icon_not_chosen from './file.png'
import file_icon_chosen from './file1.png'
import {suggestions} from "./suggestions";
import {CircularProgress} from "@mui/material";

const SideBar = ({func, pushMessage, setFiles, loading}) => {
    const [file, setFile] = React.useState([])

    useEffect(() => {
        setFiles(file)
    }, [file]);

    const insertSuggestion = (text) => {
        const inputField = document.getElementById("user-input");
        inputField.value = text;
        inputField.focus();
    };

    return (
        <div className="SideBar">
            {
                loading ? <div className={"loading-bar"}>
                    <CircularProgress sx={{
                        color: "#e20074",
                    }}/>
                </div> : null
            }
            <input style={{
                display: 'none',
            }} id="fileinput" type={"file"} onChange={(e) => {
                setFile(e.target.files)
            }}/>

            <div onClick={() => {
                document.getElementById("fileinput").click();
            }} className={ file.length === 0 ? "choose-file" : "chosen-file" }>
                <img
                    className="file-icon"
                    src={ file.length === 0 ? file_icon_not_chosen : file_icon_chosen }
                    alt="File icon"
                />
                &nbsp;&nbsp;
                <p className="upload-file">{
                    file.length > 0 ? file[0].name : "Upload file"
                }</p>
            </div>

            <textarea onKeyDown={(e) => {
                if (e.key === "Enter" && e.shiftKey && !loading) {
                    pushMessage({
                        type: "user",
                        message: document.getElementById("user-input").value
                    });

                    document.getElementById("user-input").value = ""
                }
            }}
                id = "user-input"
                className="user-input"
                placeholder={func.placeholder === undefined ? "Start typing..." : func.placeholder}>
            </textarea>
            <span className="send-button material-symbols-outlined"
                  onClick={() => {
                      pushMessage({
                            type: "user",
                            message: document.getElementById("user-input").value
                      });

                      document.getElementById("user-input").value = ""
                  }}
            >send</span>

            <div className="suggestions">

                {suggestions.map((suggestion, idx) => (
                    <div key={idx.toString()} className="suggestion" onClick={() => {
                        func.type = suggestion.type
                        if (suggestion.type === "translate") {
                            insertSuggestion("Translate to the following language: ");
                        }
                        else if (suggestion.type === "analyze") {
                            insertSuggestion("Fill the missing words in text from the following PDF content. " +
                                "If there`s no missing words, write it:")
                            pushMessage({
                                type: "user",
                                message: document.getElementById("user-input").value
                            })
                        }
                        else {
                            insertSuggestion(suggestion.name)
                            pushMessage({
                                type: "user",
                                message: document.getElementById("user-input").value
                            })
                        }
                        }}>
                        <p className="name">{suggestion.name}</p>
                        <p className="description">{suggestion.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideBar;