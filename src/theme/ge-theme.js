import {frFR as coreFrFR} from "@mui/material/locale";
import {frFR as dataGridFrFR} from '@mui/x-data-grid/locales';
import {frFR as pickersfrFR} from '@mui/x-date-pickers/locales';
import {extendTheme} from "@mui/material-next/styles";
import {themeV2dark, themeV2light, themeV3dark, themeV3light} from "./mui-theme-adapter";
import {ref_palette} from "./mui-theme-ref-palette";

//  --md-sys-color-surface-2: rgb(27 35 42);
//   --md-sys-color-surface-3: rgb(31 40 49);
//   --md-sys-color-surface-4: rgb(33 42 51);
//   --md-sys-color-surface-5: rgb(36 46 56);

let geTheme = extendTheme({
        ref: ref_palette,
        colorSchemes: {
            light: {
                ...themeV2light,
                ...themeV3light,
                sys: {
                    ...themeV3light.sys,
                    color: {
                        ...themeV3light.sys.color,
                        surface2: 'rgb(231 237 246)',
                        surface3: 'rgb(225 232 242)',
                        surface4: 'rgb(223 231 241)',
                        surface5: 'rgb(219 228 239)',
                    },
                },
            },
            dark: {
                ...themeV2dark,
                ...themeV3dark,
                sys: {
                    ...themeV3dark.sys,
                    color: {
                        ...themeV3dark.sys.color,
                        surface2: 'rgb(27 35 42)',
                        surface3: 'rgb(31 40 49)',
                        surface4: 'rgb(33 42 51)',
                        surface5: 'rgb(36 46 56)',
                    },
                },
            },
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 768,
                md: 1024,
                lg: 1440,
                xl: 1920
            }
        },
        typography: {
            fontSize: 14,
            h1: {
                fontSize: '2.25rem',
                fontWeight: 400,
                '@media (max-width:768px)': {
                    fontSize: '1.75rem',
                }
            },
            h2: {
                fontSize: '2rem',
                fontWeight: 400,
                '@media (max-width:768px)': {
                    fontSize: '1.5rem',
                }
            },
            h3: {
                fontSize: '1.75rem',
                fontWeight: 400,
                '@media (max-width:768px)': {
                    fontSize: '1.25rem',
                }
            },
            h4: {
                fontSize: '1.5rem',
                fontWeight: 400,
                '@media (max-width:768px)': {
                    fontSize: '1.15rem',
                    fontWeight: 500
                }
            },
            h5: {
                fontSize: '1.25rem',
                fontWeight: 400,
                '@media (max-width:768px)': {
                    fontSize: '1rem',
                    fontWeight: 500
                }
            }
        }
    },
    dataGridFrFR, // x-data-grid translations
    pickersfrFR, // x-date-pickers translations
    coreFrFR // core translations
);

geTheme = extendTheme( {components: {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                elevation0:  { boxShadow: "none" },
                elevation1:  { boxShadow: "none", backgroundColor: "var(--md-sys-color-surface)" },
                elevation2:  { boxShadow: "none", backgroundColor: "var(--md-sys-color-surface2)" },
                elevation3:  { boxShadow: "none", backgroundColor: "var(--md-sys-color-surface3)" },
                elevation4:  { boxShadow: "none", backgroundColor: "var(--md-sys-color-surface4)" },
                elevation5:  { boxShadow: "none", backgroundColor: "var(--md-sys-color-surface5)" },
                root: {
                    padding: geTheme.spacing(2)
                },
                outlined: {
                    margin: geTheme.spacing(2)
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    width: "fit-content",
                    margin: geTheme.spacing(1),
                },
                standardSuccess: {
                    backgroundColor: geTheme.vars.sys.color.successContainer,
                    color: geTheme.vars.sys.color.onSuccessContainer
                },
                standardInfo: {
                    backgroundColor: geTheme.vars.sys.color.infoContainer,
                    color: geTheme.vars.sys.color.onInfoContainer
                },
                standardWarning: {
                    backgroundColor: geTheme.vars.sys.color.warningContainer,
                    color: geTheme.vars.sys.color.onWarningContainer
                },
                standardError: {
                    backgroundColor: geTheme.vars.sys.color.errorContainer,
                    color: geTheme.vars.sys.color.onErrorContainer
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    padding: 16,
                    borderRadius: 12
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: geTheme.spacing(1)
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    margin: geTheme.spacing(1)
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    backgroundColor: "inherit"
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    backgroundColor: "inherit"
                }
            }
        },
        MuiAppBar: {
            defaultProps: {
                color: "inherit"
            },
            styleOverrides: {
                root: {
                    backgroundColor: geTheme.vars.sys.color.background
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    color: geTheme.vars.sys.color.onSecondaryContainer,
                    backgroundColor: geTheme.vars.sys.color.secondaryContainer
                },
                body: {
                    color: geTheme.vars.sys.color.onBackground,
                    backgroundColor: geTheme.vars.sys.color.background
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    backgroundColor: geTheme.vars.sys.color.background
                }
            }
        },
        MuiMenuList: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    backgroundColor: "inherit"
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    backgroundColor: "inherit"
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    color: geTheme.vars.sys.color.onBackground
                },
                h2: {
                    color: geTheme.vars.sys.color.onBackground
                },
                h3: {
                    color: geTheme.vars.sys.color.onBackground
                },
                h4: {
                    color: geTheme.vars.sys.color.onBackground
                },
                h5: {
                    color: geTheme.vars.sys.color.onBackground
                },
                h6: {
                    color: geTheme.vars.sys.color.onBackground
                },
                body1: {
                    color: geTheme.vars.sys.color.onBackground
                },
                subtitle1: {
                    color: geTheme.vars.sys.color.secondary
                },
                subtitle2: {
                    color: geTheme.vars.sys.color.tertiary
                },
                body2: {
                    color: geTheme.vars.sys.color.secondary
                },
                button: {
                    color: geTheme.vars.sys.color.onBackground
                },
                caption: {
                    color: geTheme.vars.sys.color.onBackground
                },
                overline: {
                    color: geTheme.vars.sys.color.onBackground
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    backgroundColor: geTheme.vars.sys.color.background,
                    padding: 0
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: 50
                }
            }
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    borderRadius: 10
                }
            }
        }
    }}, geTheme);

export default geTheme;
