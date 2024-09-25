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
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import frCH from "date-fns/locale/fr-CH";
import { CssVarsProvider } from '@mui/material-next/styles';
import geTheme from "./theme/ge-theme";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
    <StyledEngineProvider injectFirst>
        <CssVarsProvider theme={geTheme} defaultMode={"system"}>
            <CssBaseline/>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={frCH}>
                <ScreenResolutionProvider>
                    <App/>
                </ScreenResolutionProvider>
            </LocalizationProvider>
        </CssVarsProvider>
    </StyledEngineProvider>
);