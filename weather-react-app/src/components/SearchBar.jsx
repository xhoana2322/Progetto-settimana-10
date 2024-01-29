import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Container, Button, Card } from "react-bootstrap"
import axios from 'axios'
import DetailPage from '../pages/DetailPage';
import MyForecast from './MyForecast';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {

    // current weather
    const [location, setLocation] = useState(" ");
    const [data, setData] = useState({});
    const [forecast, setForecast] = useState({});
    const navigate = useNavigate();
    

    const API_KEY = "2c0e32ab941b002f193ab520f467a7cf"
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&lang=it&appid=${API_KEY}`

    // current weather
    async function searchLocation (e) {
        // if(e.key === 'Enter') {
            await axios.get(urlWeather)
                .then((response) => {
                    setData(response.data)
                    console.log(response.data)
                    // setLocation("")
                    // navigate(`/detail`, { state: { data: data } });
                    
                })
                .catch(err => console.error(err))
        }

    
    // forecast
    async function searchForcast () {
        await axios.get(urlForecast)
            .then((resp) => {
                // console.log(resp)
                setForecast(resp.data.list)
                console.log(resp.data.list)
                // setForecast("")
            })
            .catch(err => console.error(err))
    }

    // input
    const targetLocation = (e) => {
        setLocation(e.target.value.trim())
    }

    function callbackWeather() {
        searchForcast()
        searchLocation()
    }

    
    useEffect(() => {
        searchLocation()
        searchForcast()
    }, [location, forecast])



  return (
    <>
    <Container className='vh-100 d-flex justify-content-center align-items-center'>
        <Card className='w-50 text-center p-5 border-info '>
           <div className='mt-4 text-center d-flex flex-column align-items-center justify-content-center'>
            <h1 className='mb-2'>Weather app </h1>
            <p>Search your location right below!</p>

            <Form className='mt-3'>
                <Row className='d-flex align-items-center justify-content-center'>
                    <Col xs="auto" className='mb-5 w-auto' >
                        <Form.Control
                        type="search"
                        value={location}
                        onKeyPress={callbackWeather}
                        onChange={targetLocation}
                        placeholder="Search your place..."
                        className=" mr-sm-2"
                        />
                    </Col>
                    <Button 
                    variant="outline-info" 
                    onClick={() => {
                        searchLocation(); 
                        searchForcast();
                        navigate(`/detail`, { state: { data, forecast } });
                    }}>
                        <i className="bi bi-search"></i>
                    </Button>
                </Row>
            </Form>
        </div> 
        </Card>
        
        
    </Container>
    
    </>
  )
}
