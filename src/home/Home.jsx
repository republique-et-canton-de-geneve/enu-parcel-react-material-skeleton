import * as React from 'react';
import {Button, Paper, styled, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useContext} from "react";
import {ScreenResolutionContext} from "../ScreenResolutionProvider";

export default function Home() {
    const navigate = useNavigate();
    const {isMobile,isTablet,isDesktopSmall,isDesktopMedium,isDesktopLarge,isNotMobile,isDesktop} = useContext(ScreenResolutionContext);

    const clickTestM3 = ()=>{
        navigate("/testM3");
    }

    const styleA = {
        height: 100
    };

    const styleB = {
        width: 400
    };

    const Subsection = styled(Paper)(({ theme }) => ({
        margin: theme.spacing(2),
        padding: "40px 40px 80px",
        textAlign: "center",
        "&> button": {
            margin: theme.spacing(1)
        }
    }));

    const highlightResolution = (boolean) => (
        {
            fontWeight: boolean ? 800 : 200,
            color: boolean ? 'white' : 'black',
            backgroundColor: boolean ? 'var(--md-sys-color-primary)' : 'white',
            border: 'none',
            padding: '10px !important',
            height: 'auto !important'
        });

    return (
        <>
            <Subsection>
                <Typography variant="h2" sx={{m:2}}>Appli de démo Material UI</Typography>
                <Button variant="contained" sx={{...styleA, ...styleB}} onClick={clickTestM3}>Page de test Material3</Button>
            </Subsection>
            <Subsection>
                <Typography sx={highlightResolution(isMobile)}>isMobile</Typography>
                <Typography sx={highlightResolution(isTablet)}>isTablet</Typography>
                <Typography sx={highlightResolution(isDesktopSmall)}>isDesktopSmall</Typography>
                <Typography sx={highlightResolution(isDesktopMedium)}>isDesktopMedium</Typography>
                <Typography sx={highlightResolution(isDesktopLarge)}>isDesktopLarge</Typography>
                <Typography sx={highlightResolution(isNotMobile)}>isNotMobile</Typography>
                <Typography sx={highlightResolution(isDesktop)}>isDesktop</Typography>
            </Subsection>
        </>
    )
}