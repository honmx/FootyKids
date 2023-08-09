import { FC } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import ModalWrapper from "../Wrappers/ModalWrapper";
import { newsPhotosGridTemplateAreas } from "@/data/newsPhotosGridTemplateAreas";
import { IModalProps } from "@/types/IModalProps";
import { INews } from "@/types/INews";
import ModalItemWithScrollingContentWrapper from "../Wrappers/ModalItemWithScrollingContentWrapper";

interface Props extends IModalProps {
  news: INews;
}

const NewsModal: FC<Props> = ({ open, handleCloseClick, news, ...restProps }) => {

  return (
    <ModalWrapper open={open} handleCloseClick={handleCloseClick} {...restProps}>
      <Stack direction="row">
        <ModalItemWithScrollingContentWrapper>
          <Stack spacing={2}>
            <Typography fontSize={20} fontWeight={400}>{news.title}</Typography>
            <Typography>{news.text}</Typography>
          </Stack>
        </ModalItemWithScrollingContentWrapper>
        <Box sx={{ width: "50%" }}>
          <Box sx={{
            display: "grid",
            gridTemplateAreas: newsPhotosGridTemplateAreas[news.photos.length - 1]
          }}>
            {
              news.photos.map((photo, i) => (
                <Image
                  key={photo}
                  src={photo}
                  alt="news photo"
                  width={1080}
                  height={1080}
                  style={{
                    aspectRatio: 1,
                    objectFit: "cover",
                    gridArea: String.fromCodePoint(i + 97)
                  }}
                />
              ))
            }
          </Box>
        </Box>
      </Stack>
    </ModalWrapper>
  )
};

export default NewsModal;
