import IconSvg from "components/SvgComponent/IconSvg";
import { ButtonList, Button } from "./AuthButtons.styled";

type Props = {
  onClose: () => void;
};

const AuthButtons = ({ onClose }: Props) => {
  return (
    <ButtonList>
      <Button>
        <button type="button">
          <IconSvg width={"28"} height={"28"} stroke="#000000" fill="#000000"  id="arrowBack"/>
          Вхід</button>
      </Button>
      <Button>
        <button form="login" type="submit">
          Вхід
        </button>
      </Button>
    </ButtonList>
  );
};

export default AuthButtons;
