import { CategoryStyled, SectionTitle, CategoryList, CategoryItem, CategoryTitle, CategoryImg } from "./CategorySection.styled";
import { SectionContainer } from "UI/SectionContainer/SectionContainer";
import {
  autumn,
  winter,
  spring,
  summer,
} from "UI/images/CategoryListImages/index";

const media = window.matchMedia("(max-width: 768px)").matches;

const CategorySection = () => {
  console.log(console.log(window.innerWidth));
  return (
    <CategoryStyled>
      <SectionContainer>
        <SectionTitle>FASHION IS MY PROFESSION</SectionTitle>
        {media ? <h2>mobile</h2> :<h2>desc</h2>}
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
