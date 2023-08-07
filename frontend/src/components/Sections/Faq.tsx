import { FC } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Stack, Typography } from "@mui/material";
import SectionWrapper from "../Wrappers/SectionWrapper";
import plusIcon from "@/assets/Plus icon.svg";
import Image from "next/image";

interface Props {

}

const Faq: FC<Props> = ({ }) => {
  return (
    <SectionWrapper title="Частые вопросы">
      <Box>
        <Container>
          <Stack spacing={3}>
            <Typography>Мы собрали все часто задаваемые вопросы и постарались подробно на них ответить</Typography>
            <Box>
              {
                new Array(5).fill("").map((a, i) => (
                  <Accordion key={i} disableGutters>
                    <AccordionSummary expandIcon={<Image src={plusIcon} alt="plus icon" style={{ width: 15, height: 15 }} />}>
                      <Typography>Вопрос..?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography fontWeight={200}>Ответ...</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))
              }
            </Box>
          </Stack>
        </Container>
      </Box>
    </SectionWrapper>
  )
};

export default Faq;
