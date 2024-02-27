import * as React from 'react';
import {FormControl, InputLabel, ListItemButton, MenuItem, Paper, Select, Typography} from "@mui/material";

export default function TestForm() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (<>
        <Paper>
            <Typography>Form avec fond couleur</Typography>
            <form>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Sélection</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Sélection"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </form>
        </Paper>
    </>);
}