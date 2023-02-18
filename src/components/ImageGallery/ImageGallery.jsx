import React from 'react';
import propTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photoName, onClick }) => (
  <ul className={css.images}>
    {photoName.map(photo => (
      <ImageGalleryItem key={photo.id} photo={photo} onClick={onClick} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  photoName: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  onClick: propTypes.func.isRequired,
};

export default ImageGallery;
