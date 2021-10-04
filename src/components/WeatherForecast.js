import { List, Card, Col, Row } from 'antd';
import moment from 'moment';

const WeatherForecast = ({ dailyData }) => {
  return <Col md={18} lg={18} sm={18} offset={3}>
    <List
      grid={{ gutter: 12, column: 8 }}
      dataSource={dailyData}
      renderItem={item => (
        <List.Item>
          <Card title={moment(item.dt * 1000).format('MMM DD')}>
            {[ 'day', 'night' ].map(key => <Row>
              <Col>
                <img className='day-time-icon' src={`${key}.png`} alt='day-time'/>{`${item.temp[key]}K`}
              </Col>
            </Row>)}
          </Card>
        </List.Item>
      )}
    />
  </Col>;
};

export default WeatherForecast;
