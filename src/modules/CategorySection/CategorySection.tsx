import { CategoryStyled, SectionTitle } from "./CategorySection.styled";
import { SectionContainer } from "components/SectionContainer/SectionContainer.styled";
import CategoryList from "./CategoryList/CategoryList";
import { useResize } from "hooks/useResize";

const CategorySection = () => {
  const { isScreenDesc } = useResize();

  return (
    <CategoryStyled>
      <SectionContainer>
        <SectionTitle>FASHION IS MY PROFESSION</SectionTitle>
        {isScreenDesc ? <p>228</p> : <CategoryList />}
      </SectionContainer>
    </CategoryStyled>
  );
};

export default CategorySection;
