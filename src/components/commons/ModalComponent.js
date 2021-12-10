import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/Modal.css';

const ModalComponent = ({ isOpen, closeModal, children }) => {
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <article className={`main-modal ${isOpen ? 'is-open' : ''}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          ❌
        </button>
        {children}
      </div>
    </article>,
    document.getElementById('modals')
  );
};

export default ModalComponent;
