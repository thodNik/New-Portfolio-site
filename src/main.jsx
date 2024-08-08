import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ShowProvider} from "./context/ShowContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ShowProvider>
                <Routes>
                    <Route path="/*" element={<App/>}/>
                </Routes>
            </ShowProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
