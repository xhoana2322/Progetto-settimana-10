import React from 'react'
import { Card, CardTitle } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';

export default function Forecast() {

  const location = useLocation();
  const { forecast } = location.state;

  return (
    <>
      {forecast && forecast.length > 0 && (
        <Card style={{ width: '15rem' }}>
          <Card.Body>
            <CardTitle>
              {forecast.dt_txt}
            </CardTitle>
            <img 
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} 
              alt=""
              className='img-weather' 
            />
            <Card.Text>
              <div>
                <div>
                  {forecast.main.temp_max}
                </div>
                <div className='text-secondary'>
                  {forecast.main.temp_max}
                </div>
              </div> 
            </Card.Text>
          </Card.Body>
        </Card>
      )}
        
    </>
  )
}
