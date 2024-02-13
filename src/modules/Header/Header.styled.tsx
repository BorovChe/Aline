import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const HeaderStyle = styled.header`
  border-bottom: 0.5px solid rgba(247, 247, 247, 0.2);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: background-color .3s cubic-bezier(.4, 0, .2, 1),
    backdrop-filter .3s cubic-bezier(.4, 0, .2, 1), box-shadow .3s cubic-bezier(.4, 0, .2, 1);
  background-color: #121212;
z-index: 111;
  background-color: #0c0c0cbf;
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 12px #191c2666;
`;

const HeaderContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-height: 60px;
  max-width: 1200px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  min-height: 66px;
  }
`;
//Logo

const LogoWrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoLink = styled.div`
  font-family: "Le Jour", sans-serif;
  font-size: 34px;
  line-height: 1;
  color: #f6f6f6;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

const AdditionalText = styled.span`
  text-transform: uppercase;
  color: #f6f6f6;
  font-weight: 500;
  font-size: 12px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;
 
//Navigation

const NavStyle = styled.nav`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

const NavLinkStyle = styled(NavLink)`
  max-width: 26px;
  max-height: 26px;

  &:hover {
    transform: scale(1.2);
  }
`;

export {
  AdditionalText,
  LogoLink,
  LogoWrapper,
  HeaderStyle,
  NavStyle,
  NavLinkStyle,
  HeaderContainer,
};
