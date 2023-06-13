import * as React from 'react';
import {Button, Paper, styled, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const clickTest = ()=>{
        navigate("/test");
    }

    const styleA = {
        height: 100
    };

    const styleB = {
        color: "red"
    };

    const Subsection = styled(Paper)(({ theme }) => ({
        margin: theme.spacing(2),
        padding: "40px 40px 80px",
        textAlign: "center",
        backgroundColor: "#ddd",
        "&> button": {
            margin: theme.spacing(1)
        },
        "&> p": {
            margin: theme.spacing(1)
        }
    }));

    return (
        <>
            <Subsection>
                <Typography variant="h2" sx={{m:2}}>Appli de démo Material UI</Typography>
                <Button variant="contained" sx={{...styleA, ...styleB}} onClick={clickTest}>Page de test</Button>
            </Subsection>
        </>
    )
}