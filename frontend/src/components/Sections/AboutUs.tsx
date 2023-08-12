import { FC } from "react";
import SectionWrapper from "../Wrappers/SectionWrapper";
import AboutUsVideo from "../AboutUsVideo";
import AdvantagesCardsGroup from "../AdvantagesCardsGroup";
import PurposeCardsGroup from "../PurposeCardsGroup";
import AboutUsCardsGroup from "../AboutUsCardsGroup";

interface Props {
  coachesCount: number;
}

const AboutUs: FC<Props> = ({ coachesCount }) => {
  return (
    <SectionWrapper title="О нас">
      <AboutUsVideo />
      <AdvantagesCardsGroup coachesCount={coachesCount} />
      <PurposeCardsGroup />
      <AboutUsCardsGroup />
    </SectionWrapper >
  )
};

export default AboutUs;
