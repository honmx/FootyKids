exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 5944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    user: null,
    setUser: ()=>{}
});


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7544);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3139);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9621);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1759);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2121);
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(595);
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _contexts_authContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5944);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_2__]);
_emotion_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const App = ({ Component, pageProps, deviceType })=>{
    const pageLayout = Component.getLayout ?? ((page)=>page);
    const theme = (0,_styles_theme__WEBPACK_IMPORTED_MODULE_6__/* .createCustomTheme */ .S)({
        deviceType
    });
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_4___default().init({
            disable: window.innerWidth < 1023,
            duration: 300,
            initClassName: "aos-init",
            animatedClassName: "aos-animate",
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 25,
            delay: 0,
            easing: "ease",
            once: false,
            mirror: true,
            anchorPlacement: "top-bottom"
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_authContext__WEBPACK_IMPORTED_MODULE_9__/* .AuthContext */ .V.Provider, {
        value: {
            user,
            setUser
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
            theme: theme,
            children: pageLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }))
        })
    });
};
App.getInitialProps = async (context)=>{
    const deviceType = ua_parser_js__WEBPACK_IMPORTED_MODULE_3___default()(context.ctx.req?.headers["user-agent"]).device.type || "dekstop";
    const nextAppProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(context);
    return {
        ...nextAppProps,
        deviceType
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "ru",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "modal-container"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ createCustomTheme)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_font_google_target_css_path_src_styles_theme_tsx_import_Noto_Sans_arguments_subsets_cyrillic_latin_weight_100_200_300_400_500_600_700_800_900_variableName_font___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5156);
/* harmony import */ var next_font_google_target_css_path_src_styles_theme_tsx_import_Noto_Sans_arguments_subsets_cyrillic_latin_weight_100_200_300_400_500_600_700_800_900_variableName_font___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_styles_theme_tsx_import_Noto_Sans_arguments_subsets_cyrillic_latin_weight_100_200_300_400_500_600_700_800_900_variableName_font___WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var css_mediaquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);
/* harmony import */ var css_mediaquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(css_mediaquery__WEBPACK_IMPORTED_MODULE_4__);
/* eslint-disable no-unused-vars */ 





