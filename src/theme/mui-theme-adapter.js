import './css/dark.css';
import './css/light.css';
import './css/ge-theme.scss';
import {ref_palette} from "./mui-theme-ref-palette";

const darkDiv = document.createElement('div');
const lightDiv = document.createElement('div');
darkDiv.classList.add('dark');
lightDiv.classList.add('light');
darkDiv.style.display = 'none';
lightDiv.style.display = 'none';
document.body.appendChild(darkDiv);
document.body.appendChild(lightDiv);

function cssVar(name, mode) {
    return getComputedStyle(mode === 'dark' ? darkDiv : lightDiv).getPropertyValue(name).trim();
}

const createColorScheme = (mode) => ({
    ref: ref_palette,
    palette: {
        mode: mode,
        primary: {
            main: cssVar('--md-sys-color-primary', mode),
            contrastText: cssVar('--md-sys-color-on-primary', mode),
        },
        secondary: {
            main: cssVar('--md-sys-color-secondary', mode),
            contrastText: cssVar('--md-sys-color-on-secondary', mode),
        },
        background: {
            default: cssVar('--md-sys-color-background', mode),
            paper: cssVar('--md-sys-color-surface-1-'+mode, mode),
            highlight: cssVar('--md-sys-color-surface-container', mode),
        },
        error: {
            main: cssVar('--md-sys-color-error', mode),
            contrastText: cssVar('--md-sys-color-on-error', mode),
            container: cssVar('--md-sys-color-error-container', mode),
            onContainer: cssVar('--md-sys-color-on-error-container', mode),
        },
        success: {
            main: cssVar('--md-extended-color-success-color', mode),
            contrastText: cssVar('--md-extended-color-success-on-color', mode),
            container: cssVar('--md-extended-color-success-color-container', mode),
            onContainer: cssVar('--md-extended-color-success-on-color-container', mode),
        },
        info:{
            main: cssVar('--md-extended-color-info-color', mode),
            contrastText: cssVar('--md-extended-color-info-on-color', mode),
            container: cssVar('--md-extended-color-info-color-container', mode),
            onContainer: cssVar('--md-extended-color-info-on-color-container', mode),
        },
        warning: {
            main: cssVar('--md-extended-color-warning-color', mode),
            contrastText: cssVar('--md-extended-color-warning-on-color', mode),
            container: cssVar('--md-extended-color-warning-color-container', mode),
            onContainer: cssVar('--md-extended-color-warning-on-color-container', mode),
        },
        notifications: {
            main: cssVar('--md-extended-color-notifications-color', mode),
            contrastText: cssVar('--md-extended-color-notifications-on-color', mode),
            container: cssVar('--md-extended-color-notifications-color-container', mode),
            onContainer: cssVar('--md-extended-color-notifications-on-color-container', mode),
        },
        text: {
            primary: cssVar('--md-sys-color-on-background', mode),
            secondary: cssVar('--md-sys-color-on-surface', mode)
        }
    }
});

// Create themes for both light and dark modes
export const themeV2light = createColorScheme('light');
export const themeV2dark = createColorScheme('dark');

