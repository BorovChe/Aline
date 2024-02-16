import  collection  from "tempData/collection.json";

import {
  SeasonListStyle,
  SeasonItem,
  SeasonTitle,
  SeasonImg,
  SeasonDesc,
} from "./SeasonListMob.styled";

const SeasonListMob = () => {
  // console.log(collection);
  return (
    <SeasonListStyle>
      {collection.map(({season, seasonImage, seasonDescription}, i) => {
        return (
          <SeasonItem key={i}>
            <SeasonTitle>{season}</SeasonTitle>
            <SeasonDesc>{seasonDescription}</SeasonDesc>
            <SeasonImg src={seasonImage} alt={season} />
          </SeasonItem>
        );
      })}
    </SeasonListStyle>
  );
};

export default SeasonListMob;