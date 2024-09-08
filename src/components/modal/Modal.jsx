import { useSelector } from "react-redux";
import { Button } from "../button/button";
import styled from "styled-components";
import {
  selectModalText,
  selectModalOnConfirm,
  selectModalonCancel,
  selectModalIsOpen,
} from "../../selectors";

const ModalContainer = ({ className }) => {
  const text = useSelector(selectModalText);
  const isOpen = useSelector(selectModalIsOpen);

  const onConfirm = useSelector(selectModalOnConfirm);
  const onCancel = useSelector(selectModalonCancel);

  if (!isOpen) {
    return null;
  }
  return (
    <div className={className}>
      <div className="overlay"></div>
      <div className="box">
        <h3>{text}</h3>
        <div className="buttons">
          <Button width="120px" onClick={onConfirm}>
            Да
          </Button>
          <Button width="120px" onClick={onCancel}>
            Отмена
          </Button>
        </div>
      </div>
    </div>
  );
};
export const Modal = styled(ModalContainer)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 20;

  & .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  & .box {
    position: relative;
    top: 50%;
    transform: translate(0, -50px);
    width: 400px;
    margin: auto;
    padding: 0 20px 20px;
    text-align: center;
    background-color: #fff;
    border: 3px solid #000;
    z-index: 30;

    & .buttons {
      display: flex;
      justify-content: center;
    }
    & .buttons button {
      display: flex;
      justify-content: center;
      margin: 0 5px;
    }
  }
`;
