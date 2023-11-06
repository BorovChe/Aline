import styled from "@emotion/styled";

const CategoryStyled = styled.section`
  padding: 60px 16px;

  @media screen and (min-width: 768px) {
    padding: 60px 60px;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

// Category List

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const CategoryItem = styled.li`
position: relative;
  display: flex;
  justify-content: flex-start;

  &:nth-of-type(odd) {
    justify-content: flex-end;
  }

`;

const CategoryTitle = styled.h3`
  position: absolute;
  top: 50%;
  right: calc(50% - 100px);
`

const CategoryImg = styled.img`
  width: calc(100% - 100px);
  box-shadow: 0 5px 14px 1px rgba(0, 0, 0, 0.2);
`;

export {
  CategoryStyled,
  SectionTitle,
  CategoryList,
  CategoryItem,
  CategoryTitle,
  CategoryImg,
};
