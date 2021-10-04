import { Fragment } from 'react';
import { Col } from 'antd';
import moment from 'moment';

const CurrentWeather = ({ current }) => {
  const converter = {
    K: tmp => tmp,
    C: tmp => (tmp - 273.15).toFixed(2),
    F: tmp => (tmp * 9/5 - 459.67).toFixed(2),
  };

  return (
    <Fragment>
      <Col span={24} className={"text-block"}>
        {moment(current?.dt * 1000).format('MMM DD')} Weather
      </Col>
      {
        [ 'K', 'C', 'F' ].map((key, index) => <Col key={`${key}${index}`} span={24} className={"text-block"}>
          <span>
            {key} - {converter[key](current?.temp)}
          </span>
        </Col>)
      }
      
    </Fragment>
  );
};

export default CurrentWeather;