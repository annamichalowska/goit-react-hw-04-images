import React, { Component } from 'react';
//import React from 'react';
//import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import css from './App.module.css';

//const apiKey = '31934367-658e9fff939a1c4d22479e433';

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
      alert('there is no photo');
    }
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

      // setTimeout(() => {
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
      // }, 2000);
    }
  }

  render() {
    const { page, photo } = this.state;
    return (
      <section className={css.app}>
        <Searchbar onSubmit={this.handlerFormSubmit} page={page} />

        {photo && (
          <ImageGallery
            photoName={photo}
            onClick={this.onOpenModalWithLargeImage}
          />
        )}

        {/* {currentLargeImageURL && (
          <Modal closeModal={this.onModalClose} url={currentLargeImageURL} />
        )}
        {loading && <Loader />}
        {!loading && searchTotal > 12 && (
          <Button onClick={this.hendlerMoreClick} />
        )}
        <ToastContainer autoClose={2500} /> */}
      </section>
    );
  }
}

export default App;
