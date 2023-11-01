import { HeroSection, HeroContainer, imagesWrapper, Images } from "./HeroSlider.styled";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import imgData from "./HeroImages";

const HeroSlider = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <Fade
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
      </HeroContainer>
    </HeroSection>
  );
};

export default HeroSlider;
