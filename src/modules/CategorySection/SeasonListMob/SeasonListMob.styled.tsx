import styled from "@emotion/styled";

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

const SeasonItem = styled.li`
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

const SeasonImg = styled.img`
  width: calc(70%);
  max-width: 354px;
  box-sizing: border-box;
  box-shadow: 0 5px 14px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;

  &:hover {
    transition: all 0.5s;
    box-shadow: 0 5px 14px 1px rgba(0, 0, 0, 0.2);
  }
`;

const SeasonTitle = styled.h3`
  position: absolute;
  top: 46%;

  width: 100px;

  font-size: 20px;
  letter-spacing: 1.5px;
  font-weight: 700;
  text-transform: uppercase;
`;

const SeasonDesc = styled.span`
  position: absolute;
  font-size: 14px;
  top: 54%;
  width: 100px;
`;

export { SeasonListStyle, SeasonItem, SeasonTitle, SeasonImg, SeasonDesc };
