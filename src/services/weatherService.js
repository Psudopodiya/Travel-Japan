import axios from 'axios';

const api_key = 'acf6401497f4463beaf14b6bc315d0db';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const ICON_URL = 'http://openweathermap.org/img/wn/';

const fetchWeather = async (city) => {
    try {
        const response = await axios.get(
            `${BASE_URL}?q=${city}&appid=${api_key}`,
        );

        const data = response.data;

        const iconCode = data.weather[0].icon;
        const iconUrl = `${ICON_URL}${iconCode}@2x.png`;
        return {
            weatherData: data,
            iconUrl: iconUrl,
        };
    } catch (error) {
        throw new Error(
            error.response
                ? error.response.data.message
                : 'Failed to fetch weather data',
        );
    }
};

export default fetchWeather;
