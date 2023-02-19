import { useState, useEffect, useRef } from 'react';
import css from './App.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

const PER_PAGE = 12;

function App() {
  const [page, setPage] = useState(1);
  const [photo, setPhoto] = useState([]);
  const [photoName, setPhotoName] = useState('');
  const [currentLargeImageURL, setCurrentLargeImageURL] = useState('');
  const [searchTotal, setSearchTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const key = 'key=31934367-658e9fff939a1c4d22479e433';

  const prevNameRef = useRef(photoName);
  const prevPageRef = useRef(page);

  useEffect(() => {
    prevNameRef.current = photoName;
  }, [photoName]);

  const handlerFormSubmit = photoName => {
    const prevName = prevNameRef.current;
    if (photoName !== prevName) {
      setPhotoName(photoName);
      setPage(1);
      setPhoto([]);
      console.log('photoName:', photoName);
      console.log('prevName:', prevName);
      return;
    }
    if (photoName === prevName) {
      return alert('There is the same name');
    } else {
      alert('There is no photo with this name');
    }
  };

  const handlerLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
  };

  const handleOpen = url => {
    setCurrentLargeImageURL(url);
  };

  const handleClose = () => {
    setCurrentLargeImageURL('');
  };

  useEffect(() => {
    const fetchPhotos = () => {
      const prevName = prevNameRef.current;
      const prevPage = prevPageRef.current;
      if (photoName !== prevName) {
        setPhoto([]);
      }

      if (prevName !== photoName || prevPage !== page) {
        setLoading(true);

        fetch(
          `https://pixabay.com/api/?q=${photoName}&page=${page}&${key}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
        )
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(new Error());
          })
          .then(photo => {
            setPhoto(prevPhoto => [...prevPhoto.photo, ...photo.hits]);
            setSearchTotal(photo.total);
          })
          .catch(error => setError(error))
          .finally(() => setLoading(false));
      }
    };
    fetchPhotos();
  }, [photoName, page, error]);

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handlerFormSubmit} page={page} />
      {photo && <ImageGallery photoName={photo} onClick={handleOpen} />}

      {currentLargeImageURL && (
        <Modal closeModal={handleClose} url={currentLargeImageURL} />
      )}
      {loading && <Loader />}
      {!loading && searchTotal > 12 && (
        <Button onClick={handlerLoadMoreClick} />
      )}
    </div>
  );
}

export default App;
