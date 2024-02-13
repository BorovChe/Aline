import Icon from "components/SvgComponent/IconSvg";
import { Button } from "./NavProfileButton.styled";
import AuthModal from "modules/Autorization/AuthModal/AuthModal";
import { useState } from "react";

const ProfileButton = () => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(prev => !prev)

  return (
    <>
    <Button onClick={() => {toggleModal()}} type="button">
      <Icon width={"24"} height={"24"} fill="#f6f6f6" id="#profile" />
    </Button>
    {showModal && <AuthModal onClose={toggleModal}/>}
    </>
  );
};

export default ProfileButton;

/* <NavLinkStyle to="/profile">
          <Icon width={"28"} height={"28"} fill="#f6f6f6" id="#profile" />
        </NavLinkStyle> */
