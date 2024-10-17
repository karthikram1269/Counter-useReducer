import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Counter from "./Components/Counter";

export default function App(){

    return(
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Counter />}/>
                <Route path = "*" element={<ErrorPage />}/> 
                <Route />
            </Routes>
        </BrowserRouter >
    )
}


