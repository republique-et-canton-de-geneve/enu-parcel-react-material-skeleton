import React, { createContext } from "react";
import {useMediaQuery} from "@mui/material";

export const ScreenResolutionContext = createContext({});

export const ScreenResolutionProvider = props => {

    const isMobile = useMediaQuery('(max-width:768px)',{noSsr: true});
    const isNotMobile = useMediaQuery('(min-width:769px)',{noSsr: true});
    const isTablet = useMediaQuery('(min-width:769px) and (max-width:1024px)',{noSsr: true});
    const isDesktop = useMediaQuery('(min-width:1025px)',{noSsr: true});
    const isDesktopSmall = useMediaQuery('(min-width:1025px) and (max-width:1440px)',{noSsr: true});
    const isDesktopMedium = useMediaQuery('(min-width:1441px) and (max-width:1920px)',{noSsr: true});
    const isDesktopLarge = useMediaQuery('(min-width:1921px)',{noSsr: true});

    return (
        <ScreenResolutionContext.Provider value={{isMobile,isTablet,isDesktopSmall,isDesktopMedium,isDesktopLarge,isNotMobile,isDesktop}}>
            {props.children}
        </ScreenResolutionContext.Provider>
    );
}