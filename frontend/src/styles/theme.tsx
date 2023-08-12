/* eslint-disable no-unused-vars */
import { Link, createTheme } from "@mui/material";
import { Noto_Sans } from "next/font/google";
import NextLink, { LinkProps } from "next/link";
import { Ref, forwardRef } from "react";
import parser from "ua-parser-js";
import mediaQuery from "css-mediaquery";

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

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    white: true;
    black: true;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    sm: false,
    md: false,
    lg: false,
    xl: false,
    smallPhone: true,
    middlePhone: true,
    largePhone: true,
    smallTablet: true,
    tablet: true,
    laptop: true,
    desktop: true,
    largeDesktop: true,
    container: true,
  }
}

interface ICreateThemeProps {
  deviceType: "mobile" | "desktop";
}

export const createCustomTheme = ({ deviceType }: ICreateThemeProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#478DE0",
        // dark: "#276FC5",
        dark: "#4483CD",
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
    breakpoints: {
      values: {
        xs: 0,
        smallPhone: 320,
        middlePhone: 375,
        largePhone: 425,
        smallTablet: 600,
        tablet: 768,
        laptop: 1024,
        desktop: 1440,
        largeDesktop: 1920,
        container: 900
      }
    },
    typography: {
      fontFamily: font.style.fontFamily,
    },
    shape: {
      borderRadius: 5
    },
    components: {
      // HOOKS
      MuiUseMediaQuery: {
        defaultProps: {
          ssrMatchMedia: (query) => ({
            matches: mediaQuery.match(query, {
              // The estimated CSS width of the browser.
              width: deviceType === "mobile" ? "0px" : "1024px",
            }),
          })
        }
      },
      // WIDGETS
      MuiContainer: {
        variants: [
          {
            props: { disableGutters: true },
            style: {
              paddingInline: 0
            }
          }
        ],
        defaultProps: {
          maxWidth: "container"
        },
        styleOverrides: {
          root: {
            paddingInline: 15,
          }
        }
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            "@media screen and (min-width: 900px)": {
              maxWidth: "none"
            }
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
      MuiAccordion: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
            boxShadow: "none",
            "&::before": {
              display: "none",
            },
            "&:not(:last-child)": {
              borderBottom: "1px solid #BBBBBB"
            }
          }
        }
      },
      MuiAccordionSummary: {
        styleOverrides: {
          content: {
            margin: "20px 0",
          },
          expandIconWrapper: {
            "&.Mui-expanded": {
              transform: "rotate(-45deg)"
            }
          }
        }
      },
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
        },
        styleOverrides: {
          root: {
            overflow: "hidden",
          }
        }
      },
      // UI COMPONENTS
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                backgroundColor: "#F0F0F0",
                borderColor: "transparent",
                transition: "all 0.15s ease"
              },
              "& input": {
                fontWeight: 300,
                zIndex: 2,
              },
              "&:hover fieldset": {
                borderColor: "#CCCCCC",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#0075FF",
              },
              "&.Mui-error fieldset": {
                borderColor: "#FF0000"
              }
            },
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontWeight: 300
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none"
            }
          }
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
        },
        variants: [
          {
            props: { color: "black" },
            style: {
              filter: "brightness(0) invert(0)",
              "&:hover": {
                filter: "invert(35%) sepia(78%) saturate(4713%) hue-rotate(203deg) brightness(102%) contrast(109%)"
              }
            }
          },
        ]
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
            lineHeight: 1.1,
            fontWeight: 300
          }
        }
      }
    }
  });

  return theme;
}