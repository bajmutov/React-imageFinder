import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ photos, ...otherProps }) => {
  return (
    <ul className={css.ImageGallery}>
      {photos.map((photo, index) => (
        <ImageGalleryItem
          key={photo.id}
          photo={photo}
          index={index}
          {...otherProps}
        />
      ))}
    </ul>
  );
};
