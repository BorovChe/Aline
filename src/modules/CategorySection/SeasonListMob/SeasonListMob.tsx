import  collection  from "tempData/collection.json";

import {
  SeasonListStyle,
  SeasonItem,
  SeasonTitle,
  SeasonImg,
} from "./SeasonListMob.styled";

const SeasonListMob = () => {
  // console.log(collection);
  return (
    <SeasonListStyle>
      {collection.map(({season, seasonImage}, i) => {
        return (
          <SeasonItem key={i}>
            <SeasonTitle>{season}</SeasonTitle>
            <SeasonImg src={seasonImage} alt={season} />
          </SeasonItem>
        );
      })}
    </SeasonListStyle>
  );
};

export default SeasonListMob;