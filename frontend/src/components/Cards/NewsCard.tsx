import { useHover } from "@/hooks/useHover";
import { INews } from "@/types/INews";
import { Box, BoxProps, Typography } from "@mui/material";
import Image from "next/image";
import { FC, useState } from "react";
import { createPortal } from "react-dom";
import NewsModal from "../Modals/NewsModal";

interface Props extends BoxProps {
  news: INews;
}

const NewsCard: FC<Props> = ({ news, ...restProps }) => {

  const { hoverRef, isHover } = useHover();

  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const handleOpenModalClick = () => {
    setIsModalActive(prev => !prev);
  }

  return (
    <>
      <Box
        ref={hoverRef}
        sx={{
          position: "relative",
          borderRadius: "5px",
          overflow: "hidden"
        }}
        {...restProps}
      >
        <button
          style={{ textAlign: "start" }}
          onClick={handleOpenModalClick}
        >
          <Box
            sx={{
              "&::after": {
                position: "absolute",
                content: "''",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: isHover ? "#000000AA" : "none",
                transition: "all 0.15s ease"
              }
            }}
          >
            <Image
              src={news.photos[0]}
              alt="news photo"
              width={1080}
              height={1080}
              style={{
                objectFit: "cover",
                aspectRatio: 1,
              }}
            />
          </Box>
          {
            isHover &&
            <Typography
              color="typography.light"
              fontSize={14}
              fontWeight={200}
              sx={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                right: "10px",
              }}
            >
              {news.title}
            </Typography>
          }
        </button>
      </Box>
      {
        typeof window !== "undefined" &&
        createPortal(
          <NewsModal open={isModalActive} handleCloseClick={handleOpenModalClick} />,
          document.body.querySelector("#modal-container") as Element
        )
      }
    </>
  )
};

export default NewsCard;
