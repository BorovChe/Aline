import { CategoryStyled, SectionTitle, CategoryList, CategoryItem, CategoryTitle, CategoryImg } from "./CategorySection.styled";
import { SectionContainer } from "UI/SectionContainer/SectionContainer";
import {
  autumn,
  winter,
  spring,
  summer,
} from "UI/images/CategoryListImages/index";

const CategorySection = () => {
  return (
    <CategoryStyled>
      <SectionContainer>
        <SectionTitle>FASHION IS MY PROFESSION</SectionTitle>
        <CategoryList>
          <CategoryItem>
            <CategoryTitle>Autumn</CategoryTitle>
            <CategoryImg src={autumn} alt={autumn} />
          </CategoryItem>
          <CategoryItem>
            <CategoryTitle>Winter</CategoryTitle>
            <CategoryImg src={winter} alt={winter} />
          </CategoryItem>
          <CategoryItem>
            <CategoryTitle>Spring</CategoryTitle>
            <CategoryImg src={spring} alt={spring} />
          </CategoryItem>
          <CategoryItem>
            <CategoryTitle>Summer</CategoryTitle>
            <CategoryImg src={summer} alt={summer} />
          </CategoryItem>
        </CategoryList>
      </SectionContainer>
    </CategoryStyled>
  );
};

export default CategorySection;
