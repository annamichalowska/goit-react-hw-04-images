import { useEffect } from 'react';
import propTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ url, closeModal }) => {
  useEffect(() => {
    const handleKeyEsc = evt => {
      if (evt.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyEsc);

    return () => {
      window.removeEventListener('keydown', handleKeyEsc);
    };
  }, [closeModal]);

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      closeModal();
    }
  };

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img className="img" src={url} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  url: propTypes.string,
  closeModal: propTypes.func,
}.isRequired;

export default Modal;
