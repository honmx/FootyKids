import { FC, useState } from "react";
import Image from "next/image";
import { AppBar, Box, Container, Divider, IconButton, Link, List, ListItemButton, Stack, SwipeableDrawer, Typography } from "@mui/material";
import CustomLink from "../UI/CustomLink";
import { headerLinks } from "@/data/headerLinks";
// import logo from "@/assets/footykids-logo.svg";
import logo from "@/assets/logo-1.svg";
import menu from "@/assets/menu icon.svg";
import cross from "@/assets/cross icon.svg";
import { useResize } from "@/hooks/useResize";

interface Props {

}

const Header: FC<Props> = ({ }) => {

  const isTablet = useResize("laptop");

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleOpenDrawerClick = () => {
    setIsDrawerOpen(prev => !prev);
  }

  return (
    <AppBar sx={{ paddingTop: 2, paddingBottom: 2 }}>
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
                    component="h1"
                    textAlign="center"
                    fontSize={{
                      smallPhone: 40,
                      largePhone: 50,
                      tablet: 60
                    }}
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
                            fontSize={{
                              smallPhone: 22,
                              largePhone: 26,
                              tablet: 30
                            }}
                          >
                            {link.text}
                          </CustomLink>
                        </ListItemButton>
                      ))
                    }
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
                <Stack direction="row" spacing={2}>
                  {
                    headerLinks.map(link => (
                      <CustomLink key={link.href} href={link.href} sx={{ whiteSpace: "nowrap" }}>{link.text}</CustomLink>
                    ))
                  }
                </Stack>
              </Box>
            )
        }
      </Container>
    </AppBar>
  )
};

export default Header;
