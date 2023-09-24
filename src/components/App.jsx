import { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { getPhotoBySearch } from './Api/getPhoto';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const handleSetSearchQuery = query => {
    if (query !== searchQuery) {
      setSearchQuery(query);
      setPage(1);
      setPhotos([]);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fetchImagesAndUpdateState = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { hits, totalHits } = await getPhotoBySearch(searchQuery, page);
        if (!hits.length) {
          throw new Error('No images found with this word');
        }
        setPhotos(prevImages => [...prevImages, ...hits]);
        setTotalPages(totalHits);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImagesAndUpdateState();
  }, [page, searchQuery]);

  const loadMorePhotosClick = () => setPage(prevPage => prevPage + 1);

  const shouldShowButton = photos && photos.length < totalPages;

  return (
    <>
      <Searchbar submit={handleSetSearchQuery} />
      {error && <h1>No images found with this word</h1>}
      {<ImageGallery photos={photos} />}
      {isLoading && <Loader />}
      {photos && photos.length && !isLoading && shouldShowButton && (
        <Button loadmore={loadMorePhotosClick} showButton={isLoading} />
      )}
    </>
  );
};

export default App;