const createCustomTheme = ({ deviceType })=>{
    const globalTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.createTheme)({
        typography: {
            fontFamily: (next_font_google_target_css_path_src_styles_theme_tsx_import_Noto_Sans_arguments_subsets_cyrillic_latin_weight_100_200_300_400_500_600_700_800_900_variableName_font___WEBPACK_IMPORTED_MODULE_5___default().style).fontFamily
        },
        shape: {
            borderRadius: 5
        }
    });
    const paletteTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.createTheme)({
        palette: {
            // general colors
            primary: {
                main: "#478DE0",
                dark: "#4483CD",
                light: "#ff0000",
                contrastText: "#FFFFFF"
            },
            secondary: {
                main: "#CCCCCC",
                dark: "#BFBFBF",
                light: "#EFEFEF",
                contrastText: "#FFFFFF"
            },
            error: {
                main: "#FF0000"
            },
            // custom colors
            glassy: {
                main: "#F8F8F888",
                dark: "#CFCFCF88",
                contrastText: "#FFFFFF"
            },
            typography: {
                main: "#0075FF",
                dark: "#000000",
                light: "#FFFFFF"
            },
            sheet: {
                main: "#F8F8F8",
                dark: ""
            },
            input: {
                main: "",
                background: "#F0F0F0",
                borderHover: "#CCCCCC"
            }
        }
    });
    const breakpointsTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.createTheme)({
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
        }
    });
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.createTheme)({
        ...globalTheme,
        palette: paletteTheme.palette,
        breakpoints: breakpointsTheme.breakpoints,
        components: {
            // HOOKS
            MuiUseMediaQuery: {
                defaultProps: {
                    ssrMatchMedia: (query)=>({
                            matches: css_mediaquery__WEBPACK_IMPORTED_MODULE_4___default().match(query, {
                                // The estimated CSS width of the browser.
                                width: deviceType === "mobile" ? "0px" : "1024px"
                            })
                        })
                }
            },
            // WIDGETS
            MuiContainer: {
                variants: [
                    {
                        props: {
                            disableGutters: true
                        },
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
                        paddingInline: 15
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
                    }
                }
            },
            // ENTITIES
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        "&::before": {
                            display: "none"
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
                        margin: "20px 0"
                    },
                    expandIconWrapper: {
                        marginLeft: "10px",
                        minWidth: "15px",
                        "&.Mui-expanded": {
                            transform: "rotate(-45deg)"
                        },
                        "& img": {
                            width: "15px",
                            height: "15px"
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
                        overflow: "hidden"
                    }
                }
            },
            // UI COMPONENTS
            MuiTextField: {
                styleOverrides: {
                    root: {
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                backgroundColor: paletteTheme.palette.input.background,
                                borderColor: "transparent",
                                transition: "all 0.15s ease"
                            },
                            "& input": {
                                fontWeight: 300,
                                zIndex: 2
                            },
                            "&:hover fieldset": {
                                borderColor: paletteTheme.palette.input.borderHover
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: paletteTheme.palette.primary.main
                            },
                            "&.Mui-error fieldset": {
                                borderColor: paletteTheme.palette.error.main
                            }
                        }
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
                        padding: "10px 30px",
                        transition: "all 0.15s ease",
                        "&:hover": {
                            boxShadow: "none"
                        }
                    }
                },
                variants: [
                    {
                        props: {
                            color: "primary"
                        },
                        style: {
                            backgroundColor: paletteTheme.palette.primary.main,
                            color: paletteTheme.palette.typography.light,
                            "&:hover": {
                                backgroundColor: paletteTheme.palette.primary.dark,
                                color: paletteTheme.palette.typography.light
                            }
                        }
                    },
                    {
                        props: {
                            color: "secondary"
                        },
                        style: {
                            backgroundColor: paletteTheme.palette.secondary.main,
                            color: paletteTheme.palette.typography.light,
                            "&:hover": {
                                backgroundColor: paletteTheme.palette.secondary.dark,
                                color: paletteTheme.palette.typography.light
                            }
                        }
                    },
                    {
                        props: {
                            color: "glassy"
                        },
                        style: {
                            backgroundColor: paletteTheme.palette.glassy.main,
                            color: paletteTheme.palette.typography.light,
                            "&:hover": {
                                backgroundColor: paletteTheme.palette.glassy.dark,
                                color: paletteTheme.palette.typography.light
                            }
                        }
                    }
                ]
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        aspectRatio: 1,
                        filter: "brightness(10%) invert(1)",
                        "img": {
                            transition: "all 0.15s ease"
                        },
                        "@media (hover: hover)": {
                            "&:hover": {
                                backgroundColor: "transparent",
                                filter: "brightness(0) invert(1)"
                            }
                        }
                    }
                },
                variants: [
                    {
                        props: {
                            color: "black"
                        },
                        style: {
                            filter: "brightness(0) invert(0)",
                            transition: "all 0.15s ease",
                            "@media (hover: hover)": {
                                "&:hover": {
                                    filter: "invert(35%) sepia(78%) saturate(4713%) hue-rotate(203deg) brightness(102%) contrast(109%) !important"
                                }
                            }
                        }
                    }
                ]
            },
            MuiLink: {
                defaultProps: {
                    component: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function LinkBehaviour(props, ref) {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            ...props,
                            ref: ref
                        });
                    })
                },
                styleOverrides: {
                    root: {
                        display: "flex",
                        alignItems: "center",
                        fontFamily: (next_font_google_target_css_path_src_styles_theme_tsx_import_Noto_Sans_arguments_subsets_cyrillic_latin_weight_100_200_300_400_500_600_700_800_900_variableName_font___WEBPACK_IMPORTED_MODULE_5___default().style).fontFamily,
                        fontWeight: 300,
                        color: paletteTheme.palette.typography.dark,
                        transition: "all 0.15s ease",
                        "&:hover": {
                            color: paletteTheme.palette.typography.main
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
};


/***/ }),

/***/ 595:
/***/ (() => {



/***/ })

};
;