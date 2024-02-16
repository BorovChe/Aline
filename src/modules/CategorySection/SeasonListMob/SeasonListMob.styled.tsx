import styled from "@emotion/styled";
import { motion } from "framer-motion";

const SeasonListStyle = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const SeasonItem = styled(motion.li)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 480px;

  &:nth-of-type(even) {
    justify-content: flex-end;

    h3 {
      right: 64%;
    }

    span {
      right: 64%;
    }
  }

  &:nth-of-type(odd) {
    h3 {
      left: 64%;
    }

    span {
      left: 64%;
    }
  }
`;

const SeasonWrapper = styled(motion.div)`
  width: calc(70%);
  overflow: hidden;
`;

const SeasonTitle = styled(motion.h3)`
  position: absolute;
  top: 46%;
  z-index: 111;
  width: 100px;

  font-size: 20px;
  letter-spacing: 1.5px;
  font-weight: 700;
  text-transform: uppercase;
`;

const SeasonDesc = styled(motion.span)`
  position: absolute;
  font-size: 14px;
  top: 54%;
  width: 100px;
  z-index: 222;
`;

const SeasonImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;

const SeasonImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  max-width: 354px;
  box-shadow: 0 5px 8px 1px rgba(0, 0, 0, 0.2);
`;

export {
  SeasonListStyle,
  SeasonItem,
  SeasonTitle,
  SeasonImg,
  SeasonDesc,
  SeasonWrapper,
  SeasonImgWrapper,
};
