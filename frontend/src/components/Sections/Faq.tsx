import { FC } from "react";
import SectionWrapper from "../Wrappers/SectionWrapper";
import { Container, Typography } from "@mui/material";

interface Props {
  
}

const Faq: FC<Props> = ({  }) => {
  return (
    <SectionWrapper title="Частые вопросы">
      <Container>
        <Typography>Мы собрали все часто задаваемые вопросы и постарались подробно на них ответить</Typography>
        
      </Container>
    </SectionWrapper>
  )
};

export default Faq;
