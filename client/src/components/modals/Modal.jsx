import React from "react";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import styles from "./Modal.module.scss";

const Modal = ({ isActive, type, source, setModal }) => {
  let { modal, active } = styles;

  if (isActive) modal = `${modal} ${active}`;

  const modalSwitch = (type) => {
    switch (type) {
      case "edit":
        return <ModalEdit order={source} setModal={setModal} />;
      case "delete":
        return <ModalDelete order={source} setModal={setModal} />;
      case "add":
        return <ModalAdd setModal={setModal} />;
      default:
        return <></>;
    }
  };

  return (
    <>
      {isActive && (
        <div className={modal} onClick={() => setModal({ isActive: false })}>
          {<div onClick={(e) => e.stopPropagation()}>{modalSwitch(type)}</div>}
        </div>
      )}
    </>
  );
};

export default Modal;
