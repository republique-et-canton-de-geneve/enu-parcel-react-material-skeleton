import {useTheme} from "@mui/material-next";
import {Box, FormControl, MenuItem, Select, SvgIcon} from "@mui/material";

const urlEspaces = {
  "A": "https://www.ge.ch",
  "B": "https://www.tdg.ch",
  "C": "https://www.google.ch"
};

function IconEspaceEdemarches() {
    const theme = useTheme();
    return (
        <SvgIcon viewBox="0 0 125.92 88.51" sx={{mr:1, ml:1}}>
            <path d="M68.36 7.12v.02a44.25 44.25 0 100 74.22l57.56-37.38z" fill={theme.vars.sys.color.primary}/>
            <path
                d="M32.36 31.86c4.58-4.58 12.2-6.52 19.41-1.39L30.5 51.76c-5.4-8.88-1.53-16.5 1.87-19.9m28.61 16.86a14.88 14.88 0 01-4.27 7.48c-6.59 6.59-15.6 4.78-18.52 2.7l29.89-29.88a30.17 30.17 0 00-4.09-5.2c-9.7-9.71-27.95-12.55-40.14-.35-11.86 11.86-10.27 30.23.62 41.11a28.6 28.6 0 0040.7.07 27.56 27.56 0 007.75-15.93z"
                fill={theme.vars.sys.color.onPrimary}/>
            {/*<circle cx="88.51" cy="68.42" r="14.57" fill="#99ca3c"/>*/}
        </SvgIcon>
    );
}

export function SelectMesEspaces () {
    const theme = useTheme();

    return (
        <FormControl fullWidth sx={{mb: 1}}>
            <Select
                sx={{backgroundColor: "var(--md-sys-color-background)", borderRadius: 50}}
                variant="outlined"
                id="demo-simple-select"
                value="Mes espaces"
                onChange={(e)=>{window.location.href=urlEspaces[e.target.value];}}
            >
                <MenuItem value={'A'} sx={{backgroundColor: theme.vars.palette.action.selected}}>Espace A</MenuItem>
                <MenuItem value={'B'}>Espace B</MenuItem>
                <MenuItem value={'C'}>Espace C</MenuItem>
                <MenuItem value={'Mes espaces'} sx={{display: 'none'}}>
                    <Box sx={{display:"flex", alignItems: "center"}}><IconEspaceEdemarches/>Mes espaces</Box>
                </MenuItem>
            </Select>
        </FormControl>
    );
}
