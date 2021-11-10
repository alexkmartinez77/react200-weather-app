require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/search/:city', (req, res) => {
    cityName = req.params.city;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`)
            .then(response => {
                const today = new Date();
                const timeStamp ={
                    date: `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`,
                    time: today.toLocaleTimeString('en-US', { hour12: false })
                }
                const {name, coord, main, wind} = response.data;
                res.send({name, coord, main, wind, timeStamp})
            })
            .catch(err => console.log(err));
});

module.exports = app;
