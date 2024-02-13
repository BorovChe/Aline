import styled from "@emotion/styled";

const SeasonListStyle = styled.ul`
  display: flex;
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

  &:nth-of-type(odd) {
    justify-content: flex-end;

    h3 {
      left: 0;
    }
  }
`;

const SeasonImg = styled.img`
  width: calc(74%);
  box-shadow: 0 5px 14px 1px rgba(0, 0, 0, 0.2);
`;

const SeasonTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  position: absolute;
  /* -webkit-text-stroke: 0.5px white;
  -webkit-text-fill-color: black; */
  right: 0;
  top: 50%;
`;

export { SeasonListStyle, SeasonItem, SeasonTitle, SeasonImg };
