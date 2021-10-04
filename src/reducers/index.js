import { combineReducers } from 'redux';
import weatherDataReducer from './weatherDataReducer';

export default combineReducers({
  data: weatherDataReducer,
});