const theme = (mode) => ({
    sys: {
        color: {
            primary: cssVar("--md-sys-color-primary", mode),
            surfaceTint: cssVar("--md-sys-color-surface-tint", mode),
            onPrimary: cssVar("--md-sys-color-on-primary", mode),
            primaryContainer: cssVar("--md-sys-color-primary-container", mode),
            onPrimaryContainer: cssVar("--md-sys-color-on-primary-container", mode),
            secondary: cssVar("--md-sys-color-secondary", mode),
            onSecondary: cssVar("--md-sys-color-on-secondary", mode),
            secondaryContainer: cssVar("--md-sys-color-secondary-container", mode),
            onSecondaryContainer: cssVar("--md-sys-color-on-secondary-container", mode),
            tertiary: cssVar("--md-sys-color-tertiary", mode),
            onTertiary: cssVar("--md-sys-color-on-tertiary", mode),
            tertiaryContainer: cssVar("--md-sys-color-tertiary-container", mode),
            onTertiaryContainer: cssVar("--md-sys-color-on-tertiary-container", mode),
            error: cssVar("--md-sys-color-error", mode),
            onError: cssVar("--md-sys-color-on-error", mode),
            errorContainer: cssVar("--md-sys-color-error-container", mode),
            onErrorContainer: cssVar("--md-sys-color-on-error-container", mode),
            background: cssVar("--md-sys-color-background", mode),
            onBackground: cssVar("--md-sys-color-on-background", mode),
            surface: cssVar("--md-sys-color-surface", mode),
            onSurface: cssVar("--md-sys-color-on-surface", mode),
            surfaceVariant: cssVar("--md-sys-color-surface-variant", mode),
            onSurfaceVariant: cssVar("--md-sys-color-on-surface-variant", mode),
            outline: cssVar("--md-sys-color-outline", mode),
            outlineVariant: cssVar("--md-sys-color-outline-variant", mode),
            shadow: cssVar("--md-sys-color-shadow", mode),
            scrim: cssVar("--md-sys-color-scrim", mode),
            inverseSurface: cssVar("--md-sys-color-inverse-surface", mode),
            inverseOnSurface: cssVar("--md-sys-color-inverse-on-surface", mode),
            inversePrimary: cssVar("--md-sys-color-inverse-primary", mode),
            primaryFixed: cssVar("--md-sys-color-primary-fixed", mode),
            onPrimaryFixed: cssVar("--md-sys-color-on-primary-fixed", mode),
            primaryFixedDim: cssVar("--md-sys-color-primary-fixed-dim", mode),
            onPrimaryFixedVariant: cssVar("--md-sys-color-on-primary-fixed-variant", mode),
            secondaryFixed: cssVar("--md-sys-color-secondary-fixed", mode),
            onSecondaryFixed: cssVar("--md-sys-color-on-secondary-fixed", mode),
            secondaryFixedDim: cssVar("--md-sys-color-secondary-fixed-dim", mode),
            onSecondaryFixedVariant: cssVar("--md-sys-color-on-secondary-fixed-variant", mode),
            tertiaryFixed: cssVar("--md-sys-color-tertiary-fixed", mode),
            onTertiaryFixed: cssVar("--md-sys-color-on-tertiary-fixed", mode),
            tertiaryFixedDim: cssVar("--md-sys-color-tertiary-fixed-dim", mode),
            onTertiaryFixedVariant: cssVar("--md-sys-color-on-tertiary-fixed-variant", mode),
            surfaceDim: cssVar("--md-sys-color-surface-dim", mode),
            surfaceBright: cssVar("--md-sys-color-surface-bright", mode),
            surfaceContainerLowest: cssVar("--md-sys-color-surface-container-lowest", mode),
            surfaceContainerLow: cssVar("--md-sys-color-surface-container-low", mode),
            surfaceContainer: cssVar("--md-sys-color-surface-container", mode),
            surfaceContainerHigh: cssVar("--md-sys-color-surface-container-high", mode),
            warning: cssVar("--md-extended-color-warning-color", mode),
            onWarning: cssVar("--md-extended-color-warning-color", mode),
            warningContainer: cssVar("--md-extended-color-warning-color-container", mode),
            onWarningContainer: cssVar("--md-extended-color-warning-on-color-container", mode),
            info: cssVar("--md-extended-color-info-color", mode),
            onInfo: cssVar("--md-extended-color-info-on-color", mode),
            infoContainer: cssVar("--md-extended-color-info-color-container", mode),
            onInfoContainer: cssVar("--md-extended-color-info-on-color-container", mode),
            success: cssVar("--md-extended-color-success-color", mode),
            onSuccess: cssVar("--md-extended-color-success-on-color", mode),
            successContainer: cssVar("--md-extended-color-success-color-container", mode),
            onSuccessContainer: cssVar("--md-extended-color-success-on-color-container", mode),
        },
    }
});

export const themeV3dark = theme('dark');
export const themeV3light = theme('light');

document.body.removeChild(darkDiv);
document.body.removeChild(lightDiv);
