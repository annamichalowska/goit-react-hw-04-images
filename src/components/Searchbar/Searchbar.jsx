import React, { Component } from 'react';
import propTypes from 'prop-types';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchText: '',
  };
  handleTextChange = evt => {
    this.setState({ searchText: evt.currentTarget.value.toLowerCase() });
  };
  onSubmit = evt => {
    evt.preventDefault();

    if (this.state.searchText.trim() === '') {
      alert('There is no text');
      return;
    }
    this.props.onSubmit(this.state.searchText);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.onSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchText}
            onChange={this.handleTextChange}
          />
          <button type="submit" className={css.button}>
           Search
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default Searchbar;
