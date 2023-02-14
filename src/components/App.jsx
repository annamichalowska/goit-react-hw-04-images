import React, { Component } from 'react';
import css from './App.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    page: 1,
    per_page: 12,
    photo: [],
    photoName: '',
    currentLargeImageURL: '',
    searchTotal: null,
    loading: false,
    error: null,
  };

  handlerFormSubmit = photoName => {
    if (photoName !== this.state.photoName) {
      this.setState({ photoName, page: 1 });
      this.setState({ photo: [] });
      return;
    } else {
      alert('There is no photo with this name');
    }
  };

  hendlerLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  modalOpen = url => {
    this.setState({
      currentLargeImageURL: url,
    });
  };

  modalClose = () => {
    this.setState({
      currentLargeImageURL: '',
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.photoName;
    const prevPage = prevState.page;
    const { photoName, page, per_page } = this.state;
    const key = 'key=31934367-658e9fff939a1c4d22479e433';

    if (photoName !== prevName) {
      this.setState({ photo: [] });
    }
    if (prevName !== photoName || prevPage !== page) {
      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?q=${photoName}&page=${page}&${key}&image_type=photo&orientation=horizontal&per_page=${per_page}`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error());
        })
        .then(photo =>
          this.setState(prevState => ({
            photo: [...prevState.photo, ...photo.hits],
            searchTotal: photo.total,
          }))
        )
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }
  }

  render() {
    const { page, photo, currentLargeImageURL, searchTotal, loading } =
      this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handlerFormSubmit} page={page} />
        {photo && <ImageGallery photoName={photo} onClick={this.modalOpen} />}

        {currentLargeImageURL && (
          <Modal closeModal={this.modalClose} url={currentLargeImageURL} />
        )}
        {loading && <Loader />}
        {!loading && searchTotal > 12 && (
          <Button onClick={this.hendlerLoadMoreClick} />
        )}
      </div>
    );
  }
}

export default App;
