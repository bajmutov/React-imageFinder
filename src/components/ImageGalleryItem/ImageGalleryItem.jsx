import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ photo: { tags, webformatURL, largeImageURL } }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img
          className={css['ImageGalleryItem-image']}
          src={webformatURL}
          alt={tags}
          onClick={toggleModal}
        />
        {showModal && (
          <Modal
            onClose={toggleModal}
            largeImageURL={largeImageURL}
            tag={tags}
          />
        )}
      </li>
    </>
  );
};

export default ImageGalleryItem;
