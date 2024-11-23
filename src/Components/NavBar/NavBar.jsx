import React, {useEffect, useState} from 'react';
import logo from './T-logo.png'
import account_icon from './account.png'
import {prompts} from './prompts'

import './NavBar.css'
import {Tooltip} from "@mui/material";

const NavBar = ({setFunc}) => {

    const[func, setFunction] = React.useState({})

    useEffect(()=>{
        setFunc(func)
    }, [func])

    return (
        <div className="nav-bar">
            <div className="logo-container">
                <img className="logo"
                    src={logo}
                    alt="Logo"
                />
                <h1 className="name"> DocFusion AI</h1>
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
            </div>

            <img className="account-icon"
                    src={account_icon}
                    alt="Account icon"
                />
            </div>
    )
}
export default NavBar;