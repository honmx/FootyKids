import { FC, ReactElement, ReactNode } from "react";
import { Box, BoxProps } from "@mui/material";

interface Props {
  renderHeader?: () => ReactElement;
  renderFooter?: () => ReactElement;
  children: ReactNode;
}

const Layout: FC<Props> = ({ renderHeader, renderFooter, children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", overflow: "hidden", minHeight: "100vh" }}>
      {renderHeader && renderHeader()}
      <Box component="main" sx={{ flex: "1 1 0", backgroundColor: "sheet.main" }}>
        {children}
      </Box>
      {renderFooter && renderFooter()}
    </Box>
  )
};

export default Layout;
