console.log('process.env.WEATHER_API_KEY:', process.env.WEATHER_API_KEY);
import './styles.css';
import sunnyIcon from './images/sunny.svg';

const searchBar = document.getElementById('city');
const submitButton = document.querySelector('.search-button');
const forecast = document.querySelector('.forecast');

submitButton.addEventListener("click", submitClick);
searchBar.addEventListener("keydown", handleKeyPress);

function submitClick() {
    const cityName = searchBar.value;
    getData();
}

function handleKeyPress(event) {
    if (event.key == "Enter") {
        submitClick();
    }
}

function getData() {
    const API_KEY = process.env.WEATHER_API_KEY;

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchBar.value}?key=${API_KEY}`, {mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        forecast.innerHTML = `
            <h1>${response.address}</h1>
            <h1>${response.currentConditions.temp}°F</h1>
            <img src="${sunnyIcon}" alt="image of sunshine">
            <h2>${response.description}</h2>
            <h3>HI: 94°F LO: 90°F</h3>
        `
    });
}

