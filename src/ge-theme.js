import {createTheme} from "@mui/material";
import './ge-theme.scss';
import {frFR as coreFrFR} from "@mui/material/locale";
import { frFR as dataGridFrFR } from '@mui/x-data-grid';
import { frFR as pickersfrFR } from '@mui/x-date-pickers';

function cssVar (name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
}

export default function geTheme() {
    return createTheme({
            palette: {
                common: { black: cssVar("--base-noir"), white: cssVar("--base-blanc") },
                primary: { light: cssVar("--enu-primary-light"), main: cssVar("--enu-primary-main"), dark: cssVar("--enu-primary-dark"), contrastText: cssVar("--enu-textcontrast-main") },
                secondary: { "light": cssVar("--enu-secondary-light"), "main": cssVar("--enu-secondary"), "dark": cssVar("--enu-secondary-dark"), "contrastText": cssVar("--enu-primary-main") },
                tertiary: { "light": cssVar("--enu-tertiary-light"), "main": cssVar("--enu-tertiary"), "dark": cssVar("--enu-tertiary-dark"), "contrastText": cssVar("--enu-textcontrast-main") },
                error: { "light": cssVar("--enu-important-light"), "main": cssVar("--enu-important-main"), "dark": cssVar("--enu-important-dark"), "contrastText": cssVar("--enu-textcontrast-main") },
                text: { "light": cssVar("--enu-text-light"), "main": cssVar("--enu-text-main"), "dark": cssVar("--enu-text-dark"), "contrastText": cssVar("--enu-text-main")},
                textsecondary: { "light": cssVar("--enu-textsecondary-light"), "main": cssVar("--enu-textsecondary-main"), "dark": cssVar("--enu-textsecondary-dark"), "contrastText": cssVar("--enu-textsecondary-main")},
                info: { "light": cssVar("--enu-info-light"), "main": cssVar("--enu-info-main"), "dark": cssVar("--enu-info-dark"), "contrastText": cssVar("--enu-text-main")},
                grey: { "light": "#c7ff9c", "main": "#f2ad8f", "dark": "#b39dfa", "contrastText": "#ffea00" }
            },
            spacing: 10,
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 768,
                    md: 1024,
                    lg: 1440,
                    xl: 1920
                },
            },
            components: {
                MuiTableCell: {
                    styleOverrides: {
                        head: {
                            color: "var(--enu-textcontrast-main)",
                            backgroundColor: "var(--enu-primary-light)"
                        }
                    }
                },
                MuiMenu: {
                    styleOverrides: {
                        list: {
                            backgroundColor: "var(--enu-primary-main)",
                            color: "white"
                        }
                    }
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            outline: "none",
                            borderRadius: 0,
                            "&:focus": {
                                outline: "none"
                            }
                        }
                    }
                },
                MuiPagination: {
                    styleOverrides: {
                        root: {
                            margin: "20px auto 0",
                            width: "max-content"
                        }
                    }
                },
                MuiPaginationItem: {
                    styleOverrides: {
                        root: {
                            outline: "none"
                        },
                        rounded: {
                            outline: "none",
                            borderRadius: 0,
                            "&:focus": {
                                outline: "none"
                            }
                        }
                    }
                }
            }
        },
        dataGridFrFR, // x-data-grid translations
        pickersfrFR, // x-date-pickers translations
        coreFrFR // core translations
    );
}
