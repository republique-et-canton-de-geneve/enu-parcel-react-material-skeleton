import * as React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./header/Header";
import Test from "./test/Test";
import Home from "./home/Home";

export function App() {
    return (
        <>
            <Header/>
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Test/>} path="test" />
                        <Route element={<Home/>} path="*" />
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    );
}