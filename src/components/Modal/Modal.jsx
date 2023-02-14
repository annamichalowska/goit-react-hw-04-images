import { Component } from 'react';
import propTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  state = {
    url: this.props.url,
  };

  handleKeyEsc = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyEsc);
  }

  render() {
    return (
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img className="img" src={this.state.url} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  url: propTypes.string,
  closeModal: propTypes.func,
}.isRequired;

export default Modal;
