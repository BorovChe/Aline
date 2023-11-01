import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const HeaderStyle = styled.header`
width: 100%;
background-color: #121212;
`;

const HeaderContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    min-height: 98px;
  max-width: 1440px;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
`
//Logo

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoLink = styled(NavLink)`
  font-family: "Le Jour", sans-serif;
  font-size: 56px;
  line-height: 1;
  color: #f6f6f6;
`;

const AdditionalText = styled.span`
  text-transform: uppercase;
  color: #f6f6f6;
  font-weight: 500;
`;


//Navigation

const NavStyle = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const NavLinkStyle = styled(NavLink)`
  max-width: 26px;
  max-height: 26px;

  &:hover{
    transform: scale(1.2);
  }
`;




export {  AdditionalText, LogoLink, LogoWrapper, HeaderStyle, NavStyle, NavLinkStyle, HeaderContainer };
