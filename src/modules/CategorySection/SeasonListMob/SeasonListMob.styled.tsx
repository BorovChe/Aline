import styled from "@emotion/styled";

const SeasonListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const SeasonItem = styled.li`
position: relative;
  display: flex;
  justify-content: flex-start;

  &:nth-of-type(odd) {
    justify-content: flex-end;
  }

`;

const SeasonTitle = styled.h3`
  position: absolute;
  top: 50%;
  right: calc(50% - 100px);
`

const SeasonImg = styled.img`
  width: calc(100% - 100px);
  box-shadow: 0 5px 14px 1px rgba(0, 0, 0, 0.2);
`;

export {
    SeasonListStyle,
    SeasonItem,
    SeasonTitle,
    SeasonImg,
}