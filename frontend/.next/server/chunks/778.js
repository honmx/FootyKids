"use strict";
exports.id = 778;
exports.ids = [778];
exports.modules = {

/***/ 9970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow down.66ec2eca.svg","height":9,"width":16,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 1121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/footykids-logo-1.1426774e.svg","height":37,"width":147,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 1416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logout icon.07ee1ff2.svg","height":25,"width":26,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 7143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/menu icon.b8e1f44a.svg","height":20,"width":20,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 5667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Layout_Footer)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/assets/footykids-logo-1.svg
var footykids_logo_1 = __webpack_require__(1121);
;// CONCATENATED MODULE: ./src/assets/vk.svg
/* harmony default export */ const vk = ({"src":"/_next/static/media/vk.ec01a951.svg","height":16,"width":28,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/inst.svg
/* harmony default export */ const inst = ({"src":"/_next/static/media/inst.254c8414.svg","height":17,"width":17,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/youtube.svg
/* harmony default export */ const youtube = ({"src":"/_next/static/media/youtube.4c807176.svg","height":17,"width":23,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/data/footerLinks.ts



const footerLinks = [
    {
        href: "https://vk.com/footykids_miass",
        src: vk,
        alt: "vk"
    },
    {
        href: "https://instagram.com/footykids_miass",
        src: inst,
        alt: "instagram"
    },
    {
        href: "https://www.youtube.com/@footykids-1526",
        src: youtube,
        alt: "youtube"
    }
];

;// CONCATENATED MODULE: ./src/components/Layout/Footer.tsx






const Footer = ({ ...restProps })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
        component: "footer",
        sx: {
            backgroundColor: "primary.main",
            color: "typography.light",
            paddingTop: "10px",
            paddingBottom: "10px",
            zIndex: 100
        },
        ...restProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Container, {
            maxWidth: false,
            sx: {
                display: "grid",
                gridTemplateAreas: {
                    smallPhone: `
            "a d"
            "b c"
          `,
                    largePhone: `
            "a b c"
          `
                },
                alignItems: "center",
                gap: 2
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                    sx: {
                        gridArea: "a"
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: footykids_logo_1/* default */.Z,
                            alt: "logo",
                            style: {
                                filter: "brightness(0) invert(1)"
                            }
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                    sx: {
                        gridArea: "b",
                        justifySelf: {
                            smallPhone: "start",
                            tablet: "auto"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx(material_.Stack, {
                        direction: "row",
                        spacing: 1,
                        sx: {
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        children: footerLinks.map((link)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: link.href,
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime.jsx(material_.IconButton, {
                                    size: "medium",
                                    color: "white",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: link.src,
                                        alt: link.alt
                                    })
                                })
                            }, link.alt))
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                    sx: {
                        gridArea: "c",
                        justifySelf: "end"
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                        fontSize: 16,
                        fontWeight: 300,
                        children: "2023"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Layout_Footer = (Footer);


/***/ }),

/***/ 7887:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_CustomLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5179);
/* harmony import */ var _data_mainPageLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(600);
/* harmony import */ var _assets_footykids_logo_1_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1121);
/* harmony import */ var _assets_logout_icon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1416);
/* harmony import */ var _assets_menu_icon_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7143);
/* harmony import */ var _assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9970);
/* harmony import */ var _hooks_useResize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2462);
/* harmony import */ var _hooks_useHover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1151);
/* harmony import */ var _UI_Dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7845);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2482);
/* harmony import */ var _contexts_authContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5944);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_authService__WEBPACK_IMPORTED_MODULE_14__]);
_services_authService__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















