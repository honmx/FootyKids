import { FC } from "react";
import Image from "next/image";
import { AppBar, Box, Container, Link, Stack } from "@mui/material";
import logo from "@/assets/footykids-logo.svg";
import { useRouter } from "next/router";
import CustomLink from "./UI/CustomLink";

interface Props {

}

const Header: FC<Props> = ({ }) => {

  const router = useRouter();

  return (
    <AppBar sx={{ display: "flex", flexDirection: "row", pt: 2, pb: 2 }}>
      <Container maxWidth={false} disableGutters>
        <Box>
          <Link href="/">
            <Image src={logo} alt="FootyKids" />
          </Link>
        </Box>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <Stack direction="row" spacing={2}>
            <CustomLink href="/">Главная</CustomLink>
            <CustomLink href="/account">Личный кабинет</CustomLink>
          </Stack>
        </Box>
      </Container>
    </AppBar>
  )
};

export default Header;
