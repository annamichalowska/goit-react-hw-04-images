//import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

// const ImageGalleryItem = ({
//   largeImageURL,
//   tags,
//   webformatURL,
//   showPicture,
// }) => {
//   return (
//     <li onClick={() => showPicture({alt: tags, src: webformatURL})}>
//       <img src={largeImageURL} alt={tags}/>
//     </li>
//   );
// };

export default function ImageGalleryItem({ src, tags, dataSrc, onClick }) {
  return (
    <li className={css.ImageGalleryItem} onClick={onClick}>
      <img src={src} alt={tags} data-src={dataSrc} className={css.image} />
    </li>
  );
}

