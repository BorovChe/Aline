import styled from "@emotion/styled";

const AuthContainer = styled.div`
  display: flex;
  max-width: 470px;

  @media screen and (min-width: 768px) {
    max-width: 1200px;
  }
`;

const FormContainer = styled.div`
  width: 400px;
`;

const FormWrapper = styled.div`
padding: 40px;
`;

export { AuthContainer, FormContainer, FormWrapper };