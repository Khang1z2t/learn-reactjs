import React from "react";
import Content from "./Content";
import './App.css';
import {ThemeContext} from "./ThemeContext";


function Context() {
    const context = React.useContext(ThemeContext);

    return (
        <div className={'container'}>
            <button className={'btn btn-primary'} onClick={context.toggleTheme}>Toggle theme</button>
            <Content/>
        </div>

    );
}

export default Context;