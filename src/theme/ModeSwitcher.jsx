import * as React from "react";
import {Button, useColorScheme} from "@mui/material-next";

export const ModeSwitcher = () => {
    const { setColorScheme, systemMode,colorScheme, mode, setMode } = useColorScheme();

    return (
        <Button
            variant="outlined"
            onClick={() => {
                console.log("colorScheme = " + colorScheme);
                console.log("mode = " + mode);
                console.log("systemMode = " + mode);
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
            }}
        >
            {mode === 'light' ? 'dark' : 'light'}
        </Button>
    );
};
