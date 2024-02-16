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
  SeasonImgWrapper,
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
            >
              <SeasonTitle   transition={{duration: 0.8, delay: 0.3 }}
                variants={evenOrOddFunc(i, textAnimEven, textAnimOdd)}
              >
                {season}
              </SeasonTitle>
              <SeasonDesc   transition={{duration: 0.8, delay: 0.4 }}
                variants={evenOrOddFunc(i, textAnimEven, textAnimOdd)}
              >
                {seasonDescription}
              </SeasonDesc>
              <SeasonImgWrapper>
              <SeasonImg transition={{duration: 0.8, delay: 0.3 }}
                variants={evenOrOddFunc(i, imgAnimEven, imgAnimOdd)}
                src={seasonImage}
                alt={season}
              />
              </SeasonImgWrapper>
            </SeasonWrapper>
          </SeasonItem>
        );
      })}
    </SeasonListStyle>
  );
};

export default SeasonListMob;
