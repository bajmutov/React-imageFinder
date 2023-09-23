import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { tags, webformatURL, largeImageURL } = this.props.photo;
    const { showModal } = this.state;
    return (
      <>
        <li className={css.ImageGalleryItem}>
          <img
            className={css['ImageGalleryItem-image']}
            src={webformatURL}
            alt={tags}
            onClick={this.toggleModal}
          />
          {showModal && (
            <Modal
              onClose={this.toggleModal}
              largeImageURL={largeImageURL}
              tag={tags}
            />
          )}
        </li>
      </>
    );
  }
}
export default ImageGalleryItem;
