import { createRoot } from "react-dom/client";
import { App } from "./App";
import CssBaseline from '@mui/material/CssBaseline';
import * as React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ScreenResolutionProvider } from "./ScreenResolutionProvider";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import geTheme from "./ge-theme";
import frCH from "date-fns/locale/fr-CH";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
    <>
        <CssBaseline/>
        <StyledEngineProvider injectFirst>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={frCH}>
                <ScreenResolutionProvider>
                    <ThemeProvider theme={geTheme()}>
                        <App/>
                    </ThemeProvider>
                </ScreenResolutionProvider>
            </LocalizationProvider>
        </StyledEngineProvider>
    </>
);