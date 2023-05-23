import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';
const ACCESS_TOKEN = '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'; 

// Set the access token as a default Authorization header
axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`;

export const getUser = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const getRepositories = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};
