import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHighScores = async () => {
  
  const response = await api.get('/v2/admin');
//   console.log(response.data)
  return response.data;
};

// export const getDashboardStats = async () => {
//   const response = await api.get('/stats');
//   return response.data;
// };
