import { request } from '../utils/request';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const fetchData = (data) => ({ type: FETCH_DATA, data  });

export const fetchDataError = (error) => ({ type: FETCH_DATA_ERROR, error });

export const fetchWeatherData = ({ currentLocation }) => (dispatch) => {
  request().get('onecall', {
    params: {
      appid: process.env.REACT_APP_APP_ID,
      ...currentLocation,
      exclude: 'hourly,minutely',
    },
  })
    .then(({ data }) => dispatch(fetchData(data)))
    .catch(error => dispatch(fetchDataError(error)));
};