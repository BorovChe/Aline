import styled from "@emotion/styled";

const HeroSection = styled.section`
  width: 100%;
  background-color: #121212;
`;

const HeroContainer = styled.div`
@media screen and (min-width: 320px) {
    margin-left: auto;
  margin-right: auto;
  max-width: 767px;
}


@media screen and (min-width: 768px) {
    max-width: 1440px;
    max-height: 600px;
}
`;

const imagesWrapper = {
  marginRight: "auto",
  marginLeft: "auto",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const Images = styled.img`
display: block;
  width: 100%;
  height: 100%;
  &:nth-of-type(odd) {
display: none;
  }

  @media screen and (min-width: 768px) {
    &:nth-of-type(odd) {
display: block;
    }
    width: 33.3%;
max-height: 600px;
}
`

export { HeroContainer, HeroSection, imagesWrapper, Images };