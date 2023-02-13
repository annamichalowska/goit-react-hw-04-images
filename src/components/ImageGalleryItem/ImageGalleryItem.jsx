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

// export default function ImageGalleryItem({ src, tags, dataSrc, onClick }) {
//   return (
//     <li className={css.ImageGalleryItem} onClick={onClick}>
//       <img src={src} alt={tags} data-src={dataSrc} className={css.image} />
//     </li>
//   );
// }

//import React, { Component } from 'react';
//import propTypes from 'prop-types';

// class ImageGalleryItem extends Component {
//   state = {
//     imageLink: '',
//     imageAlt: '',
//   };
//   static defaultProps = { imageLink: ' ', imageAlt: ' ' };

//   static propTypes = {
//     imageLink: propTypes.string,
//     imageAlt: propTypes.string,
//     largeImageURL: propTypes.string,
//     modalFn: propTypes.func,
//   };

//   render() {
//     return (
//       <li className="ImageGalleryItem">
//         <img
//           onClick={e => {
//             this.props.modalFn(e.target.attributes[2].value);
//             console.log(e);
//           }}
//           src={this.props.imageLink}
//           alt={this.props.imageAlt}
//           data-large={this.props.largeImageURL}
//           className={css.image}
//         />
//       </li>
//     );
//   }
// }

// export default ImageGalleryItem;
import React from 'react';

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

// ImageGalleryItem.propTypes = {
//   photo: PropTypes.shape({
//     webformatURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//   }).isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default ImageGalleryItem;
