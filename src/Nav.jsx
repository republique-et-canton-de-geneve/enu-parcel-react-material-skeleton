import * as React from "react";
import {Divider, List, ListItemIcon, ListItemText} from "@mui/material-next";
import {Paper, Typography} from "@mui/material";
import Home from '@mui/icons-material/Home';
import Build from '@mui/icons-material/Build';
import Help from '@mui/icons-material/Help';
import Cloud from '@mui/icons-material/Cloud';
import ListItemButton from "@mui/material-next/ListItemButton";
import {useNavigate} from "react-router-dom";
import {SelectMesEspaces} from "./selecteur-nav/SelectMesEspaces";
import {useEffect, useRef} from "react";

export function Nav() {
    const [selectedIndex, setSelectedIndex] = React.useState("/");
    const navigateTo = useNavigate();

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        navigateTo(index);
    };

    const root = document.getElementById("app");
    const menu = useRef();
    let scrollTimer = undefined;

    const scrollHandler = () => {
        if(!scrollTimer) {
            scrollTimer = setTimeout(()=>{
                let offsetY = root.scrollHeight - window.scrollY - window.innerHeight - 188;
                let remaniningHeight = (offsetY > 0 ? window.innerHeight - 76 : window.innerHeight - 76 + offsetY) - (menu?.current?.scrollHeight ? menu.current.scrollHeight : 0);
                menu.current.style["top"] = remaniningHeight > 0 ? window.scrollY + "px" : (window.scrollY + remaniningHeight) + "px";
                scrollTimer = undefined;
            }, 100);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <Paper component="nav" ref={menu} sx={{
            gridArea: "menu", position: "relative", height: "min-content", top: 0, transition: "top 0.2s"
        }}>
            <SelectMesEspaces/>
            <List>
                <ListItemButton selected={selectedIndex === "/"} onClick={(e) => {handleListItemClick(e,"/")}}>
                    <ListItemIcon><Home fontSize="small" /></ListItemIcon>
                    <ListItemText>Home</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        ⌘H
                    </Typography>
                </ListItemButton>
                <ListItemButton selected={selectedIndex === "TestM3"} onClick={(e) => {handleListItemClick(e,"TestM3")}}>
                    <ListItemIcon>
                        <Build fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Test M3</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        ⌘T
                    </Typography>
                </ListItemButton>
                <ListItemButton selected={selectedIndex === "Aide"} onClick={(e) => {handleListItemClick(e,"TestForm")}}>
                    <ListItemIcon>
                        <Help fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Aide</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        ⌘A
                    </Typography>
                </ListItemButton>
                <Divider />
                <ListItemButton  selected={selectedIndex === "Web"} onClick={(e) => {handleListItemClick(e,"Web")}}>
                    <ListItemIcon>
                        <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Web Clipboard</ListItemText>
                </ListItemButton>
            </List>
        </Paper>
);
}