const Header = ({})=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const isLaptop = (0,_hooks_useResize__WEBPACK_IMPORTED_MODULE_10__/* .useResize */ .a)("laptop");
    const { hoverRef, isHover } = (0,_hooks_useHover__WEBPACK_IMPORTED_MODULE_11__/* .useHover */ .X)();
    const { user, setUser } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_authContext__WEBPACK_IMPORTED_MODULE_15__/* .AuthContext */ .V);
    const [isDrawerOpen, setIsDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleOpenDrawerClick = ()=>{
        setIsDrawerOpen((prev)=>!prev);
    };
    const handleLogoutClick = async ()=>{
        await _services_authService__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z.logout();
        setUser(null);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AppBar, {
        sx: {
            paddingTop: 2,
            paddingBottom: 2,
            overflow: "visible"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
            maxWidth: false,
            sx: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Link, {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: _assets_footykids_logo_1_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                            alt: "FootyKids"
                        })
                    })
                }),
                isLaptop ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                            size: "medium",
                            color: "black",
                            onClick: handleOpenDrawerClick,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: _assets_menu_icon_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                alt: "menu"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.SwipeableDrawer, {
                            open: isDrawerOpen,
                            anchor: "right",
                            onOpen: handleOpenDrawerClick,
                            onClose: handleOpenDrawerClick,
                            sx: {
                                "& .MuiDrawer-paper": {
                                    minWidth: "min(calc(100% - 60px), 300px)"
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    component: "h3",
                                    textAlign: "center",
                                    fontSize: "40px",
                                    color: "typography.dark",
                                    padding: "20px 0",
                                    children: "Меню"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.List, {
                                    component: "nav",
                                    onClick: handleOpenDrawerClick,
                                    sx: {
                                        height: "100%"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Accordion, {
                                            disableGutters: true,
                                            sx: {
                                                borderBottom: "none !important"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AccordionSummary, {
                                                    onClick: (e)=>e.stopPropagation(),
                                                    expandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        src: _assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                                        alt: "arrow",
                                                        style: {
                                                            width: "10px",
                                                            height: "10px",
                                                            aspectRatio: 1
                                                        }
                                                    }),
                                                    sx: {
                                                        color: router.pathname === "/" ? "typography.main" : "",
                                                        "& img": {
                                                            filter: router.pathname === "/" ? "invert(29%) sepia(41%) saturate(4358%) hue-rotate(203deg) brightness(103%) contrast(106%) !important" : ""
                                                        },
                                                        "& .MuiAccordionSummary-content": {
                                                            flex: "0 0 0"
                                                        },
                                                        "& .MuiAccordionSummary-expandIconWrapper": {
                                                            minWidth: "10px"
                                                        },
                                                        "& .Mui-expanded.MuiAccordionSummary-expandIconWrapper": {
                                                            transform: "rotate(-180deg) !important"
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                        fontSize: "22px",
                                                        children: "Главная"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AccordionDetails, {
                                                    children: _data_mainPageLinks__WEBPACK_IMPORTED_MODULE_5__/* .headerLinks */ .G.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemButton, {
                                                            sx: {
                                                                justifyContent: "center",
                                                                padding: "10px 0"
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_CustomLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                href: link.href,
                                                                fontSize: "20px",
                                                                children: link.text
                                                            })
                                                        }, link.href))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_CustomLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            href: "/account",
                                            sx: {
                                                marginTop: "10px",
                                                fontSize: "22px",
                                                justifyContent: "center"
                                            },
                                            children: "Личный кабинет"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                            sx: {
                                                position: "absolute",
                                                top: "40%",
                                                translate: "0 -50%",
                                                padding: "5px"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                                sx: {
                                                    width: "5px",
                                                    height: "30px",
                                                    backgroundColor: "secondary.main",
                                                    borderRadius: "100vw",
                                                    cursor: "pointer"
                                                }
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    sx: {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        component: "nav",
                        direction: "row",
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                ref: hoverRef,
                                sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UI_CustomLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        href: "/",
                                        changeImgColorOnHover: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                                children: "Главная"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: _assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                                alt: "arrow",
                                                style: {
                                                    transform: isHover ? "rotate(-180deg)" : "rotate(0deg)",
                                                    filter: "brightness(0) invert(0)",
                                                    transition: "all 0.2s ease !important",
                                                    width: "9px",
                                                    height: "9px",
                                                    marginLeft: "7px"
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Dropdown__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        open: isHover,
                                        children: _data_mainPageLinks__WEBPACK_IMPORTED_MODULE_5__/* .headerLinks */ .G.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_CustomLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                href: link.href,
                                                sx: {
                                                    whiteSpace: "nowrap"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItemButton, {
                                                    children: link.text
                                                })
                                            }, link.href))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_CustomLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                href: "/account",
                                children: "Личный кабинет"
                            })
                        ]
                    })
                }),
                !isLaptop && user && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                    color: "black",
                    onClick: handleLogoutClick,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: _assets_logout_icon_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                        alt: "logout",
                        style: {
                            width: "20px",
                            height: "20px"
                        }
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useResize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2462);



