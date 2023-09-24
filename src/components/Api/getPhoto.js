import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38604486-c97a7af17c6668551d7e0c5c6';

export const getPhotoBySearch = async (searchQuery, page) => {
  const params = {
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  };
  try {
    const response = await axios({ params });
    const { hits, totalHits } = response.data;
    return { hits, totalHits };
  } catch (error) {
    // console.log('error', error);
    Notiflix.Notify.failure(error.message);
  }
};
