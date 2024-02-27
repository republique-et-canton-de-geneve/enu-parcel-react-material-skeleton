import * as React from 'react';
import {useContext} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./header/Header";
import TestM3 from "./test/TestM3";
import Home from "./home/Home";
import {Box} from "@mui/material";
import {ScreenResolutionContext} from "./ScreenResolutionProvider";
import {WS_SERVER} from "./websocket";
import {Nav} from "./Nav";
import {Footer} from "./Footer";
import TestForm from "./test/TestForm";

console.log("Websocket = " + WS_SERVER);

export function App() {
    const {isDesktopSmall,isDesktop} = useContext(ScreenResolutionContext);

    const layoutDesktop = {
        display: "grid",
        gridTemplateColumns: isDesktopSmall ? "200px 1fr" : "300px 1fr",
        gridTemplateRows: "1fr",
        gridAutoFlow: "row",
        gridTemplateAreas: `"menu ."`,
        gridArea: "content",
        minHeight: "calc(100vh - 172px)"
    };

    const layoutMobile = {
        gridArea: "content",
        minHeight: "calc(100vh - 172px)"
    };

    return (
        <>
            <Header/>
            <Box sx={{
                bgcolor: "background.default",
                color: "background.contrastText",
                display: "grid",
                gridTemplateColumns: "1fr",
                gridTemplateRows: "1fr 100px",
                gridAutoRows: "1fr",
                justifyContent: "stretch",
                alignContent: "stretch",
                justifyItems: "stretch",
                gridTemplateAreas: `
                "content"
                "footer"
                `
            }}>
                <BrowserRouter>
                    <Box sx={isDesktop ? layoutDesktop : layoutMobile}>
                        {isDesktop && <Nav/>}
                        <Box component="main" sx={{margin: 1}}>
                            <Routes>
                                <Route element={<TestM3/>} path="testM3" />
                                <Route element={<TestForm/>} path="testForm" />
                                <Route element={<Home/>} path="*" />
                            </Routes>
                        </Box>
                    </Box>
                </BrowserRouter>
                <Footer/>
            </Box>
        </>
    );
}