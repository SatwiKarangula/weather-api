const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

const PORT = 3000;

// Custom API Route
app.get('/weather/:city', async (req, res) => {

    const city = req.params.city;

    try {

        const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
        );

        const data = weatherResponse.data;

        const customResponse = {
            city: data.name,
            temperature: data.main.temp,
            weather: data.weather[0].description,
            humidity: data.main.humidity
        };

        res.json(customResponse);

    } catch (error) {

        res.status(500).json({
            error: 'Failed to fetch weather data'
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
