import React, { Component } from 'react';
import propTypes from 'prop-types';
//import css from './Searchbar.module.css';

// class Searchbar extends Component {
//   state = {
//     value: '',
//   };

//   handleChange = evt => {
//     this.setState({ value: evt.target.value.toLowerCase() });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const { onSubmit } = this.props;
//     onSubmit({...this.state});
//     this.clearForm();
//   };

//   clearForm = () => {
//     this.setState(() => ({
//       value: '',
//     }));
//   };

//   render() {
//     const { value } = this.state;
//     const { handleChange, handleSubmit } = this;

//     return (
//       <header>
//         <form onSubmit={handleSubmit}>
//           <input
//             onChange={handleChange}
//             type="text"
//             name="search"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={value}
//             required
//           />
//           <button type="submit">
//             <span>Search</span>
//           </button>
//         </form>
//       </header>
//     );
//   }
// }

class Searchbar extends Component {
  static propTypes = { onSubmit: propTypes.func };
  render() {
    return (
      <header className="Searchbar">
        <form
          className="SearchForm"
          onSubmit={event => this.props.onSubmit(event)}
        >
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
