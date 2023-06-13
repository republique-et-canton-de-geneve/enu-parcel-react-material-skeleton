import {createRoot} from "react-dom/client";
import {App} from "./App";
import CssBaseline from '@mui/material/CssBaseline';
import * as React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { LocalizationProvider, frFR as pickersfrFR } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { frFR as dataGridFrFR } from '@mui/x-data-grid';
import { frFR as coreFrFR } from '@mui/material/locale';

const container = document.getElementById("app");
const root = createRoot(container);
const theme = createTheme(
    {palette: {
            primary: {main: '#1976d2'}},
    },
    dataGridFrFR, // x-data-grid translations
    pickersfrFR, // x-date-pickers translations
    coreFrFR // core translations
);

root.render(
    <>
        <CssBaseline/>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </LocalizationProvider>
    </>
);