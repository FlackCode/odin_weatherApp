const weatherIcon = document.getElementById(`weatherIcon`);
const weatherType = document.getElementById(`weatherType`);
const country = document.getElementById(`country`);
const cityName = document.getElementById(`cityName`);
const degrees = document.getElementById(`degCels`);
const wind = document.getElementById(`wind`);
const humidity = document.getElementById(`humidity`);
let cityInput = document.getElementById(`cityInput`);
const citySubmit = document.getElementById(`citySubmit`);
citySubmit.addEventListener(`click`, () => {
    const query = cityInput.value;
    if ( query ) {
        getWeatherInfo(query);
    } else {
        cityInput.placeholder = 'ENTER A CITY NAME!!!';
        weatherType.textContent = 'Enter a city name!';
    }
});
async function getWeatherInfo(query) {
    const response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=a985db7d082a45b5a4d104119243103&q=${query}&aqi=no`)
    if ( response.ok ) {
        const weatherData = await response.json();
        weatherIcon.src = weatherData.current.condition.icon;
        weatherType.textContent = weatherData.current.condition.text;
        country.textContent = `Country: ${weatherData.location.country}`;
        cityName.textContent = `City name: ${weatherData.location.name}`;
        degrees.textContent = `Degrees: ${weatherData.current.temp_c}°C`;
        wind.textContent = `Wind: ${weatherData.current.wind_kph} km/h`;
        humidity.textContent = `Humidity: ${weatherData.current.humidity}%`
    } else {
        weatherType.textContent = 'Enter a valid city!';
    }
}