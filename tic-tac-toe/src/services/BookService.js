import api from '../config/api';

export default {
  getBookDetail: id => api.get('/books', { id })
};
