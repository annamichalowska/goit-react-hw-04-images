//import PropTypes from 'prop-types';
//import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  largeImageURL,
  tags,
  webformatURL,
  showPicture,
}) => {
  return (
    <li onClick={() => showPicture({alt: tags, src: webformatURL})}>
      <img src={largeImageURL} alt={tags}/>
    </li>
  );
};

export default ImageGalleryItem;
