import styled from "@emotion/styled";

const ModalBackdrop = styled.div`
  z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.2);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    box-sizing: border-box;
    backdrop-filter: blur(5px);

    @media screen and (min-width: 768px) {
      padding: 0 40px;
    }
`;


const ModalContainer = styled.div`
  background-color: #f6f6f6;
`;

export { ModalBackdrop, ModalContainer };
