import {  CategoryListStyle,
    CategoryItem,
    CategoryTitle,
    CategoryImg,} from "./CategoryList.styled"

import {
    autumn,
    winter,
    spring,
    summer,
  } from "UI/images/CategoryListImages/index";


const CategoryList = () => {
    return (   <CategoryListStyle>
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
      </CategoryListStyle> );
}
 
export default CategoryList;