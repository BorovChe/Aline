import {
  LogoLink,
  AdditionalText,
  LogoWrapper,
  HeaderStyle,
  NavStyle,
  NavLinkStyle,
  HeaderContainer,
} from "./Header.styled";
import Icon from "components/SvgComponent/IconSvg";
import ProfileButton from "./components/NavProfileButton/NavProfileButton";

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContainer>
      <LogoWrapper to="/">
        <LogoLink>Aline</LogoLink>
        <AdditionalText>boutique</AdditionalText>
      </LogoWrapper>
      <NavStyle>
       <ProfileButton/>
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
