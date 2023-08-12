import { FC } from "react";
import { Box, BoxProps, Container, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/footykids-logo.svg";
import vk from "@/assets/vk.svg";
import inst from "@/assets/inst.svg";
import youtube from "@/assets/youtube.svg";

interface Props extends BoxProps {

}

const Footer: FC<Props> = ({ ...restProps }) => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "typography.light",
        paddingTop: "10px",
        paddingBottom: "10px"
      }}
      {...restProps}
    >
      <Container maxWidth={false} disableGutters sx={{
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
        gap: 2,
      }}>
        <Box sx={{ gridArea: "a" }}>
          <Link href="/">
            <Image src={logo} alt="logo" style={{ filter: "brightness(0) invert(1)" }} />
          </Link>
        </Box>
        <Box sx={{ gridArea: "b", justifySelf: { smallPhone: "start", tablet: "auto" } }}>
          <Stack direction="row" spacing={1} sx={{
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Link href="https://vk.com/footykids_miass" target="_blank">
              <IconButton size="medium" color="white">
                <Image src={vk} alt="vk" />
              </IconButton>
            </Link>
            <Link href="https://instagram.com/footykids_miass" target="_blank">
              <IconButton size="medium" color="white">
                <Image src={inst} alt="instagram" />
              </IconButton>
            </Link>
            <Link href="https://www.youtube.com/@footykids-1526" target="_blank">
              <IconButton size="medium" color="white">
                <Image src={youtube} alt="youtube" />
              </IconButton>
            </Link>
          </Stack>
        </Box>
        <Box sx={{ gridArea: "c", justifySelf: "end" }}>
          <Typography fontSize={16} fontWeight={300}>2023</Typography>
        </Box>
      </Container>
    </Box>
  )
};

export default Footer;
