import React from 'react';
import ReactDOM from 'react-dom/client';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {BrowserRouter} from "react-router";

import './index.css';
import reportWebVitals from './reportWebVitals';
import {ComponentPreviews, useInitial} from "./dev";
import App from "./App";
import {StoreProvider} from "./Components/GlobalState/store";

// Fake Comments
function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `Nội dung commnet của bài học ${id}`
            })
        )
    }, 2000)
}

emitComment(1);
emitComment(2);
emitComment(3);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <BrowserRouter>
                <StoreProvider>
                    <App/>
                </StoreProvider>
            </BrowserRouter>
        </DevSupport>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
