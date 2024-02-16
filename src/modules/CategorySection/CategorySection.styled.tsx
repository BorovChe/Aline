import styled from "@emotion/styled";

const CategoryStyled = styled.section`
  padding: 20px 10px;
  max-width: 767px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    padding: 20px 20px;
    max-width: 1200px;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export { CategoryStyled, SectionTitle };