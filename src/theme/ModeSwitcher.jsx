import {Button, useColorScheme} from "@mui/material-next";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

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
            startIcon={darkMode ? <LightModeIcon/> : <DarkModeIcon/>}
        >
            {darkMode ? 'light' : 'dark'}
        </Button>
    );
};
