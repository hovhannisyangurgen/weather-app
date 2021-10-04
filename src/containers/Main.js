import { useState, useEffect, Fragment } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Row, Spin } from 'antd';

import { fetchWeatherData } from '../actions/index';
import WeatherForecast from '../components/WeatherForecast';
import CurrentWeather from '../components/CurrentWeather';

const WeatherData = ({ data }) => {
  const dispatch = useDispatch();
  const [ currentLocation, setCurrentLocation ] = useState({ lat: 0, lng: 0  });
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coordinates = {
        lat: position.coords.latitude,
        lon: position.coords.latitude,
      };
      setCurrentLocation(coordinates);
    });
  }, []);

  useEffect(() => {
    if (currentLocation.lat && currentLocation.lon) {
      dispatch(fetchWeatherData({ currentLocation }));
    }
  }, [ currentLocation ]);

  return <Fragment>
    <Spin spinning={!data.current}>
      <Row className='forecast-bg'>
        <CurrentWeather current={data.current} />
        <WeatherForecast dailyData={data.daily} /> 
      </Row>
    </Spin>
  </Fragment>;
};

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(
  mapStateToProps,
  null,
)(WeatherData);