import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import propTypes from 'prop-types';
//import css from './ImageGallery.module.css';

// const ImageGallery = ({ images, showPicture }) => {
//   return (
//     <ul>
//       {images.map(({ id, webformatURL, largeImageURL, tags }) => {
//         return (
//           <ImageGalleryItem
//             key={id}
//             id={id}
//             webformatURL={webformatURL}
//             largeImageURL={largeImageURL}
//             tags={tags}
//             showPicture={showPicture}
//           />
//         );
//       })}
//     </ul>
//   );
// };

class ImageGallery extends Component {
  static defaultProps = { imagesArray: propTypes.array };
  static propTypes = {
    loader: propTypes.func,
    imagesArray: propTypes.array,
    modalFn: propTypes.func,
  };
  // componentDidMount() {
  //   this.props.loader(true);
  // }

  render() {
    return (
      <ul className="ImageGallery">
        {this.props.imagesArray.map((image, id) => {
          return (
            <ImageGalleryItem
              key={image.id}
              imageLink={image.webformatURL}
              imagAlt={image.tags}
              largeImageURL={image.largeImageURL}
              modalFn={this.props.modalFn}
            />
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
