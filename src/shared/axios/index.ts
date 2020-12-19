import axios from 'axios';

const movieAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '22976249522296438c84a949adf12172',
    language: 'pt-BR',
  },
});

export default movieAPI;
