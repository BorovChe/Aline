import styled from "@emotion/styled";

const HeroStyled = styled.section`
  width: 100%;
  background-color: #121212;
  padding-top: 68px;

  @media screen and (min-width: 768px) {
    padding-top: 94px;
  }
`;

const imagesWrapper = {
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
`;

export { HeroStyled, imagesWrapper, Images };
