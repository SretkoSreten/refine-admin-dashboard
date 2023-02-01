import {
    createTheme,
    DarkTheme as DefaultDarkTheme,
    LightTheme as DefaultLightTheme,
    responsiveFontSizes,
} from "@pankod/refine-mui";


const LightTheme = createTheme({
    ...DefaultLightTheme,
    timeLine: {
        color: {
            pending: "#3d6cb9",
            ready: "#00d1ff",
            delivered: "#00fff0",
            cancelled: "#2d767f",
            onTheWay: "#2d767f",
        },
        dotColor: {
            pending: "#3d6cb9",
            ready: "#00d1ff",
            delivered: "#00fff0",
            cancelled: "#2d767f",
            onTheWay: "#2d767f",
        },
    },
});

const DarkTheme = createTheme({
    ...DefaultDarkTheme,
    timeLine: {
        color: {
            pending: "#f2a400",
            ready: "#00c2a2",
            delivered: "#0083c2",
            cancelled: "#c60d00",
            onTheWay: "#62c400",
        },
        dotColor: {
            pending: "#9f5700",
            ready: "#196966",
            delivered: "#00579f",
            cancelled: "#a60001",
            onTheWay: "#386d19",
        },
    },
});

const DarkThemeWithResponsiveFontSizes = responsiveFontSizes(DarkTheme);
const LightThemeWithResponsiveFontSizes = responsiveFontSizes(LightTheme);

export { LightThemeWithResponsiveFontSizes, DarkThemeWithResponsiveFontSizes };
