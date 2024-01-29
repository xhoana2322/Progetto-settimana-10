import React from 'react'
import { Card } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import MyForecast from '../components/MyForecast'


export default function DetailPage() {

  const location = useLocation();
  // const { data = null } = location.state || {};

  const { state: { data = null, forecast = null } = {} } = location;

  // const { forecast } = forecast.state;
  console.log(data)
  console.log(forecast)
  

  return (
    <>
      {data ? (
          <div className='vh-100 d-flexjustify-content-center align-items-center'>

          <Card className='card w-50'>
            <Card.Body className="d-flex justify-content-between">
              <div className='card-left-part'>
                  <h4> {data.name}, {data.sys.country} </h4>
                  <p className='fs-6'> {data.weather[0].description}</p>
                  <p className='temperature fs-1 fw-bold'> {data.main.temp.toFixed()} °C </p>
              </div>
              <div className='card-right-part'>
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" className='img-weather' />
                <div className='info'>
                  <div className='d-flex justify-content-between feels-like'>
                    <p> Feels like </p>
                    <p className='fw-bold'> {data.main.feels_like.toFixed()} °C </p>
                  </div>
                  <div className='d-flex justify-content-between feels-like'>
                    <p> Humidity </p>
                    <p className='fw-bold'> {data.main.humidity.toFixed()} % </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card> 
        
        {/* forecast */}
        <MyForecast forecast={forecast} />

        </div>

      ) : (
        null
      )}



    </>
  );
}  