const Layout = ({ renderHeader, renderSidebar, renderFooter, children })=>{
    const isTablet = (0,_hooks_useResize__WEBPACK_IMPORTED_MODULE_2__/* .useResize */ .a)("tablet");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            minHeight: "100vh"
        },
        children: [
            renderHeader && renderHeader(),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                component: "main",
                sx: {
                    flex: "1 1 0",
                    display: "flex",
                    width: "100vw",
                    backgroundColor: "sheet.main",
                    marginTop: "69.8px"
                },
                children: [
                    renderSidebar && renderSidebar(),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            width: "100%",
                            marginLeft: renderSidebar && !isTablet ? "105px" : "0px"
                        },
                        children: children
                    })
                ]
            }),
            renderFooter && renderFooter()
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 5179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const CustomLink = ({ href, changeImgColorOnActiveLink = true, changeImgColorOnHover = false, ...restProps })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { sx, ...propsWithoutSx } = restProps;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Link, {
        sx: {
            cursor: "pointer",
            ...sx,
            "& img": {
                transition: "all 0.15s ease",
                filter: (router.pathname === "/" && href === "/" || href !== "/" && router.pathname.includes(href)) && changeImgColorOnActiveLink ? "invert(29%) sepia(41%) saturate(4358%) hue-rotate(203deg) brightness(103%) contrast(106%) !important" : "none !important"
            },
            "&:hover img": {
                filter: changeImgColorOnHover ? "invert(29%) sepia(41%) saturate(4358%) hue-rotate(203deg) brightness(103%) contrast(106%) !important" : "none"
            }
        },
        color: router.pathname === "/" && href === "/" || href !== "/" && router.pathname.includes(href) ? "typography.main" : "typography.dark",
        href: href,
        ...propsWithoutSx
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomLink);


/***/ }),

/***/ 7845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


const Dropdown = ({ open, children, sx, ...restProps })=>{
    return open && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    position: "absolute",
                    top: "100%",
                    height: "5px",
                    width: "100%"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                sx: {
                    position: "absolute",
                    top: "calc(100% + 5px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    border: "1px solid #DDDDDD",
                    ...sx
                },
                ...restProps,
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);


/***/ }),

/***/ 600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ headerLinks)
/* harmony export */ });
const headerLinks = [
    {
        href: "/#",
        text: "Главная"
    },
    {
        href: "/#about",
        text: "О нас"
    },
    {
        href: "/#coaches",
        text: "Тренеры"
    },
    {
        href: "/#news",
        text: "Новости"
    },
    {
        href: "/#places",
        text: "Площадки"
    },
    {
        href: "/#faq",
        text: "Вопросы"
    },
    {
        href: "/#contact",
        text: "Записаться"
    }
];


/***/ }),

