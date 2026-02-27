import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: { 'Content-Type': 'application/json' },
});

export const api = {
  getLaptops: async () => (await apiClient.get('/laptops')).data,
  getLaptopById: async (id) => (await apiClient.get(`/laptops/${id}`)).data,
  createLaptop: async (laptop) => (await apiClient.post('/laptops', laptop)).data,
  updateLaptop: async (id, laptop) => (await apiClient.patch(`/laptops/${id}`, laptop)).data,
  deleteLaptop: async (id) => { await apiClient.delete(`/laptops/${id}`); },
};
