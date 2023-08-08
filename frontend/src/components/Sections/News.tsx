import { INews } from "@/types/INews";
import { FC } from "react";
import SectionWrapper from "../Wrappers/SectionWrapper";
import { Box, Container } from "@mui/material";
import NewsCard from "../Cards/NewsCard";

interface Props {
  news: INews[];
}

const News: FC<Props> = ({ news }) => {
  return (
    <SectionWrapper title="Новости">
      <Box>
        <Container>
          <Box sx={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: 2
          }}>
            {
              new Array(7).fill(news[0]).map((news, i) => (
                <NewsCard
                  key={i}
                  news={news}
                  gridRow={i === 0 ? "span 2" : ""}
                  gridColumn={i === 0 ? "span 2" : ""}
                />
              ))
            }
          </Box>
        </Container>
      </Box>
    </SectionWrapper>
  )
};

export default News;
