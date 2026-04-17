import axios from 'axios';

const API_KEY = '55466894-415e85796c7b7d8e9a89ec112';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get('', { params });
  return response.data;
}
