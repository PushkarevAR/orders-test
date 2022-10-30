import React from "react";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import ModalInfo from './ModalInfo';
import styles from "./Modal.module.scss";

const Modal = ({ isActive, type, source, setModal }) => {
  let { modalStyle, activeStyle } = styles;
  if (isActive) modalStyle = `${modalStyle} ${activeStyle}`;

  const modalSwitch = (type) => {
    switch (type) {
      case "edit":
        return (
          <ModalEdit
            order={source}
            setModal={setModal}
          />
        );
      case "delete":
        return (
          <ModalDelete
            order={source}
            setModal={setModal}
          />
        );
      case "add":
        return (
          <ModalAdd
            order={source}
            setModal={setModal}
          />
        );
        case 'info':
          return (
            <ModalInfo
              order={source}
              setModal={setModal({isActive: false})}
              type = {type}
            />
          )
      default:
        return <></>;
    }
  };

  return (
    <>
      {isActive && (
        <div
          className={modalStyle}
          onClick={() => setModal({ isActive: false, type })}
        >
          {<div onClick={(e) => e.stopPropagation()}>{modalSwitch(type)}</div>}
        </div>
      )}
    </>
  );
};

export default Modal;
