var express = require('express');
var router = express.Router();
var request = require('request');
var moment = require('moment');
// moment().utcOffset(-5);

var baseWeatherUrl = "https://api.openweathermap.org/data/2.5";
var weathrAppId = "";



/* GET the weather today  */
router.get('/today', function(req, res, next) {
    var weather_url=baseWeatherUrl + "/weather?id=5157588&units=imperial&APPID=" + weathrAppId;

    request(weather_url, function (err, response, body) {
        if(err){
            console.log('error:', err);
            res.send("There was an error: " + err)
        } else {
            let weather = JSON.parse(body);

            var day = moment.unix(weather.dt)

            let message = {};
            message["current"] = weather.main.temp;
            message["high"] = weather.main.temp_max;
            message["low"] = weather.main.temp_min;
            message["wind"] = weather.wind.speed;
            message["type"] = weather.weather[0].main;
            message["description"] = weather.weather[0].description;
            message["icon"] = (weather.weather[0].main + ".png").toLowerCase();
            message["date"] = day.local().format('YYYY-MM-DD HH:mm:ss')
            console.log(message);

            res.json(message)
        }
    });
});

/* GET the weather forecast for tomorrow */
router.get('/tomorrow', function(req, res, next) {
    // var weather_url="https://api.openweathermap.org/data/2.5/forecast?id=5157588&units=imperial&APPID=6eca2652e315a15b9424d0317e219d8d";
    var weather_url=baseWeatherUrl + "/forecast?id=5157588&units=imperial&APPID=" + weathrAppId;
    
    request(weather_url, function (err, response, body) {
        if(err){
            console.log('error:', err);
            res.send("There was an error: " + err)
        } else {
            let weather = JSON.parse(body);
            console.log(weather);

            var numLines = weather.cnt;

            var startDate = moment.unix(weather.list[0].dt)
            var endDate = moment.unix(weather.list[weather.cnt - 1].dt)

            let startWeather = {};
            startWeather["date"] = startDate.local().format('YYYY-MM-DD HH:mm:ss');
            
            let endWeather = {};
            endWeather["date"] = endDate.local().format('YYYY-MM-DD HH:mm:ss');

            let message = {};
            message["start"] = startWeather;
            message["end"] = endWeather;
            //console.log(message);

            // res.json(weather.list[0])
            res.json(message)
        }
    });
});

module.exports = router;
