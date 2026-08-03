import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    return Promise.reject(err);
  }
);

export default api;

export const fetchGames = () => api.get('/games').then((r) => r.data);
export const fetchPlayers = (params) => api.get('/players', { params }).then((r) => r.data);
export const fetchPlayersByGame = (slug) => api.get(`/players/game/${slug}`).then((r) => r.data);
export const fetchPlayer = (slug) => api.get(`/players/slug/${slug}`).then((r) => r.data);
export const fetchTournaments = (params) => api.get('/tournaments', { params }).then((r) => r.data);
export const fetchMatches = (params) => api.get('/matches', { params }).then((r) => r.data);
export const fetchLiveMatches = () => api.get('/matches/live').then((r) => r.data);
export const fetchNews = (params) => api.get('/news', { params }).then((r) => r.data);
export const fetchNewsArticle = (slug) => api.get(`/news/slug/${slug}`).then((r) => r.data);
export const fetchMedia = (params) => api.get('/media', { params }).then((r) => r.data);
export const fetchYoutubeVideos = () => api.get('/media/youtube/videos').then((r) => r.data);
export const fetchProducts = (params) => api.get('/store/products', { params }).then((r) => r.data);
export const fetchSponsors = () => api.get('/sponsors').then((r) => r.data);
export const fetchTeamMembers = (params) => api.get('/team-members', { params }).then((r) => r.data);
export const fetchSettings = () => api.get('/dashboard/settings').then((r) => r.data);
export const submitApplication = (formData) => api.post('/applications', formData).then((r) => r.data);
export const submitContact = (data) => api.post('/dashboard/contact', data).then((r) => r.data);
export const createOrder = (data) => api.post('/store/orders', data).then((r) => r.data);
export const validateCoupon = (code) => api.get(`/store/coupons/${code}`).then((r) => r.data);
export const trackOrder = (num) => api.get(`/store/orders/track/${num}`).then((r) => r.data);
export const verifyOrderPayment = (data) => api.post('/store/orders/verify', data).then((r) => r.data);
export const login = (data) => api.post('/auth/login', data).then((r) => r.data);
export const getDashboardStats = () => api.get('/dashboard/stats').then((r) => r.data);
export const fetchAchievements = () => api.get('/achievements').then((r) => r.data);
