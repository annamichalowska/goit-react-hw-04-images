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
  photo: propTypes.arrayOf({
    id: propTypes.number,
  }).isRequired,
  photoName: propTypes.array.isRequired,
  onClick: propTypes.func.isRequired,
};

export default ImageGallery;
