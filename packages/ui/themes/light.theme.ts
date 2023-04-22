"use client";
import { PaletteColor, PaletteColorOptions, createTheme } from "@mui/material";
// import SpartanB from "../fonts/Spartan-Bold-700.ttf";
// import SpartanM from "../fonts/Spartan-Medium-500.ttf";

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      draft: PaletteColor;
    };
  }


    interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    desktop: true;
  }

  interface PaletteOptions {
    draft: PaletteColorOptions;
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F8F8FB",
    },
    primary: {
      main: "#7C5DFA",
      light: "#9277FF",
    },
    secondary:{
      main:"#7E88C3",
      light: "#888EB0",
      dark:"#0C0E16",
      contrastText:"#F9FAFE"
    },
    error: {
      main: "#EC5757",
      light: "#FF9797",
      contrastText: "white",
    },
    warning: {
      main: "#FF8F00",
      dark: "rgba(255, 143, 0, 0.0571)     ",
    },
    success: {
      main: "#33D69F",
      dark: "rgba(51, 214, 159, 0.0571)",
    },
    draft: {
      main: "#DFE3FA",
      contrastText: "rgba(223, 227, 250, 0.0571)",
    },
  },
  typography: {
    fontFamily: ["SpartanM", "SpartanB"].join(","),
    h1: {
      fontSize: "32px",
      fontWeight: "700",
      lineHeight: "36px",
      letterSpacing: "-1px",
    },
    h2: {
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "22px",
      letterSpacing: "-0.63px",
    },
    h3: {
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "24px",
      letterSpacing: "-0.8px",
    },
    h4: {
      fontSize: "12px",
      fontWeight: "700",
      lineHeight: "15px",
      letterSpacing: "-0.25px",
    },
    body1: {
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "15px",
      letterSpacing: "-0.25px",
    },
    body2: {
      fontSize: "11px",
      fontWeight: "500",
      lineHeight: "18px",
      letterSpacing: "-0.23px",
    },
    subtitle1: {
      fontSize: "11px",
      fontWeight: "500",
      lineHeight: "18px",
      letterSpacing: "-0.23px",
      color: "#7E88C3",
    },
    overline: {
      fontSize: "120px",
      fontWeight: "700",
      lineHeight: "137px",
      letterSpacing: "-3.75px",
    },
    h5: {
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "39px",
      letterSpacing: "8px",
      color: "#888EB0",
    },
    button: {
      fontSize: "12px",
      fontWeight: "700",
      lineHeight: "15px",
      letterSpacing: "-0.25px",
      textTransform: "none",
    },
    // Commenting this for now, it is causing a bug
    // poster: {
    //   color: "white",
    // },
    // fontFamily: "Spartan",
    // fontWeightMedium: "500",
    // fontWeightBold: "700",
    // textTransform: "none",
  },
    breakpoints: {
    values: {
      mobile: 600,
      tablet: 900,
      desktop: 1200,
    }
  }
});