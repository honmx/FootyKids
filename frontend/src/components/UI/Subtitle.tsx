import { Typography, TypographyProps } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren, TypographyProps {

}

const Subtitle: FC<Props> = ({ children, ...restProps }) => {
  return (
    <Typography
      fontSize={{
        smallPhone: 20,
        tablet: 26
      }}
      fontWeight={300}
      {...restProps}
    >
      {children}
    </Typography>
  )
};

export default Subtitle;
