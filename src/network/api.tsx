import axios, { AxiosInstance } from 'axios';
import { API_BASE_URL } from '../constants';

export const API_SERVICE: AxiosInstance = axios.create({
  baseURL: API_BASE_URL
});