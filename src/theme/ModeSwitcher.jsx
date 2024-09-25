import * as React from "react";
import {Button, useColorScheme} from "@mui/material-next";

export const ModeSwitcher = () => {
    const {colorScheme, mode, setMode } = useColorScheme();

    const darkMode = (mode === 'dark' || colorScheme === 'dark');

    return (
        <Button
            variant="outlined"
            onClick={() => {
                if (darkMode) {
                    setMode('light');
                } else {
                    setMode('dark');
                }
            }}
        >
            {darkMode ? 'light' : 'dark'}
        </Button>
    );
};
