import collection from "tempData/collection.json";
import {
  imgAnimEven,
  imgAnimOdd,
  textAnimEven,
  textAnimOdd,
} from "./seasonAnimation";

import {
  SeasonListStyle,
  SeasonItem,
  SeasonTitle,
  SeasonImg,
  SeasonDesc,
  SeasonWrapper,
} from "./SeasonListMob.styled";

const SeasonListMob = () => {
  return (
    <SeasonListStyle>
      {collection.map(({ season, seasonImage, seasonDescription }, i) => {
        const evenOrOddFunc = (index: any, evenAnim: any, oddAnim: any) => {
          if (index % 2 === 0) {
            return evenAnim;
          }
          return oddAnim;
        };

        return (
          <SeasonItem key={i}>
            <SeasonWrapper
              initial="hidden"
              whileInView="visible"
              animate={{ pathLength: 1 }}
            >
              <SeasonTitle   transition={{ delay: 0.3 }}
                variants={evenOrOddFunc(i, textAnimEven, textAnimOdd)}
              >
                {season}
              </SeasonTitle>
              <SeasonDesc   transition={{ delay: 0.4 }}
                variants={evenOrOddFunc(i, textAnimEven, textAnimOdd)}
              >
                {seasonDescription}
              </SeasonDesc>
              <SeasonImg transition={{ delay: 0.3 }}
                loading="lazy"
                variants={evenOrOddFunc(i, imgAnimEven, imgAnimOdd)}
                src={seasonImage}
                alt={season}
              />
            </SeasonWrapper>
          </SeasonItem>
        );
      })}
    </SeasonListStyle>
  );
};

export default SeasonListMob;
