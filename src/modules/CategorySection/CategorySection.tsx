import { CategoryStyled, SectionTitle } from "./CategorySection.styled";
import { SectionContainer } from "components/SectionContainer/SectionContainer.styled";
import { useResize } from "hooks/useResize";
import SeasonListMob from "./SeasonListMob/SeasonListMob";
import SeasonListDesc from "./SeasonListDesc/SeasonListDesc";

const CategorySection = () => {
  const { isScreenDesc } = useResize();

  return (
    <CategoryStyled>
      <SectionContainer>
        <SectionTitle>FASHION IS MY PROFESSION</SectionTitle>
        {isScreenDesc ? <SeasonListDesc/> : <SeasonListMob />}
      </SectionContainer>
    </CategoryStyled>
  );
};

export default CategorySection;
