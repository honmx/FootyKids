import { FC, ReactElement, ReactNode } from "react";
import { Box } from "@mui/material";

interface Props {
  renderHeader?: () => ReactElement;
  renderFooter?: () => ReactElement;
  children: ReactNode;
}

const Layout: FC<Props> = ({ renderHeader, renderFooter, children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", overflow: "hidden", minHeight: "200vh" }}>
      {renderHeader && renderHeader()}
      <Box component="main" sx={{ flex: "1 1 0", backgroundColor: "sheet.main", paddingBottom: 7.5 }}>
        {children}
      </Box>
      {renderFooter && renderFooter()}
    </Box>
  )
};

export default Layout;
