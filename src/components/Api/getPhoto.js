import axios from 'axios';
import './Api.module.css';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '38604486-c97a7af17c6668551d7e0c5c6';

  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPageImg = 12;
    this.typeImage = 'photo';
    this.orientationImg = 'horizontal';
    this.safeSearchAge = true;
  }

  getPhotoBySearch = async () => {
    const searchParams = new URLSearchParams({
      key: this.#API_KEY,
      q: this.searchQuery,
      image_type: this.typeImage,
      orientation: this.orientationImg,
      safesearch: this.safeSearchAge,
      page: this.page,
      per_page: this.perPageImg,
    });

    const response = await axios(`${this.#BASE_URL}?${searchParams}`);
    console.log(response.data);
    return response.data;
  };

  multiplyPages() {
    return this.page * this.perPageImg;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
