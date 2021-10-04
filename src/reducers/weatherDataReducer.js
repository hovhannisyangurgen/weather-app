import { FETCH_DATA, FETCH_DATA_ERROR } from '../actions';

export default function weatherDataReducer(state = {}, action) {
  switch (action.type) {
  case FETCH_DATA:
    return {
      ...state,
      ...action.data,
    };  
  case FETCH_DATA_ERROR:
    return {
      ...state,
      ...action.error,
    };
  default:
    return state;
  }
}