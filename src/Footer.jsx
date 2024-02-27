import {Box, Typography} from "@mui/material";
import * as React from "react";

export function Footer() {
    return (
        <Box sx={{gridArea: "footer", bgcolor: "secondaryContainer", color: "secondaryContainer.contrastText", textAlign: "center"}} component="footer">
            <Typography>Footer</Typography>
        </Box>);
}