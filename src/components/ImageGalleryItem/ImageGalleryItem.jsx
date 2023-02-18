import React from 'react';
import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  photo: { webformatURL, tags, largeImageURL },
  onClick,
}) => {
  const handleClick = () => {
    onClick(largeImageURL);
  };

  return (
    <li className={css.item}>
      <img
        className={css.image}
        src={webformatURL}
        alt={tags}
        onClick={handleClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  photo: propTypes.shape({
    webformatURL: propTypes.string,
    tags: propTypes.string,
    largeImageURL: propTypes.string,
  }).isRequired,
  onClick: propTypes.func.isRequired,
};

export default ImageGalleryItem;
