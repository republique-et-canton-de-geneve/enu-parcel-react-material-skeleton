import {createTheme} from "@mui/material";
import {frFR as coreFrFR} from "@mui/material/locale";
import {frFR as dataGridFrFR} from '@mui/x-data-grid';
import {frFR as pickersfrFR} from '@mui/x-date-pickers';
import {extendTheme} from "@mui/material-next/styles";
import './css/theme.css';
import './ge-theme.scss';

function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
}

let geThemeMD3 = extendTheme({
        colorSchemes: {
            light: {
                palette: {
                    primary: {
                        main: cssVar("--md-sys-color-primary-light")
                    },
                    background: {
                        default: cssVar("--md-sys-color-background"),
                        paper: cssVar("--md-sys-color-surface-1-light"),
                        mavariable: "#ffffff"
                    }
                },
            },
            dark: {
                palette: {
                    primary: {
                        main: cssVar("--md-sys-color-primary-dark")
                    },
                    background: {
                        paper: cssVar("--md-sys-color-surface-1-dark"),
                        mavariable: "#000000"
                    }
                },
            },
        },
        ref: {
            palette: {
                primary: {
                    "0": cssVar("--md-ref-palette-primary0"),
                    "10": cssVar("--md-ref-palette-primary10"),
                    "20": cssVar("--md-ref-palette-primary20"),
                    "25": cssVar("--md-ref-palette-primary25"),
                    "30": cssVar("--md-ref-palette-primary30"),
                    "35": cssVar("--md-ref-palette-primary35"),
                    "40": cssVar("--md-ref-palette-primary40"),
                    "50": cssVar("--md-ref-palette-primary50"),
                    "60": cssVar("--md-ref-palette-primary60"),
                    "70": cssVar("--md-ref-palette-primary70"),
                    "80": cssVar("--md-ref-palette-primary80"),
                    "90": cssVar("--md-ref-palette-primary90"),
                    "95": cssVar("--md-ref-palette-primary95"),
                    "98": cssVar("--md-ref-palette-primary98"),
                    "99": cssVar("--md-ref-palette-primary99"),
                    "100": cssVar("--md-ref-palette-primary100")
                },
                secondary: {
                    "0": cssVar("--md-ref-palette-secondary0"),
                    "10": cssVar("--md-ref-palette-secondary10"),
                    "20": cssVar("--md-ref-palette-secondary20"),
                    "25": cssVar("--md-ref-palette-secondary25"),
                    "30": cssVar("--md-ref-palette-secondary30"),
                    "35": cssVar("--md-ref-palette-secondary35"),
                    "40": cssVar("--md-ref-palette-secondary40"),
                    "50": cssVar("--md-ref-palette-secondary50"),
                    "60": cssVar("--md-ref-palette-secondary60"),
                    "70": cssVar("--md-ref-palette-secondary70"),
                    "80": cssVar("--md-ref-palette-secondary80"),
                    "90": cssVar("--md-ref-palette-secondary90"),
                    "95": cssVar("--md-ref-palette-secondary95"),
                    "98": cssVar("--md-ref-palette-secondary98"),
                    "99": cssVar("--md-ref-palette-secondary99"),
                    "100": cssVar("--md-ref-palette-secondary100")
                },
                tertiary: {
                    "0": cssVar("--md-ref-palette-tertiary0"),
                    "10": cssVar("--md-ref-palette-tertiary10"),
                    "20": cssVar("--md-ref-palette-tertiary20"),
                    "25": cssVar("--md-ref-palette-tertiary25"),
                    "30": cssVar("--md-ref-palette-tertiary30"),
                    "35": cssVar("--md-ref-palette-tertiary35"),
                    "40": cssVar("--md-ref-palette-tertiary40"),
                    "50": cssVar("--md-ref-palette-tertiary50"),
                    "60": cssVar("--md-ref-palette-tertiary60"),
                    "70": cssVar("--md-ref-palette-tertiary70"),
                    "80": cssVar("--md-ref-palette-tertiary80"),
                    "90": cssVar("--md-ref-palette-tertiary90"),
                    "95": cssVar("--md-ref-palette-tertiary95"),
                    "98": cssVar("--md-ref-palette-tertiary98"),
                    "99": cssVar("--md-ref-palette-tertiary99"),
                    "100": cssVar("--md-ref-palette-tertiary100")
                },
                neutral: {
                    "0": cssVar("--md-ref-palette-neutral0"),
                    "10": cssVar("--md-ref-palette-neutral10"),
                    "20": cssVar("--md-ref-palette-neutral20"),
                    "25": cssVar("--md-ref-palette-neutral25"),
                    "30": cssVar("--md-ref-palette-neutral30"),
                    "35": cssVar("--md-ref-palette-neutral35"),
                    "40": cssVar("--md-ref-palette-neutral40"),
                    "50": cssVar("--md-ref-palette-neutral50"),
                    "60": cssVar("--md-ref-palette-neutral60"),
                    "70": cssVar("--md-ref-palette-neutral70"),
                    "80": cssVar("--md-ref-palette-neutral80"),
                    "90": cssVar("--md-ref-palette-neutral90"),
                    "95": cssVar("--md-ref-palette-neutral95"),
                    "98": cssVar("--md-ref-palette-neutral98"),
                    "99": cssVar("--md-ref-palette-neutral99"),
                    "100": cssVar("--md-ref-palette-neutral100")
                },
                neutralVariant: {
                    "0": cssVar("--md-ref-palette-neutral-variant0"),
                    "10": cssVar("--md-ref-palette-neutral-variant10"),
                    "20": cssVar("--md-ref-palette-neutral-variant20"),
                    "25": cssVar("--md-ref-palette-neutral-variant25"),
                    "30": cssVar("--md-ref-palette-neutral-variant30"),
                    "35": cssVar("--md-ref-palette-neutral-variant35"),
                    "40": cssVar("--md-ref-palette-neutral-variant40"),
                    "50": cssVar("--md-ref-palette-neutral-variant50"),
                    "60": cssVar("--md-ref-palette-neutral-variant60"),
                    "70": cssVar("--md-ref-palette-neutral-variant70"),
                    "80": cssVar("--md-ref-palette-neutral-variant80"),
                    "90": cssVar("--md-ref-palette-neutral-variant90"),
                    "95": cssVar("--md-ref-palette-neutral-variant95"),
                    "98": cssVar("--md-ref-palette-neutral-variant98"),
                    "99": cssVar("--md-ref-palette-neutral-variant99"),
                    "100": cssVar("--md-ref-palette-neutral-variant100")
                },
                error: {
                    "0": cssVar("--md-ref-palette-error0"),
                    "10": cssVar("--md-ref-palette-error10"),
                    "20": cssVar("--md-ref-palette-error20"),
                    "25": cssVar("--md-ref-palette-error25"),
                    "30": cssVar("--md-ref-palette-error30"),
                    "35": cssVar("--md-ref-palette-error35"),
                    "40": cssVar("--md-ref-palette-error40"),
                    "50": cssVar("--md-ref-palette-error50"),
                    "60": cssVar("--md-ref-palette-error60"),
                    "70": cssVar("--md-ref-palette-error70"),
                    "80": cssVar("--md-ref-palette-error80"),
                    "90": cssVar("--md-ref-palette-error90"),
                    "95": cssVar("--md-ref-palette-error95"),
                    "98": cssVar("--md-ref-palette-error98"),
                    "99": cssVar("--md-ref-palette-error99"),
                    "100": cssVar("--md-ref-palette-error100")
                },
                success: {
                    "0": "#000000",
                    "10": "#0F1F0F",
                    "20": "#1F3D1F",
                    "25": "#2E5C2E",
                    "30": "#3D7B3D",
                    "35": "#4D994D",
                    "40": "#5CB85C",
                    "50": "#6EC06E",
                    "60": "#80C880",
                    "70": "#92D092",
                    "80": "#A4D8A4",
                    "90": "#B7DFB7",
                    "95": "#C9E7C9",
                    "98": "#DBEFDB",
                    "99": "#EDF7ED",
                    "100": "#FFFFFF"
                },
                warning: {
                    "0": "#000000",
                    "10": "#281D0D",
                    "20": "#503A1A",
                    "25": "#785727",
                    "30": "#A07334",
                    "35": "#C89041",
                    "40": "#f0ad4e",
                    "50": "#F2B662",
                    "60": "#F3BF75",
                    "70": "#F5C889",
                    "80": "#F7D19D",
                    "90": "#F8DBB0",
                    "95": "#FAE4C4",
                    "98": "#FCEDD8",
                    "99": "#FDF6EB",
                    "100": "#FFFFFF"
                }
            }
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

geThemeMD3 = extendTheme( {components: {
        MuiPaper: {
            defaultProps: {
                elevation: 0,
                variant: "elevation"
            },
            styleOverrides: {
                root: {
                    padding: geThemeMD3.spacing(2)
                },
                outlined: {
                    margin: geThemeMD3.spacing(2),
                    backgroundColor: geThemeMD3.vars.palette.background.mavariable
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
                    margin: geThemeMD3.spacing(1)
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    margin: geThemeMD3.spacing(1)
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
                    backgroundColor: geThemeMD3.vars.sys.color.background
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    color: geThemeMD3.vars.sys.color.onSecondaryContainer,
                    backgroundColor: geThemeMD3.vars.sys.color.secondaryContainer
                },
                body: {
                    color: geThemeMD3.vars.sys.color.onBackground,
                    backgroundColor: geThemeMD3.vars.sys.color.background
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    backgroundColor: geThemeMD3.vars.sys.color.background
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
                    color: geThemeMD3.vars.sys.color.onBackground
                },
                h2: {
                    color: geThemeMD3.vars.sys.color.onBackground
                },
                h3: {
                    color: geThemeMD3.vars.sys.color.onBackground
                },
                h4: {
                    color: geThemeMD3.vars.sys.color.onBackground
                },
                h5: {
                    color: geThemeMD3.vars.sys.color.onBackground
                },
                h6: {
                    color: geThemeMD3.vars.sys.color.onBackground
                },
                body1: {
                    color: geThemeMD3.vars.sys.color.onBackground
                },
                subtitle1: {
                    color: geThemeMD3.vars.sys.color.secondary
                },
                subtitle2: {
                    color: geThemeMD3.vars.sys.color.tertiary
                },
                body2: {
                    color: geThemeMD3.vars.sys.color.secondary
                },
                button: {
                    color: geThemeMD3.vars.sys.color.onBackground
                },
                caption: {
                    color: geThemeMD3.vars.sys.color.onBackground
                },
                overline: {
                    color: geThemeMD3.vars.sys.color.onBackground
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    backgroundColor: geThemeMD3.vars.sys.color.background,
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
    }}, geThemeMD3);

export default geThemeMD3;
