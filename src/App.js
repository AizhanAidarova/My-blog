import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css"
import Main from "./pages/Main/Main";
import Article from "./pages/Article/Article";
import TestComponents from "./TestCompanents/TestCompanents";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="test" element={<TestComponents/>} />
                <Route path="/" element={<Main/>} />
                <Route path="post/:id" element={<Article/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default App;
