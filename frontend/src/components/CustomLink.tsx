import { Link, LinkProps } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props extends LinkProps {

}

const CustomLink: FC<Props> = (props) => {

  const router = useRouter();

  return (
    <Link
      color={router.pathname === "/" && props.href === "/"
        || props.href !== "/" && router.pathname.includes(props.href as string)
          ? "typography.main"
          : "typography.dark"} {...props}
    />
  )
};

export default CustomLink;
