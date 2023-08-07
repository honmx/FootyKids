/* eslint-disable no-unused-vars */
import { Link, createTheme } from "@mui/material";
import { Noto_Sans } from "next/font/google";
import NextLink, { LinkProps } from "next/link";
import { Ref, forwardRef } from "react";

const font = Noto_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

declare module "@mui/material/styles" {
  interface Palette {
    typography: Palette["primary"];
    sheet: Palette["primary"];
  }

  interface PaletteOptions {
    typography: PaletteOptions["primary"];
    sheet: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    typography: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#478DE0",
      dark: "#276FC5",
      light: "#ff0000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#CCCCCC",
      dark: "#AFAFAF",
      light: "#EFEFEF",
      contrastText: "#FFFFFF",
    },
    typography: {
      main: "#0075FF",
      dark: "#000000",
      light: "#FFFFFF"
    },
    sheet: {
      main: "#F8F8F8",
      dark: ""
    }
  },
  typography: {
    fontFamily: font.style.fontFamily,
  },
  shape: {
    borderRadius: 5
  },
  components: {
    // WIDGETS
    MuiContainer: {
      defaultProps: {
        maxWidth: "md"
      },
      styleOverrides: {
        root: {
          paddingInline: "15px"
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: 0,
          backgroundColor: "#FFFFFF88",
          backdropFilter: "blur(7px)",
          boxShadow: "none",
          borderBottom: "1px solid #DDDDDD"
        },
      }
    },
    // ENTITIES
    MuiModal: {
      styleOverrides: {
        backdrop: {
          transition: "all 0.15s ease !important"
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 7
      }
    },
    // UI COMPONENTS
    MuiButton: {
      styleOverrides: {
        
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          aspectRatio: 1,
          filter: "brightness(10%) invert(1)",
          transition: "all 0.15s ease",
          "&:hover": {
            backgroundColor: "transparent",
            filter: "brightness(0) invert(1)"
          }
        }
      }
    },
    MuiLink: {
      defaultProps: {
        component: forwardRef<HTMLAnchorElement, LinkProps>(function LinkBehaviour(props, ref) {          
          return <NextLink  {...props} ref={ref} />
        })
      },
      styleOverrides: {
        root: {
          fontFamily: font.style.fontFamily,
          fontWeight: "300",
          color: "#000000",
          transition: "all 0.15s ease",
          "&:hover": {
            color: "#0075FF"
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1
        }
      }
    }
  }
});
