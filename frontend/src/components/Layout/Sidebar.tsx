import { FC, RefObject, useContext, useState } from "react";
import { Box, Drawer, List, ListItem, ListItemButton, Typography } from "@mui/material";
import leftArrow from "../../assets/left arrow.svg";
import rightArrow from "../../assets/right arrow.svg";
import userPhoto from "../../assets/user.jpg";
import Image from "next/image";
import { useHover } from "@/hooks/useHover";
import { AuthContext } from "@/contexts/authContext";
import CustomLink from "../UI/CustomLink";
import { sidebarUserLinks } from "@/data/sidebarUserLinks";
import { sidebarCoachLinks } from "@/data/sidebarCoachLinks";

interface Props {

}

const Sidebar: FC<Props> = ({ }) => {

  const { hoverRef, isHover } = useHover();
  const { user } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenDrawerClick = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <Box sx={{ height: "100%", position: "relative" }}>
      <Drawer
        anchor="left"
        variant="permanent"
        open={isOpen}
        sx={{
          height: "100%",
          marginRight: "15px",
          transition: "all 0.15s ease",
          "*": {
            position: "static !important"
          }
        }}
      >
        <Box sx={{ padding: "0 5px" }}>
          <List>
            <ListItem>
              <CustomLink href="/account">
                <Image
                  src={user?.photo || userPhoto}
                  alt="user"
                  style={{
                    maxWidth: "47px",
                    aspectRatio: 1,
                    objectFit: "cover",
                    borderRadius: "5px"
                  }}
                />
                <Typography sx={{
                  fontSize: isOpen ? 16 : 0,
                  opacity: isOpen ? 1 : 0,
                  marginLeft: isOpen ? 1 : 0,
                  transition: "font-size 0.15s ease",
                }}
                >
                  {user?.name.split(" ").slice(0, 2).join(" ")}
                </Typography>
              </CustomLink>
            </ListItem>
            {
              user?.type === "user" && sidebarUserLinks.map(item => (
                <ListItem>
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    style={{
                      maxWidth: "47px",
                      width: "100%",
                      borderRadius: "5px"
                    }}
                  />
                </ListItem>
              ))
            }
            {
              user?.type === "coach" && sidebarCoachLinks.map(item => (
                <ListItem>
                  <CustomLink href={item.href} changeImgColorOnHover>
                    <Box sx={{
                      width: "47px",
                      display: "flex",
                      justifyContent: "center"
                    }}>
                      <Image
                        src={item.icon}
                        alt={item.alt}
                        style={{
                          maxWidth: "40px",
                          width: "100%",
                          borderRadius: "5px"
                        }}
                      />
                    </Box>
                    <Typography sx={{
                      fontSize: isOpen ? 16 : 0,
                      opacity: isOpen ? 1 : 0,
                      marginLeft: isOpen ? 1 : 0,
                      transition: "font-size 0.15s ease",
                    }}
                    >
                      {item.text}
                    </Typography>
                  </CustomLink>
                </ListItem>
              ))
            }
          </List>
        </Box>
      </Drawer>
      <button
        ref={hoverRef as RefObject<HTMLButtonElement>}
        onClick={handleOpenDrawerClick}
        style={{
          position: "absolute",
          left: "calc(100% - 15px)",
          top: isOpen ? "24px" : "20px",
          transform: "translateX(-50%)",
          backgroundColor: isHover ? "#F8F8F8" : "#FFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: isOpen ? "30px" : "40px",
          width: isOpen ? "30px" : "20px",
          border: "1px solid #DDD",
          borderRadius: "3px",
          transition: "all 0.15s ease"
        }}
      >
        <Image
          src={isOpen ? leftArrow : rightArrow}
          alt="arrow"
          style={{
            filter: "invert(0.5)",
            width: "9px",
            height: "9px",
          }}
        />
      </button>
    </Box>
  )
};

export default Sidebar;