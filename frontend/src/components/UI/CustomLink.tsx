import { Link, LinkProps } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props extends LinkProps {

}

const CustomLink: FC<Props> = ({ href, ...restProps }) => {

  const router = useRouter();

  return (
    <Link
      color={router.pathname === "/" && href === "/"
        || href !== "/" && router.pathname.includes(href as string)
        ? "typography.main"
        : "typography.dark"} href={href} {...restProps}
    />
  )
};

export default CustomLink;