/***/ 1151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ useHover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useHover = ()=>{
    const hoverRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [isHover, setIsHover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handleMouseOver = ()=>{
            if (!hoverRef.current) return;
            setIsHover(true);
        };
        const handleMouseOut = ()=>{
            if (!hoverRef.current) return;
            setIsHover(false);
        };
        hoverRef.current?.addEventListener("mouseover", handleMouseOver);
        hoverRef.current?.addEventListener("mouseout", handleMouseOut);
        return ()=>{
            hoverRef.current?.removeEventListener("mouseover", handleMouseOver);
            hoverRef.current?.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);
    return {
        hoverRef,
        isHover
    };
};


/***/ }),

/***/ 2462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useResize)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);

const useResize = (breakpoint)=>{
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const isSmaller = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.useMediaQuery)(theme.breakpoints.down(breakpoint));
    return isSmaller;
};


/***/ }),

/***/ 2423:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ $authAPI)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _bearerAxios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1086);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _bearerAxios__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _bearerAxios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const $authAPI = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: `${"http://localhost:5000"}/auth`,
    withCredentials: true
});
$authAPI.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage?.getItem("token")}`;
    return config;
});
$authAPI.interceptors.response.use((config)=>config, async (error)=>{
    const originalRequestConfig = error.config;
    if (error.response?.status === 401 && originalRequestConfig && !originalRequestConfig?._isRetry) {
        originalRequestConfig._isRetry = true;
        try {
            const response = await _bearerAxios__WEBPACK_IMPORTED_MODULE_1__/* .bearerAxios */ .t.get("/auth/refresh");
            localStorage?.setItem("token", response.data.accessToken);
            return $authAPI.request(originalRequestConfig);
        } catch (error) {
            console.log(error);
        }
    }
    throw error;
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1086:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ bearerAxios)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const bearerAxios = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://localhost:5000",
    withCredentials: true
});
bearerAxios.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    return config;
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2482:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _http_authAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2423);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http_authAxios__WEBPACK_IMPORTED_MODULE_0__]);
_http_authAxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const login = async (loginProps)=>{
    const { data: user } = await _http_authAxios__WEBPACK_IMPORTED_MODULE_0__/* .$authAPI */ .b.post("/login", loginProps);
    localStorage.setItem("token", user.accessToken);
    return user;
};
const logout = async ()=>{
    await _http_authAxios__WEBPACK_IMPORTED_MODULE_0__/* .$authAPI */ .b.post("/logout");
    localStorage.removeItem("token");
};
const register = async (registerProps)=>{
    const { data: user } = await _http_authAxios__WEBPACK_IMPORTED_MODULE_0__/* .$authAPI */ .b.post("/register", registerProps);
    localStorage.setItem("token", user.accessToken);
    return user;
};
const registerCoach = async (registerProps)=>{
    const { data: user } = await _http_authAxios__WEBPACK_IMPORTED_MODULE_0__/* .$authAPI */ .b.post("/registerCoach", registerProps);
    localStorage.setItem("token", user.accessToken);
    return user;
};
const recoverPassword = async (recoverPasswordProps)=>{
    const { data: user } = await _http_authAxios__WEBPACK_IMPORTED_MODULE_0__/* .$authAPI */ .b.put("/recoverPassword", recoverPasswordProps);
    return user;
};
const sendCode = async (email)=>{
    await _http_authAxios__WEBPACK_IMPORTED_MODULE_0__/* .$authAPI */ .b.post("/sendVerificationCode", {
        email
    });
};
const validateCode = async ({ email, code })=>{
    await _http_authAxios__WEBPACK_IMPORTED_MODULE_0__/* .$authAPI */ .b.post("/validateVerificationCode", {
        email,
        code
    });
};
const validateRefreshToken = async ()=>{
    try {
        const { data: user } = await _http_authAxios__WEBPACK_IMPORTED_MODULE_0__/* .$authAPI */ .b.get("/validateRefreshToken");
        return user;
    } catch (error) {
        return undefined;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    login,
    logout,
    register,
    registerCoach,
    recoverPassword,
    sendCode,
    validateCode,
    validateRefreshToken
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;