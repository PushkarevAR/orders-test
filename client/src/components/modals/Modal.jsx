import React from "react";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import styles from "./Modal.module.scss";

const Modal = ({ isActive, type, source, setActive }) => {
  let { modalStyle, activeStyle } = styles;
  if (isActive) modalStyle = `${modalStyle} ${activeStyle}`;

  const modalSwitch = (type) => {
    switch (type) {
      case "edit":
        return (
          <ModalEdit
            order={source}
            closeModal={() => setActive({ isActive: false, type })}
          />
        );
      case "delete":
        return (
          <ModalDelete
            order={source}
            closeModal={() => setActive({ isActive: false, type })}
          />
        );
      case "add":
        return (
          <ModalAdd
            order={source}
            closeModal={() => setActive({ isActive: false, type })}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      {isActive && (
        <div
          className={modalStyle}
          onClick={() => setActive({ isActive: false, type })}
        >
          {<div onClick={(e) => e.stopPropagation()}>{modalSwitch(type)}</div>}
        </div>
      )}
    </>
  );
};

export default Modal;
