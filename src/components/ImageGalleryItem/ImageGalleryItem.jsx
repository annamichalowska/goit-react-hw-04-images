import React from 'react';
import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  photo: { webformatURL, tags, largeImageURL },
  onClick,
}) => (
  <li className={css.item}>
    <img
      className={css.image}
      src={webformatURL}
      alt={tags}
      onClick={() => onClick(largeImageURL)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  photo: propTypes.shape({
    webformatURL: propTypes.string,
    tags: propTypes.string,
    largeImageURL: propTypes.string,
  }).isRequired,
  onClick: propTypes.func.isRequired,
};

export default ImageGalleryItem;
