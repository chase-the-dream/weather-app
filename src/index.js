console.log('process.env.WEATHER_API_KEY:', process.env.WEATHER_API_KEY);
import './styles.css';

// Weather Image Imports
import clearDayIcon from './images/clear-day.svg';
import clearNightIcon from './images/clear-night.svg';
import cloudyIcon from './images/cloudy.svg';
import fogIcon from './images/fog.svg';
import partlyCloudyDayIcon from './images/partly-cloudy-day.svg';
import partlyCloudyNightIcon from './images/partly-cloudy-night.svg';
import rainIcon from './images/rain.svg';
import snowIcon from './images/snow.svg';
import thunderIcon from './images/thunder.svg';
import windIcon from './images/wind.svg';

// Icon mapping object
const iconMap = {
    'clear-day': clearDayIcon,
    'clear-night': clearNightIcon,
    'cloudy': cloudyIcon,
    'fog': fogIcon,
    'partly-cloudy-day': partlyCloudyDayIcon,
    'partly-cloudy-night': partlyCloudyNightIcon,
    'rain': rainIcon,
    'snow': snowIcon,
    'thunder': thunderIcon,
    'wind': windIcon
};

const searchBar = document.getElementById('city');
const submitButton = document.querySelector('.search-button');
const forecast = document.querySelector('.forecast');
const daysContainer = document.querySelector('.days-container');

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
        console.log(response);
        const iconSrc = iconMap[response.currentConditions.icon] || cloudyIcon; // fallback to cloudy icon
        forecast.innerHTML = `
            <h1>${response.resolvedAddress}</h1>
            <h1>${response.currentConditions.temp}°F</h1>
            <img src="${iconSrc}" alt="image of weather conditions">
            <h2>${response.currentConditions.conditions}</h2>
            <p>${response.description}</p>
            <h3>LO: ${response.days[0].tempmin}°F | HI: ${response.days[0].tempmax}°F</h3>
        `

        for(let i = 1; i <= daysContainer.children.length; i++)
        {
            
            const day = daysContainer.children[i-1];
            const dayData = response.days[i];
            const dayIcon = iconMap[dayData.icon] || cloudyIcon;
            
            // Convert date string to day name
            const date = new Date(dayData.datetime);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
            
            day.innerHTML = `
                <h3>${dayName}</h3>
                <img src="${dayIcon}" alt="image of weather conditions">
                <h3>Rain: ${dayData.precipprob}%</h3>
                <p>LO: ${dayData.tempmin}<p>
                <p>HI: ${dayData.tempmax}<p>
            `;
        }
    });
}

getData();