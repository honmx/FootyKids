import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import Header from "./Header";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", overflow: "hidden", minHeight: "200vh" }}>
      <Header />
      <Box component="main" sx={{ flex: "1 1 0", backgroundColor: "sheet.main" }}>
        {children}
      </Box>
      <footer>
        footer
      </footer>
    </Box>
  )
};

export default Layout;
