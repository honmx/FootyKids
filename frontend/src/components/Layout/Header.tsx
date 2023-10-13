import { FC, RefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, ClickAwayListener, Container, Divider, IconButton, Link, List, ListItem, ListItemButton, Menu, MenuItem, MenuList, Paper, Popper, Stack, SwipeableDrawer, Typography } from "@mui/material";
import CustomLink from "../UI/CustomLink";
import { headerLinks } from "@/data/mainPageLinks";
import logo from "@/assets/footykids-logo-1.svg";
import menu from "@/assets/menu icon.svg";
import arrowDown from "@/assets/arrow down.svg";
import { useResize } from "@/hooks/useResize";
import { useHover } from "@/hooks/useHover";
import Dropdown from "../UI/Dropdown";
import { useRouter } from "next/router";

interface Props {

}

const Header: FC<Props> = ({ }) => {

  const router = useRouter();

  const isTablet = useResize("laptop");
  const { hoverRef, isHover } = useHover();

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleOpenDrawerClick = () => {
    setIsDrawerOpen(prev => !prev);
  }

  return (
    <AppBar sx={{ paddingTop: 2, paddingBottom: 2, overflow: "visible" }}>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Box>
          <Link href="/">
            <Image src={logo} alt="FootyKids" />
          </Link>
        </Box>
        {
          isTablet
            ? (
              <Box>
                <IconButton size="medium" color="black" onClick={handleOpenDrawerClick}>
                  <Image src={menu} alt="menu" />
                </IconButton>
                <SwipeableDrawer
                  open={isDrawerOpen}
                  anchor="right"
                  onOpen={handleOpenDrawerClick}
                  onClose={handleOpenDrawerClick}
                  sx={{
                    "& .MuiDrawer-paper": {
                      minWidth: "min(calc(100% - 60px), 300px)",
                    }
                  }}
                >
                  <Typography
                    component="h3"
                    textAlign="center"
                    fontSize="40px"
                    color="typography.dark"
                    padding="20px 0"
                  >
                    Меню
                  </Typography>
                  <Divider />
                  <List component="nav" onClick={handleOpenDrawerClick} sx={{ height: "100%" }}>
                    {
                      headerLinks.map(link => (
                        <ListItemButton key={link.href} sx={{ justifyContent: "center", padding: "10px 0" }}>
                          <CustomLink
                            href={link.href}
                            fontSize="20px"
                          >
                            {link.text}
                          </CustomLink>
                        </ListItemButton>
                      ))
                    }
                    {/* <Accordion>
                      <AccordionSummary onClick={(e) => e.stopPropagation()}>dfgsdfgsdfg</AccordionSummary>
                      <AccordionDetails>dfgsdfgsdfg</AccordionDetails>
                    </Accordion> */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "40%",
                        translate: "0 -50%",
                        padding: "5px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "5px",
                          height: "30px",
                          backgroundColor: "secondary.main",
                          borderRadius: "100vw",
                          cursor: "pointer"
                        }}
                      />
                    </Box>
                  </List>
                </SwipeableDrawer>
              </Box>
            ) : (
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              >
                <Stack component="nav" direction="row" spacing={2}>
                  <Box ref={hoverRef} sx={{ display: "flex", alignItems: "center", cursor: "pointer", position: "relative" }}>
                    <CustomLink href="/" changeImgColorOnHover>
                      <Typography>Главная</Typography>
                      <Image
                        src={arrowDown}
                        alt="arrow"
                        style={{
                          transform: isHover ? "rotate(-180deg)" : "rotate(0deg)",
                          filter: "brightness(0) invert(0)",
                          transition: "all 0.2s ease !important",
                          width: "9px",
                          height: "9px",
                          marginLeft: "7px"
                        }}
                      />
                    </CustomLink>
                    <Dropdown open={isHover}>
                      {
                        headerLinks.map(link => (
                          <CustomLink key={link.href} href={link.href} sx={{ whiteSpace: "nowrap" }}>
                            <ListItemButton>{link.text}</ListItemButton>
                          </CustomLink>
                        ))
                      }
                    </Dropdown>
                  </Box>
                  <CustomLink href="/account">Личный кабинет</CustomLink>
                </Stack>
              </Box>
            )
        }
      </Container>
    </AppBar>
  )
};

export default Header;
