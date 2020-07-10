import axios, {AxiosResponse, AxiosInstance} from 'axios';
import qs from 'qs';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {store} from '@redux/store';
import {addLoading, removeLoading} from '@redux/loading/loading.actions';
import {uuid} from './uuid';

const DEBUG = process.env.NODE_ENV === 'development';

const axiosInstance = (isShowLoading: boolean = true): AxiosInstance => {
  const instance = axios.create({
    baseURL: 'https://reqres.in/api/',
    timeout: 200000,
  });

  const loadingId = uuid();

  //=======Request interceptor=========
  instance.interceptors.request.use(
    async (config) => {
      /** Set token to authorization header */
      const token = await AsyncStorage.getItem('AccessToken');
      if (token) {
        config.headers.common.Authorization = 'Bearer ' + token;
      }

      /** In dev, intercepts request and logs it into console for dev */
      if (DEBUG) {
        console.info('✉️ Request config: ', config);
      }

      /**Add loading */
      isShowLoading && store.dispatch(addLoading(loadingId));

      return config;
    },
    (error) => {
      if (DEBUG) {
        console.error('✉️ Request error', error);
      }

      /**Add loading */
      isShowLoading && store.dispatch(removeLoading(loadingId));
      return Promise.reject(error);
    },
  );

  //======Response interceptor============
  instance.interceptors.response.use(
    (config) => {
      /** In dev, intercepts request and logs it into console for dev */
      if (DEBUG) {
        console.info('✉️ Response config: ', config);
      }

      /**Remove all loading */
      isShowLoading && store.dispatch(removeLoading(loadingId));

      return config;
    },
    (error) => {
      console.log(error.response);
      if (DEBUG) {
        console.error('✉️ Response error: ', error.response);
      }

      // We need to make sure that this error includes data we need
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        Alert.alert(error.response.data.message);
      }

      /**Remove all loading */
      isShowLoading && store.dispatch(removeLoading(loadingId));

      return Promise.reject(error);
    },
  );

  return instance;
};

export const getAsync = (
  url: string,
  params?: object,
  isShowLoading: boolean = true,
): Promise<AxiosResponse> => {
  return axiosInstance(isShowLoading).get(url, {
    params: params,
    paramsSerializer: function (serializeParams) {
      return qs.stringify(serializeParams, {arrayFormat: 'repeat'});
    },
  });
};

export const postAsync = (
  url: string,
  json: object,
  isShowLoading: boolean = true,
): Promise<AxiosResponse> => {
  return axiosInstance(isShowLoading).post(url, json);
};

export const putAsync = (
  url: string,
  json?: object,
  isShowLoading: boolean = true,
): Promise<AxiosResponse> => {
  return axiosInstance(isShowLoading).put(url, json);
};

export const deleteAsync = (
  url: string,
  isShowLoading: boolean = true,
): Promise<AxiosResponse> => {
  return axiosInstance(isShowLoading).delete(url);
};

export const withEndpoint = (endpoint: string = '') => {
  return (url: string = '') => endpoint + url;
};

export default axiosInstance;
