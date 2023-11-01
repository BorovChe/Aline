import {
  LogoLink,
  AdditionalText,
  LogoWrapper,
  HeaderStyle,
  NavStyle,
  NavLinkStyle,
  HeaderContainer,
} from "./Header.styled";
import Icon from "UI/IconSvg/IconSvg";

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContainer>
      <LogoWrapper>
        <LogoLink to="/">Aline</LogoLink>
        <AdditionalText>boutique</AdditionalText>
      </LogoWrapper>
      <NavStyle>
        <NavLinkStyle to="/profile">
          <Icon width={"28"} height={"28"} fill="#f6f6f6" id="#profile" />
        </NavLinkStyle>
        <NavLinkStyle to="/favorites">
          <Icon width={"28"} height={"28"} fill="#f6f6f6" id="#favorite" />
        </NavLinkStyle>
        <NavLinkStyle to="/cart">
          <Icon width={"28"} height={"28"} stroke="#f6f6f6" id="#cart" />
        </NavLinkStyle>
      </NavStyle>
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
