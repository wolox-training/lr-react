import api from '../config/api';

export const getLines = () => api.get('/win');
export const getLogin = (mail, password) => api.get(`users?mail=${mail}&password=${password}`);
