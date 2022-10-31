import React from "react";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import styles from "./Modal.module.scss";

const Modal = ({ modal, setModal }) => {
  let { modal_wrapper, active } = styles;
  const { isActive, type, source } = modal;

  if (isActive) modal_wrapper = `${modal_wrapper} ${active}`;

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
        <div
          className={modal_wrapper}
          onClick={() => setModal({ isActive: false })}
        >
          {<div onClick={(e) => e.stopPropagation()}>{modalSwitch(type)}</div>}
        </div>
      )}
    </>
  );
};

export default Modal;
