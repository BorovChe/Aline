import ModalWrapper from "components/ModalWrapper/ModalWrapper";
import { AuthContainer, FormWrapper, FormContainer } from "./AuthModal.styled";
import AsideBlock from "./components/AsideBlock/AsideBlock";
import RegistrationForm from "./components/AuthForm/Registration/RegistrationForm";
import AuthButtons from "./components/AuthButtons/AuthButtons";

type Props = {
    onClose: () => void  
  } 


const AuthModal = ({onClose} : Props) => {
    return ( 
        <ModalWrapper>
        <AuthContainer>
          <AsideBlock />
          <FormContainer>
          <FormWrapper>
          <RegistrationForm/>
          </FormWrapper>
          <AuthButtons onClose={onClose}/>
          </FormContainer>
          </AuthContainer>
    </ModalWrapper>
     );
}
 
export default AuthModal;