import { createRoot } from "react-dom/client";
import { App } from "./App";
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ScreenResolutionProvider } from "./ScreenResolutionProvider";
import { StyledEngineProvider } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { CssVarsProvider } from '@mui/material-next/styles';
import geTheme from "./theme/ge-theme";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import 'dayjs/locale/fr-ch';

const container = document.getElementById("app");
const root = createRoot(container);

dayjs.locale('fr-ch');

root.render(
    <StyledEngineProvider injectFirst>
        <CssVarsProvider theme={geTheme} defaultMode={"system"}>
            <CssBaseline/>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'fr-ch'}>
                <ScreenResolutionProvider>
                    <App/>
                </ScreenResolutionProvider>
            </LocalizationProvider>
        </CssVarsProvider>
    </StyledEngineProvider>
);