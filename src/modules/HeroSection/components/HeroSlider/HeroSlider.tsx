import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { imagesWrapper, Images } from "./HeroSlider.styled";
import imgData from "../HeroImages/HeroImages";



const outputHeroPhotos = (data: any) => {
  return data.map((url: string, index: number) => (
    <Images loading="lazy" key={index} src={url} alt={url} />
  ));
};

const HeroSlider = () => {
  return (
    <Fade
      arrows={false}
      canSwipe={true}
      pauseOnHover={true}
      onChange={function noRefCheck() {}}
      onStartChange={function noRefCheck() {}}
    >
      <div style={imagesWrapper}>{outputHeroPhotos(imgData.white)}</div>
      <div style={imagesWrapper}>{outputHeroPhotos(imgData.wedding)}</div>
      <div style={imagesWrapper}>{outputHeroPhotos(imgData.beach)}</div>
    </Fade>
  );
};

export default HeroSlider;
