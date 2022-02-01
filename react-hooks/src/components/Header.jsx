import React from "react";
import { ThemeContext } from "../context/ThemeContext";
const Header = () =>{

    const [darkmode, setDarkMode]  = React.useState(false);
    const color = React.useContext(ThemeContext);
    const handleClick = () =>{
        setDarkMode(!darkmode);
    }
    return(
        <header className="header">
            <h1 style={{color}}>React Hooks</h1>
            <button onClick={handleClick} type="button">
                {darkmode ? 'Dark Mode' : 'Light Mode'}
            </button>
        </header>
    )
}

export {Header}