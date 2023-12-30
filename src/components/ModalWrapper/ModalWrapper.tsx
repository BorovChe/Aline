import { ModalBackdrop, ModalContainer } from "./ModalWrapper.styled";
import { createPortal } from "react-dom";

const modalRoot: any = document.querySelector("#modal-root");

const ModalWrapper = ({ children }: any) => {
  return createPortal(
    <ModalBackdrop>
      <ModalContainer>{children}</ModalContainer>
    </ModalBackdrop>,
    modalRoot,
  );
};

export default ModalWrapper;
