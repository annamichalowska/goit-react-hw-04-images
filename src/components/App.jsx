import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

//const apiKey = '31934367-658e9fff939a1c4d22479e433';
axios.defaults.baseURL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    //URL: 'https://pixabay.com/api/',
    //API_KEY: '31934367-658e9fff939a1c4d22479e433',
    search: '',
    images: [],
    error: '',
    status: 'idle',
    page: 1,
    currentImage: null,
  };

  componentDidUpdate(prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchPictures();
    }
  }

  async componentDiMount(searchValue, page) {
    const hits = await axios.get(
      `?q=dog&page=1&key=31934367-658e9fff939a1c4d22479e433&image_type=photo&orientation=horizontal&per_page=12`
    );

    this.setState(({ images }) => ({
      images: [...images, ...hits],
    }));
    return hits.data;
  }

  // pushImagesToState = response => {
  //   const imagesFromResponse = response.data.hits;
  //   let newSearchArray = [];
  //   newSearchArray = [...this.state.images, ...imagesFromResponse];
  //   this.setState(({ images }) => ({ images: newSearchArray }));
  // };

  // getImages = async (searchValue, page) => {
  //   const response = await axios.get(
  //     `?q=${searchValue}&page=${page}&key=31844347-16adccdcc2872ee3a7bce49dd&image_type=photo&orientation=horizontal&per_page=12`
  //   );
  //   return response.data;
  // };

  //   async componentDidUpdate(_, { page, query }) {
  //     if (
  //       (page !== this.state.page || query !== this.state.query) &&
  //       this.state.query.trim()
  //     ) {
  //       try {
  //         this.setState({ loader: !this.state.loader });
  //         await getImages(this.state.query, this.state.page).then(resp => {
  //           if (resp.hits.length) {
  //             this.setState(prevState => {
  //               return {
  //                 images: [...prevState.images, ...resp.hits],
  //                 showBtn: this.state.page < Math.ceil(resp.totalHits / 12),
  //               };
  //             });
  //           } else {
  //             toast.error('Enter a more meaningful search term');
  //           }
  //         });
  //       } catch (error) {
  //         console.log(error);
  //         toast.error("We're in trouble, sorry");
  //       } finally {
  //         this.setState({ loader: !this.state.loader });
  //       }
  //     }
  //   }
  // fetchImage = () => {
  //   return fetch(
  //     `${this.state.URL}?q=${this.state.query}&page=${this.state.page}&key=${this.state.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //   );
  // };

  searchImages = ({ search }) => {
    this.setState({ search, images: [], page: 1 });
  };

  showImage = img => {
    this.setState({
      currentImage: img,
    });
  };

  render() {
    const { images } = this.state;
    const { searchImages, showImage } = this;
    return (
      <>
        <Searchbar onSubmit={searchImages} />
        <ImageGallery images={images} showPicture={showImage} />
      </>
    );
  }
}

export default App;
