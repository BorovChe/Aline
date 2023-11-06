import { HeroStyled, imagesWrapper, Images } from "./HeroSlider.styled";
import { SectionContainer } from "UI/SectionContainer/SectionContainer";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import imgData from "./HeroImages";

const HeroSection = () => {
  return (
    <HeroStyled>
      <SectionContainer>
        <Fade
        arrows={false}
          canSwipe={true}
          pauseOnHover={true}
          onChange={function noRefCheck() {}}
          onStartChange={function noRefCheck() {}}
        >
          <div style={imagesWrapper}>
            {imgData.beach.map((url, index) => (
              <Images
                loading="lazy"
                key={index}
                src={url}
                alt={url}
              />
            ))}
            </div>
          <div style={imagesWrapper}>
            {imgData.white.map((url, index) => (
              <Images
                loading="lazy"
                key={index}
                src={url}
                alt={url}
              />
            ))}
          </div>
        </Fade>
      </SectionContainer>
    </HeroStyled>
  );
};

export default HeroSection;
