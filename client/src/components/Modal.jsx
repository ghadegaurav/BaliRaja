import React from "react";
import modalcss from "../styles/Modal.module.scss";

function Modal({ setOpenModal }) {  

  

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className={modalcss.modalBackground}>
      <div className={modalcss.modalContainer}>
        <div className={modalcss.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className={modalcss.title}>
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className={modalcss.body}>
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className={modalcss.footer}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id={modalcss.cancelBtn}
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
