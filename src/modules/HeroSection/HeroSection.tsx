import { HeroStyled } from "./HeroSection.styled";
import { SectionContainer } from "components/SectionContainer/SectionContainer.styled";
import HeroSlider from "./components/HeroSlider/HeroSlider";


const HeroSection = () => {
  return (
    <HeroStyled>
      <SectionContainer>
    <HeroSlider/>
      </SectionContainer>
    </HeroStyled>
  );
};

export default HeroSection;
