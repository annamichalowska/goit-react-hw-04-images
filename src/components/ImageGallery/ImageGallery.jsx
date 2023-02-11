import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
//import PropTypes from 'prop-types';
//import css from './ImageGallery.module.css';

const ImageGallery = ({ images, showPicture }) => {
  return (
    <ul>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            showPicture={showPicture}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.defaultProps = {
  images: [],
};
