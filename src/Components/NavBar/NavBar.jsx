import React, { useEffect } from 'react';
import logo from './icon.png'
import account_icon from './account.png'
import {prompts} from './prompts'

import './NavBar.css'
import {Tooltip} from "@mui/material";

const NavBar = ({setFunc, setPreviewOpened}) => {

    const [previewIsOpened, setPreviewIsOpened] = React.useState(false)

    const[func, setFunction] = React.useState(prompts[0])

    useEffect(()=>{
        setFunc(func)
    }, [func])

    useEffect(()=>{
        setPreviewOpened(previewIsOpened)
    }, [previewIsOpened])

    return (
        <div className="nav-bar">
            <div className="logo-container">
                <img className="logo"
                    src={logo}
                    alt="Logo"
                />
                <h1 className="name">DocFusion AI</h1>
            </div>

            <div className="functions">
                {prompts.map((prompt) => {
                    return (
                        <Tooltip title={prompt.function} key={prompt.id}>
                            {<span
                                onClick={() => {
                                    setFunction(prompt)
                                }}
                                style={{ color: "#e20074" }}
                                className={`function ${func.function === prompt.function ? "chosen" : ""} material-symbols-outlined`}
                                >
                                {prompt.icon}
                            </span>}
                        </Tooltip>
                    );
                })}
                <div style={{
                    width: "1px",
                    height: "40px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)"
                }}></div>
                <Tooltip title="Preview document">
                    <span
                        onClick={() => {
                            setPreviewIsOpened(!previewIsOpened)}
                    }
                        className={`function ${previewIsOpened ? "chosen" : ""} material-symbols-outlined`}
                        style={{ color: "#e20074", cursor: "pointer" }}
                    >
                        {previewIsOpened ? "visibility_off" : "visibility"}
                    </span>
                </Tooltip>
            </div>

            <img className="account-icon"
                    src={account_icon}
                    alt="Account icon"
                />
            </div>
    )
}
export default NavBar;